import Sidebar from "../ui/sidebar/Sidebar.jsx";
import Navbar from "../ui/navbar/Navbar.jsx";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex  ">
      <div className="flex-[1]  w-1/5 h-screen fixed top-0 left-0 p-5 ">
        <Sidebar />
      </div>
      <div className="flex-[4] ml-[20%] w-[83.33%] p-5">
        <div className=" flex-[4] top-0 left-0 right-0 p-5 ">
          <Navbar />
        </div>
        <div className=" overflow-auto">{children}</div>
      </div>
    </div>
  );
}
