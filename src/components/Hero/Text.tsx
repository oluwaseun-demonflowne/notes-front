import Image from "next/image";
import React from "react";
import { GoDash } from "react-icons/go";

const Text = () => {
  return (
    <div className="flex flex-col gap-7 md:w-[40%]">
      <div>
        <h1 className="text-5xl font-medium">All your notes.</h1>
        <h1 className="text-5xl font-medium">Organized.</h1>
        <h1 className="text-5xl font-medium">Effortless.</h1>
      </div>
      <p className="text-slate-300">
        Inspiration strikes anywhere. Minimal lets you collaborate with your
        friend and family, capture, organize, and share your ideas across many
        devices .
      </p>
      <button className="flex h-14 w-44 items-center justify-center rounded-2xl bg-[#312eb5] font-semibold text-white">
        Sign up <GoDash /> <span className="text-gray-400">it&apos;s free</span>
      </button>
      <div className="w-20 border-t border-slate-400"></div>
      <div className="flex flex-col gap-2">
        <p>&quot;Minimal is like my secret creative superpower &quot;</p>
        <div className="flex items-center gap-2">
          <Image
            className="h-10 w-10 rounded-full"
            src={"/smoke.jpeg"}
            width={100}
            height={100}
            alt="reviewer"
          />
          <div>
            <p className="text-[15px] font-medium">Ibu Emmanuel</p>
            <p className="text-[15px]">CEO of Sapagote</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
