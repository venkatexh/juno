"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { Space } from "@/components/space/types/SpaceTypes";
import SpaceHeader from "@/components/space/home/SpaceHeader";
import SpaceDueToday from "@/components/space/home/SpaceDueToday";
import SpaceMembers from "@/components/space/home/SpaceMembers";

const SpacePage = () => {
  const params = useParams();
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [space, setSpace] = useState<Space>();

  useEffect(() => {
    const getSpaceById = async () => {
      const response = await axios.get(`${baseURL}/spaces/${params?.spaceId}`);
      setSpace(response.data);
    };

    getSpaceById();
  }, [params, baseURL]);

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
