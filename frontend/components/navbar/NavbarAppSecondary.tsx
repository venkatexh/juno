"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useModal } from "@/contexts/modal-context";

import { useParams } from "next/navigation";
import { TextLarge } from "../reusables/texts/Texts";
import CreateModuleForm from "../module/CreateModuleForm";

import { ModuleProps } from "@/components/module/types/ModuleProps";

const NavbarAppSecondary = () => {
  const params = useParams();
  const { openModal } = useModal();
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [modules, setModules] = useState<ModuleProps[]>([]);

  useEffect(() => {
    const fetchModules = async () => {
      const res = await axios.get(
        `${baseURL}/spaces/${params?.spaceId}/modules`,
      );

      if (res.status === 200 || res.status === 201) {
        setModules(res.data);
      }
    };
    fetchModules();
  }, [params, baseURL]);

  const handleNewModuleClick = () => {
    openModal(<CreateModuleForm />, "PORTRAIT");
  };

  return (
    <div className='fixed left-16 w-64 h-screen border-r border-slate-800 flex flex-col py-10 px-2'>
      <TextLarge className='px-6 pb-4'>All modules</TextLarge>
      <div className='flex flex-col'>
        <Link href={`/space/${params?.spaceId}`} className='my-1 px-6 text-lg'>
          Home
        </Link>
        {modules.map((module: ModuleProps) => (
          <Link
            key={module.id}
            className='my-1 px-6 text-lg'
            href={`/space/${params?.spaceId}/module/${module.id}`}>
            {module.name}
          </Link>
        ))}
      </div>
      <TextLarge
        className='px-6 cursor-pointer'
        onClick={() => handleNewModuleClick()}>
        + New module
      </TextLarge>
    </div>
  );
};

export default NavbarAppSecondary;
