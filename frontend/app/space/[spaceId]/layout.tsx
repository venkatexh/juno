import NavbarAppSecondary from "@/components/navbar/NavbarAppSecondary";

const SpaceLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="">
      <NavbarAppSecondary />
      <div className="ml-48">{children}</div>
    </div>
  );
}

export default SpaceLayout