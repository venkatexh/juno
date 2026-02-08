"use client";

import { Link } from "./types/Link";
import { useEffect, useState } from "react";
import { TextLarge, TextSmall } from "@/components/reusables/texts/Texts";

const LinkCard = ({ title, description, url }: Link) => {
  const [preview, setPreview] = useState(
    {} as { image?: string; images?: string[] },
  );
  const [previewLoading, setPreviewLoading] = useState(true);

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
    <div className='w-80 h-64 rounded-xl bg-slate-800'>
      <div className='h-3/5 flex items-center justify-center'>
        {previewLoading && (
          <div className='text-xs'>Loading link preview..</div>
        )}
        {!previewLoading && (preview.image || preview.images) ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={preview.image || preview.images?.[0]}
            alt='preview'
            className='mx-auto'
          />
        ) : (
          !previewLoading && (
            <div className='text-xs'>Link preview not available</div>
          )
        )}
      </div>
      <div className='w-full h-2/5 px-6'>
        <TextLarge>{title}</TextLarge>
        <TextSmall>{description}</TextSmall>
      </div>
    </div>
  );
};

export default LinkCard;
