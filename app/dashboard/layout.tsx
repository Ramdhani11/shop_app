"use client";
import { Navbar, Sidebar } from "@/components";
import { dataSidebar } from "@/constant";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const datasSidebar = dataSidebar;

  return (
    <div className="w-screen h-screen bg-lightWhite flex flex-row">
      <Sidebar path={pathName} datasSidebar={datasSidebar} />
      <section className="w-[80vw] h-screen">
        <Navbar path={pathName} />
        <div className="p-5 h-[90vh]">{children}</div>
      </section>
    </div>
  );
}
