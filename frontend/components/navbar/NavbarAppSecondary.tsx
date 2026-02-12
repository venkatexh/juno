"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useModal } from "@/contexts/modal-context";

import { useParams } from "next/navigation";
import { TextLarge } from "../reusables/texts/Texts";
import CreateModuleForm from "../module/CreateModuleForm";
import { NavItem } from "@/resources/constants/navbar/types/NavItem";
import { menuItemsNavSec } from "@/resources/constants/navbar/MenuItemsNavbarSecondary";

import { ModuleProps } from "@/components/module/types/ModuleProps";

const NavbarAppSecondary = () => {
  const params = useParams();
  const { openModal } = useModal();

  const [modules, setModules] = useState<ModuleProps[]>([]);

  useEffect(() => {
    const fetchModules = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/modules/${params?.id}`,
      );

      if (res.status === 200 || res.status === 201) {
        setModules(res.data);
      }
    };
    fetchModules();
  }, [params]);

  const handleNewModuleClick = () => {
    openModal(<CreateModuleForm />);
  };

  return (
    <div className='fixed left-16 w-64 h-screen border-r border-slate-800 flex flex-col py-10 px-2'>
      <div className='flex flex-col'>
        {menuItemsNavSec.map((item: NavItem) => (
          <Link
            key={item.title}
            className='my-1 px-6 text-lg'
            href={`/space/${params?.id}/${item.href}`}>
            <div>{item.title}</div>
          </Link>
        ))}
      </div>
      <div className='flex flex-col'>
        {modules.map((module: ModuleProps) => (
          <Link
            key={module.id}
            className='my-1 px-6 text-lg'
            href={`/space/`}>
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
