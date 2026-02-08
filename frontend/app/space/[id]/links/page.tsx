"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LinkType } from "@/components/space/links/types/Link";
import LinkCard from "@/components/space/links/LinkCard";

const LinksPage = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const params = useParams();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      const response = await axios.get(`${baseUrl}/spaces/${params?.id}/links`);
      setLinks(response.data);
    };

    fetchLinks();
  }, []);

  return (
    <div className='grid lg:grid-cols-2 p-12 gap-12 auto-rows-fr'>
      {links.map((link: LinkType) => (
        <LinkCard
          key={link.id}
          id={link.id}
          title={link.title}
          description={link.description}
          url={link.url}
        />
      ))}
    </div>
  );
};

export default LinksPage;
