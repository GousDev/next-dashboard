"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`p-2.5 flex items-center gap-2 hover:bg-purple-100 my-1 rounded-lg  ${
        pathname === item.path && "bg-purple-500"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
