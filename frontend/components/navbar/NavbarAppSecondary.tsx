"use client";

import { menuItemsNavSec } from "@/resources/constants/navbar/MenuItemsNavbarSecondary";
import { NavItem } from "@/resources/constants/navbar/types/NavItem";
import Link from "next/link";
import { useParams } from "next/navigation";

const NavbarAppSecondary = () => {
  const params = useParams();

  return (
    <div className='fixed left-16 w-64 h-screen border-r border-slate-800 flex flex-col py-10'>
      {menuItemsNavSec.map((item: NavItem) => (
        <Link
          key={item.title}
          className='my-1 mx-6 text-lg'
          href={`/space/${params?.id}/${item.href}`}>
          <div>{item.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default NavbarAppSecondary;
