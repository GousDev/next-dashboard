import Image from "next/image.js";
import MenuLink from "./menuLink/MenuLink.jsx";
import {
  MdSettings,
  MdHelpCenter,
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdLogout,
} from "react-icons/md";

const Sidebar = () => {
  const menu = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    // {
    //   title: "Analytics",
    //   list: [
    //     {
    //       title: "Revenue",
    //       path: "/dashboard/revenue",
    //       icon: <MdWork />,
    //     },
    //     {
    //       title: "Reports",
    //       path: "/dashboard/reports",
    //       icon: <MdAnalytics />,
    //     },
    //     {
    //       title: "Teams",
    //       path: "/dashboard/teams",
    //       icon: <MdPeople />,
    //     },
    //   ],
    // },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];
  // console.log(menu);

  return (
    <div className="sticky top-0">
      <div className="flex items-center  gap-5 mb-5">
        <Image
          className="rounded-full object-cover"
          src="/noavatar.png"
          width="50"
          height="50"
          alt=""
        />
        <div className="flex flex-col">
          <span className="font-medium">Gous</span>
          <span className="text-xs">Administrator</span>
        </div>
      </div>
      <ul>
        {menu.map((cat) => (
          <li key={cat.title}>
            <span className="font-bold text-sm my-2">{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <div className="flex flex-col ">
        <Image
          src="/side2.png"
          width="100"
          height="100"
          className="w-full filter"
          alt=""
        />
        <button className="p-5 my-1.5 flex items-center  gap-2 cursor-pointer rounded-lg bg-slate-900 w-full text-white hover:bg-slate-200 font-bold hover:text-black">
          <MdLogout />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
