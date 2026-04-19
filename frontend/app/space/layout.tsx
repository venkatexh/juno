import NavbarAppPrimary from "@/components/navbar/NavbarAppPrimary";

export default function SpacesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarAppPrimary />
      <div>{children}</div>
    </>
  );
}
