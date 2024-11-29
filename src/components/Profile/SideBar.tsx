import React from "react";
import Recent from "./Recent";
import Folder from "./Folder";
import More from "./More";
import Search from "./Search";
import NewNote from "./NewNote";

const SideBar = () => {
  return (
    <div className="flex w-[220px] flex-col gap-4 bg-white p-4">
      <Search />
      <NewNote />
      <Recent />
      <Folder />
      <More />
    </div>
  );
};

export default SideBar;
