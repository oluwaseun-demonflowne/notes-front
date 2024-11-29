"use client";
import { file } from "@/lib/file";
import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";

const Recent = () => {
  return (
    <div className="mt-4 space-y-2 text-left text-black">
      <p className="text-sm">Recent</p>
      <div className="flex flex-col items-start gap-2 text-[15px]">
        {file.map((i, index) => (
          <button className="flex px-2 gap-3 text-left" key={index}>
            <p className="">
              <IoDocumentTextOutline className="text-lg" />
            </p>
            {i}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Recent;
