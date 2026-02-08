import { getLinkPreview } from "link-preview-js";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: "No url provided" }, { status: 400 });
    }

    let preview;

    try {
      preview = await getLinkPreview(url, {
        timeout: 5000,
        followRedirects: "follow",
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/237.84.2.178 Safari/537.36",
        },
      });
    } catch (err) {
      console.error("Preview fetch failed", err);
      return NextResponse.json(
        { error: "Failed to fetch preview" },
        { status: 502 },
      );
    }

    return NextResponse.json(preview);
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "API error" }, { status: 500 });
  }
}
