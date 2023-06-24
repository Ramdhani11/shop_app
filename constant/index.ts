import no_content from "@/assets/no-content.png";
import { BiSolidDashboard } from "react-icons/bi";
import { LuLayoutDashboard, LuPackage, LuPackageOpen } from "react-icons/lu";
import { DataSidebar } from "@/types";

export const images = {
  no_content,
};

export const dataSidebar: DataSidebar[] = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    iconActive: BiSolidDashboard,
    icon: LuLayoutDashboard,
  },
  {
    id: 2,
    title: "Barang",
    path: "/dashboard/barang",
    iconActive: LuPackageOpen,
    icon: LuPackage,
  },
];
