"use client";
import { folder } from "@/lib/folder";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { MdOutlineFolder } from "react-icons/md";

const Folder = () => {
  const folderRoute = useSearchParams().get("folder");
  const { push } = useRouter();
  return (
    <div className="space-y-2 text-left text-black">
      <p className="text-sm">Folder</p>
      <div className="flex flex-col items-start text-[15px]">
        {folder.map((i, index) => (
          <button
            onClick={() => {
              push(`/profile?folder=${i}`);
            }}
            className={`flex w-[100%] py-1 px-2 rounded-md ${folderRoute === i ? "bg-[#e0dede]" : ""} gap-3 text-left`}
            key={index}>
            <p className="">
              <MdOutlineFolder className="text-lg" />
            </p>
            {i}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Folder;
