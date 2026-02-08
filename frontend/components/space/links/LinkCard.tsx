"use client";

import { LinkType } from "./types/Link";
import { useEffect, useState } from "react";
import { TextLarge, TextSmall } from "@/components/reusables/texts/Texts";
import Link from "next/link";

const LinkCard = ({ title, description, url }: LinkType) => {
  const [preview, setPreview] = useState(
    {} as { image?: string; images?: string[] },
  );
  const [previewLoading, setPreviewLoading] = useState(true);
  const [isLargeImage, setIsLargeImage] = useState(false);

  const IMAGE_HEIGHT_THRESHOLD = 60;

  useEffect(() => {
    const fetchLinkPreview = async () => {
      const response = await fetch(`/api/link-preview`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
        }),
      });
      const data = await response.json();
      console.log(data);
      setPreview(data);
      setPreviewLoading(false);
    };

    fetchLinkPreview();
  }, [url]);

  return (
    <Link href={url} className='block w-full h-full'>
      <div className='h-full flex rounded-xl bg-slate-800 overflow-hidden'>
        <div className='w-2/5 h-full flex items-center justify-center'>
          {previewLoading && (
            <div className='text-xs'>Loading link preview..</div>
          )}
          {!previewLoading && (preview.image || preview.images) ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={preview.image || preview.images?.[0]}
              alt='preview'
              onLoad={(e) => {
                const img = e.currentTarget;
                setIsLargeImage(img.naturalHeight >= IMAGE_HEIGHT_THRESHOLD);
              }}
              className={`${isLargeImage ? "h-full" : ""} rounded-xl rounded-r-none`}
            />
          ) : (
            !previewLoading && (
              <div className='text-xs'>Link preview not available</div>
            )
          )}
        </div>
        <div className='w-3/5 px-6 py-2'>
          <TextLarge>{title}</TextLarge>
          <TextSmall className='line-clamp-2'>{description}</TextSmall>
          <TextSmall>Posted by First Last</TextSmall>
          <TextSmall>2 days ago</TextSmall>
        </div>
      </div>
    </Link>
  );
};

export default LinkCard;
