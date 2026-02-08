"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Link } from "@/components/space/links/types/Link";
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
    <div className='flex flex-wrap p-12'>
      {links.map((link: Link) => (
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
