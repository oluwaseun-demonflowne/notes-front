import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";

const Select = () => {
  return (
    <div className="flex h-[100%] w-[100%] flex-col items-center justify-center gap-2 bg-[#181818]s px-20 text-center">
      <IoDocumentTextOutline className="text-6xl" />
      <h1 className="text-xl font-semibold">Select a note to view</h1>
      <p className="text-[15px] font-light">
        Choose a note from the list on the left to view its contents, or create
        a new note to add to your collection.
      </p>
    </div>
  );
};

export default Select;
