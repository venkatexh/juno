import Link from "next/link";

const NavbarAppPrimary = () => {
  return (
    <div className='fixed left-0 w-16 h-screen py-10 border-r border-slate-800'>
      <Link href="/space">Spaces</Link>
    </div>
  );
};

export default NavbarAppPrimary;
