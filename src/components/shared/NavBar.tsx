import Link from "next/link";
import React from "react";
import { BiLogoMediumOld } from "react-icons/bi";
import { GoDash } from "react-icons/go";
import { MdCopyright } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center text-white">
      <Link href="/">
      <div className="flex items-center">
        <BiLogoMediumOld className="text-3xl" />
        <div className="flex">
          <p className="text-xl font-semibold">Minimal</p>
          <MdCopyright className="text-[14px]" />
        </div>
      </div>
      </Link>
      <div className="flex gap-5">
        <button>
          <Link href="/login"> Log in</Link>
        </button>
        <Link href="/register">
          <button className="flex h-10 w-44 items-center justify-center rounded-2xl border">
            Sign up <GoDash />{" "}
            <span className="text-gray-500">it&apos;s free</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
