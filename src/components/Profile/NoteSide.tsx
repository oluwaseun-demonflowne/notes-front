"use client";
import { note } from "@/lib/note";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import React from "react";

const NoteSide = () => {
  const folderRoute = useSearchParams().get("folder");

  return (
    <div className="w-[250px] bg-white p-3">
      <p>{folderRoute}</p>
      <div className="mt-6 flex flex-col gap-3">
        {note
          .filter((i) => i.folder === folderRoute)
          .map((i) => (
            <Link
              key={i.note}
              href={`/profile/?folder=${folderRoute}&file=${i.title}`}>
              <div className="rounded-md bg-[#232323]S p-3">
                <p className="text-[15px]">{i.title}</p>
                <div className="flex justify-between gap-1">
                  <p className="text-sm text-gray-500">{i.dateModified}</p>
                  <p className="text-sm text-gray-300">
                    {i.note.length > 10
                      ? `${i.note.substring(0, 15)}...`
                      : i.note}
                  </p>
                </div>
                <Image
                  className="mt-1 h-4 w-4 rounded-full"
                  src={i.creator}
                  alt="creator image"
                  width={100}
                  height={100}
                />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default NoteSide;
