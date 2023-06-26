import { NavbarProps } from "@/types";
import React from "react";

const Navbar = ({ path }: NavbarProps) => {
  return (
    <nav className="h-[10vh] w-[80vw] bg-white flex flex-row px-6 justify-between items-center border-b-[2px] border-borderColor">
      <h1 className="font-custom-medium">
        {path === "/dashboard" ? "Dashboard" : "Barang"}
      </h1>
      <div className="flex flex-row items-center">
        <div className="w-[30px] h-[30px] rounded-[50%] bg-red-200 mr-2" />
        <h2>Hai</h2>
      </div>
    </nav>
  );
};

export default Navbar;
