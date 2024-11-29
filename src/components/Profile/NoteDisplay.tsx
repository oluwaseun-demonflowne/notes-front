"use client";
import dynamic from "next/dynamic";
import React, { useMemo, useState } from "react";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image", "video"],
    ["clean"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["code-block"],
    ["formula"]
  ],
  clipboard: {
    matchVisual: false
  }
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "background",
  "align",
  "code-block",
  "formula"
];

const NoteDisplay = () => {
  const [value, setValue] = useState("");
  const memoizedModules = useMemo(() => modules, []);
  return (
    <div className="bg-white text-black">
      <div className="flex justify-between px-4 py-3">
        <h1 className="text-xl font-semibold">
          Reflection on the Month of June
        </h1>
        <p className="rounded-full border border-gray-400 p-2">
          <HiEllipsisHorizontal />
        </p>
      </div>
      <div className=" ">
        <div className="mb-12 h-[400px]">
          <ReactQuill
            theme="snow"
            modules={memoizedModules}
            formats={formats}
            value={value}
            onChange={setValue}
            className="chat h-[80vh] w-full overflow-scroll text-wrap !border-0 bg-transparent text-black"
          />
        </div>
        {/* <ReactQuill
          theme="snow"
          modules={memoizedModules}
          formats={formats}
          value={value}
          onChange={setValue}
        /> */}
        {/* <ReactQuill
          modules={modules}
          // theme="white"
          className="chat h-[80vh] w-full overflow-scroll text-wrap !border-0 bg-transparent text-white"
          value={value}
          onChange={(e) => {
            setValue(e);
          }}
        /> */}
      </div>
    </div>
  );
};

export default NoteDisplay;
