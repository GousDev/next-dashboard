"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const item_per_page = 2;

  const HasPrev = item_per_page * (parseInt(page) - 1) > 0;
  const HasNext = item_per_page * (parseInt(page) - 1) + item_per_page < count;

  const handlePagechange = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };
  return (
    <div className="flex justify-between p-2.5">
      <button
        className="p-2 bg-slate-300 rounded-xl"
        disabled={!HasPrev}
        onClick={() => handlePagechange("prev")}
      >
        Previous
      </button>
      <button
        className="py-1 px-4 bg-slate-800 rounded-xl text-white"
        disabled={!HasNext}
        onClick={() => handlePagechange("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
