import React from "react";
import { BiLogoMediumOld } from "react-icons/bi";
import { GoDash } from "react-icons/go";
import { MdCopyright } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="flex justify-between text-white">
      <div className="flex items-center">
        <BiLogoMediumOld className="text-3xl" />
        <div className="flex">
          <p className="text-xl font-semibold">Minimal</p>
          <MdCopyright className="text-[14px]" />
        </div>
      </div>
      <div className="flex gap-5">
        <button>Log in</button>
        <button className="flex h-10 w-44 items-center justify-center rounded-2xl border">
          Sign up <GoDash />{" "}
          <span className="text-gray-500">it&apos;s free</span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
