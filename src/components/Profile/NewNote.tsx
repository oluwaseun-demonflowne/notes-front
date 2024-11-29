import React from "react";
import { FiPlus } from "react-icons/fi";

const NewNote = () => {
  return (
    <button className="flex h-12 w-full border border-slate-800 items-center justify-center gap-1 rounded-md bg-[#242424]x">
      <FiPlus className="text-lg" />
      New Note
    </button>
  );
};

export default NewNote;
