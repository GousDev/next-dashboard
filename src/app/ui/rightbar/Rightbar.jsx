import Image from "next/image";
import { MdPlayCircle, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="fixed">
      <div className="border-2 border-solid relative p-5 mb-2 rounded-xl overflow-hidden">
        <div className=" bottom-0 right-0 w-full h-full inset-0 ">
          <Image src="/3d.jpg" className="opacity-30 absolute " fill />
        </div>
        <div className=" relative flex flex-col gap-2 z-50">
          <span className="font-bold">🔥 Available Now</span>
          <h3 className="font-medium text-xs">
            How to use the new version of Admin Dashboard
          </h3>
          <span>Takes 4 minutes to learn</span>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            dolores.
          </p>
          <button className="p-2.5 flex items-center gap-2 rounded-lg bg-purple-800 text-white w-max">
            <MdPlayCircle /> Watch
          </button>
        </div>
      </div>
      <div className="border-2 border-solid p-5 mb-2 rounded-xl  ">
        <div className="flex flex-col gap-2">
          <span className="font-bold">🚀 Coming Soon</span>
          <h3 className="font-medium text-xs">
            New Server Actions are available, partial pre-rendering is coming up
          </h3>
          <span>Boost your Productivity</span>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            dolores.
          </p>
          <button className="p-2.5 flex items-center gap-2 rounded-lg bg-purple-800 text-white w-max">
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
