import { SidebarProps } from "@/types";
import Link from "next/link";
import React from "react";

const Sidebar = ({ path, datasSidebar }: SidebarProps) => {
  return (
    <div className="h-screen bg-white w-[20vw] p-5 border-r-[2px] border-borderColor">
      <h1 className="font-custom-bold text-primary mb-5">Shop</h1>
      <ul>
        {datasSidebar.map((data) => {
          const activePath = path === data.path;

          return (
            <li key={data.id}>
              <Link
                href={data.path}
                className={`flex flex-row ${
                  activePath ? "bg-secondary text-primary" : null
                } hover:text-primary mb-2 p-2 items-center`}
              >
                {<data.icon className="mr-2" />} {data.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
