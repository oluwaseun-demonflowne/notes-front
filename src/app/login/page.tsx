import React from "react";
// import GoogleIcon from "@/public/social/google.png";
// import FacebookIcon from "@/public/social/facebook.png";

import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex gap-16 h-[85vh] md:pb-0 pb-10  px-4 text-white md:px-20">
      <div className="flex w-[100%] flex-col justify-center gap-5 pt-14 md:h-auto md:w-[50%] md:pt-7">
        <div className="text-[22px] font-semibold">
          <h1>Hey, There</h1>
          <h1>Start Sending Anonymous</h1>
          <h1>messages here!</h1>
        </div>
        <p className="text-[15px] font-medium text-slate-300">
          Enter your email address to use the app
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            required
            className="h-12 w-[100%] rounded-full text-white border border-[#c9c9c9] bg-[#2a2a2a] pl-6 text-sm md:h-10"
            placeholder="Learning group@gmail.com"
          />
          <button className="h-12 w-[100%] rounded-full  bg-[#312eb5] pl-4 text-sm text-white md:h-10">
            Sign in with Email
          </button>
        </form>
        <p className="py-2 text-center text-base font-medium text-slate-500">
          OR
        </p>
        <div className="flex flex-col gap-4">
          <button className="flex h-12 w-[100%] items-center justify-center gap-2 rounded-full border border-[#c9c9c9] bg-white pl-4 text-sm font-medium text-black md:h-10">
            <Image
              unoptimized
              className="h-4 w-4"
              alt="google icon"
              width={100}
              height={100}
              src={"/social/google.png"}
            />
            Sign in with Google
          </button>
        </div>
        <p className="mt-2 text-center text-sm md:mt-0">
          Don&apos;t have an account?{" "}
          <Link className="font-bold" href="/register">
            Register Now
          </Link>
        </p>
      </div>
      <div className="hidden w-[50%] rounded-2xl p-10 md:block">
        <Image
          unoptimized
          className="w-[100%]"
          alt="security image"
          width={100}
          height={100}
          src={"/login/Partnership in security and safeguarding.png"}
        />
      </div>
    </div>
  );
};

export default Page;
