import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Page = () => {
  return (
    <div className="flex h-[85vh] gap-16 px-4 pb-10 text-white md:px-20 md:pb-0">
      <div className="flex h-[90vh] w-[100%] flex-col justify-center gap-5 md:h-auto md:w-[50%] md:pt-7">
        <div className="text-[22px] font-semibold">
          <h1>Register</h1>
        </div>
        <p className="text-[15px] font-medium text-slate-300">
          Please register to login
        </p>
        <form className="mt-10 flex flex-col gap-4">
          <div className="flex items-center rounded-full border border-[#c9c9c9] bg-[#2a2a2a] pl-4">
            <FaUser className="text-xl text-[#606060]" />
            <input
              required
              type="text"
              className="h-12 w-[100%] rounded-r-full bg-[#2a2a2a] pl-3 pr-2 text-sm text-white outline-none md:h-10"
              placeholder="Username"
            />
          </div>
          <div className="flex items-center rounded-full border border-[#c9c9c9] bg-[#2a2a2a] pl-4">
            <MdEmail className="text-xl text-[#606060]" />
            <input
              required
              type="email"
              className="h-12 w-[100%] rounded-r-full bg-[#2a2a2a] pl-3 pr-2 text-sm text-white outline-none md:h-10"
              placeholder="Email"
            />
          </div>
          <div className="flex w-[100%] items-center rounded-full border border-[#c9c9c9] bg-[#2a2a2a] pl-4 text-white">
            <RiLockPasswordFill className="text-xl text-[#606060]" />
            <input
              required
              type="password"
              className="h-12 w-[100%] rounded-r-full bg-[#2a2a2a] pl-3 pr-2 text-sm outline-none md:h-10"
              placeholder="********"
            />
          </div>
          <button className="mt-10 h-12 w-[100%] rounded-full bg-[#312eb5] pl-4 text-sm text-white md:h-10">
            Sign Up
          </button>
        </form>
        <p className="mt-2 text-center text-sm md:mt-0">
          Already have an account?{" "}
          <Link className="font-bold" href="/login">
            Sign In
          </Link>
        </p>
      </div>
      <div className="hidden w-[50%] items-center justify-center rounded-2xl p-10 md:flex">
        <Image
          unoptimized
          className="w-[100%]"
          alt="security image"
          width={100}
          height={100}
          src={"/login/Vector (1).png"}
        />
      </div>
    </div>
  );
};

export default Page;
