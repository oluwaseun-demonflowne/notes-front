import { more } from "@/lib/More";
import React from "react";
import { FiTrash } from "react-icons/fi";
import { MdOutlineStarOutline } from "react-icons/md";
import { PiArchiveDuotone } from "react-icons/pi";

// eslint-disable-next-line react/jsx-key
const icons = [<MdOutlineStarOutline />, <FiTrash />, <PiArchiveDuotone />];

const More = () => {
  return (
    <div className="space-y-2 text-left text-black">
      <p className="text-sm">More</p>
      <div className="flex flex-col items-start gap-2 text-[15px]">
        {more.map((i, index) => (
          <button className="flex px-2 items-center gap-3 text-left" key={index}>
            <p className="text-lg">{icons[index]}</p>
            {i}
          </button>
        ))}
      </div>
    </div>
  );
};

export default More;
