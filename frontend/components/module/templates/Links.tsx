"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useModal } from "@/contexts/modal-context";
import LinkCard from "@/components/space/links/LinkCard";
import { LinkType } from "@/components/space/links/types/Link";
import CreateLinkForm from "@/components/space/links/CreateLinkForm";

const LinksPage = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const params = useParams();
  const { openModal } = useModal();
  const [links, setLinks] = useState<LinkType[]>([]);

  useEffect(() => {
    const fetchLinks = async () => {
      const response = await axios.get(
        `${baseUrl}/modules/${params?.moduleId}/links`,
      );
      setLinks(response.data);
    };

    fetchLinks();
  }, [baseUrl, params]);

  const addNewLinkToList = (link: LinkType) => {
    setLinks((prevLinks) => [...prevLinks, link]);
  };

  const handleOpenNewLink = () => {
    openModal(
      <CreateLinkForm
        handleNewLinkResponse={(link) => addNewLinkToList(link)}
      />,
      "PORTRAIT",
    );
  };

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
      <div onClick={handleOpenNewLink}>New Link</div>
    </div>
  );
};

export default LinksPage;
