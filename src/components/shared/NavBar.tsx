"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BiLogoMediumOld } from "react-icons/bi";
import { GoDash } from "react-icons/go";
import { MdCopyright } from "react-icons/md";

const NavBar = () => {
  const getPath = usePathname();
  if (getPath === "/profile") return null;
  return (
    <div className="flex items-center justify-between px-4 pt-8 text-white md:px-20">
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
