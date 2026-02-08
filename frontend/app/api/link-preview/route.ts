import { getLinkPreview } from "link-preview-js";
import { NextResponse } from "next/server";
import redis from "@/resources/lib/redis";

const SUCCESS_TTL = 60 * 60 * 24 * 7 * 30;
const FAILURE_TTL = 60 * 60 * 24;

function previewKey(url: string) {
  return `linkpreview:${encodeURIComponent(url)}`;
}

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: "No url provided" }, { status: 400 });
    }

    // SSRF PROTECTION
    let parsedUrl: URL;
    try {
      parsedUrl = new URL(url);
      if (!["http:", "https:"].includes(parsedUrl.protocol)) {
        throw new Error();
      }
    } catch {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    // REDIS HIT
    const key = previewKey(parsedUrl.toString());
    const cached = await redis.get(key);
    if (cached) {
      return NextResponse.json(JSON.parse(cached), { status: 200 });
    }

    // REDIS MISS
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let preview: any;

    try {
      preview = await getLinkPreview(parsedUrl.toString(), {
        timeout: 5000,
        followRedirects: "follow",
        headers: {
          "user-agent":
            "Mozilla/5.0 (Link Preview Bot) (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/237.84.2.178 Safari/537.36",
        },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      await redis.set(key, JSON.stringify(null), "EX", FAILURE_TTL);

      return NextResponse.json(
        { error: "Failed to fetch preview" },
        { status: 502 },
      );
    }

    // NORMALIZE DATA
    const normalized = {
      url: parsedUrl.toString(),
      image: preview?.images?.[0] || preview?.image,
    };

    await redis.set(key, JSON.stringify(normalized), "EX", SUCCESS_TTL);

    return NextResponse.json(normalized);
  } catch (err) {
    console.error("Link preview error:", err);
    return NextResponse.json(
      { error: "Link preview: Internal server error" },
      { status: 500 },
    );
  }
}
