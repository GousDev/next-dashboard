import CircularProgress from "@mui/material/CircularProgress";

const Card = ({ color, value }) => {
  return (
    <div
      className={`flex w-full border-2 border-solid p-4 rounded-lg gap-4  ${
        color === "red"
          ? "bg-gradient-to-tl from-violet-400 to-violet-700"
          : color === "indigo"
          ? "bg-gradient-to-tl from-fuchsia-300 to-fuchsia-700"
          : color === "purple"
          ? "bg-gradient-to-tl from-rose-300 to-rose-700"
          : "bg-indigo-300"
      }`}
    >
      <CircularProgress
        variant="determinate"
        value={value}
        size={60}
        className="text-slate-100  filter drop-shadow-2xl  shadow-slate-400 "
      />
      <div className="flex flex-col gap-4">
        <span>Total Users</span>
        <span className="text-2xl font-bold">10</span>
        <span className="text-xs font-light"> Lorem ipsum dolor sit amet.</span>
      </div>
    </div>
  );
};

export default Card;
