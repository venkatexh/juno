"use client";
import { Space } from "@/components/space/types/SpaceTypes";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import SpaceHeader from "@/components/space/home/SpaceHeader";
import SpaceDueToday from "@/components/space/home/SpaceDueToday";
import SpaceMembers from "@/components/space/home/SpaceMembers";

const SpacePage = () => {
  const [space, setSpace] = useState<Space>();

  const [pageError, setPageError] = useState(false);
  const params = useParams();

  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const getSpaceById = async () => {
      const response = await axios.get(`${baseURL}/spaces/${params?.id}`);
      setSpace(response.data);
    };

    getSpaceById();
  }, [pageError]);

  return (
    <div className='p-12 flex flex-col gap-12'>
      <SpaceHeader
        name={space?.name ?? ""}
        description={space?.description ?? ""}
      />
      <div className='flex flex-row gap-12'>
        <SpaceDueToday />
        <SpaceMembers />
      </div>
    </div>
  );
};

export default SpacePage;
