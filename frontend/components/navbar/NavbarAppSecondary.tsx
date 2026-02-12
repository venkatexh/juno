"use client";

import { menuItemsNavSec } from "@/resources/constants/navbar/MenuItemsNavbarSecondary";
import { NavItem } from "@/resources/constants/navbar/types/NavItem";
import Link from "next/link";
import { useParams } from "next/navigation";
import { TextLarge } from "../reusables/texts/Texts";
import CreateModuleForm from "../module/CreateModuleForm";
import { useModal } from "@/contexts/modal-context";

const NavbarAppSecondary = () => {
  const { openModal } = useModal();
  const params = useParams();

  const handleNewModuleClick = () => {
    openModal(<CreateModuleForm />);
  };

  return (
    <div className='fixed left-16 w-64 h-screen border-r border-slate-800 flex flex-col py-10 px-2'>
      {menuItemsNavSec.map((item: NavItem) => (
        <Link
          key={item.title}
          className='my-1 px-6 text-lg'
          href={`/space/${params?.id}/${item.href}`}>
          <div>{item.title}</div>
        </Link>
      ))}
      <TextLarge
        className='px-6 cursor-pointer'
        onClick={() => handleNewModuleClick()}>
        + New module
      </TextLarge>
    </div>
  );
};

export default NavbarAppSecondary;
