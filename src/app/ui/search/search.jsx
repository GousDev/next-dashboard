"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleInput = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);
    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }

    replace(`${pathname}?${params}`);
  }, 200);
  return (
    <div className="flex gap-2 items-center rounded-lg p-2.5 w-max border-solid border-2">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent outline-none border-none "
        onChange={handleInput}
      />
    </div>
  );
};

export default Search;
