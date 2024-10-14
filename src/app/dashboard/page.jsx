"use client";
import Card from "../ui/card/Card";
import Rightbar from "../ui/rightbar/Rightbar";
import Transaction from "../ui/transaction/Transaction";
import LineChart from "../ui/chart/LineChart";

const Dashboard = () => {
  return (
    <div className="flex gap-5 mt-5">
      <div className="flex-[3] flex flex-col gap-2 ">
        <div className="flex justify-between gap-5 ">
          <Card color={"red"} value={50} />
          <Card color={"indigo"} value={80} />
          <Card color={"purple"} value={20} />
        </div>
        <Transaction />
        <LineChart />
      </div>
      <div className="flex-[1]">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
