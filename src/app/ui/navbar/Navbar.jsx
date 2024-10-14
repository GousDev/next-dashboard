"use client";
import {
  MdSearch,
  MdOutlineChat,
  MdPublic,
  MdNotifications,
} from "react-icons/md";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center rounded-lg p-4 ">
      <div className="font-bold capitalize">{pathname.split("/").pop()}</div>
      <div className="flex items-center gap-4">
        <div className="gap-2 flex  items-center rounded-lg border-solid border-2 p-2.5">
          <MdSearch />
          <input
            type="text"
            placeholder="Search...."
            className="bg-transparent border-none outline-none"
          />
        </div>
        <div className="flex gap-4">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
