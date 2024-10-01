import Image from "next/image";
import React from "react";

const Images = () => {
  return (
    <div className="hidden w-[60%] md:block">
      {/* <Image
        className=""
        src={"/notes.jpg"}
        width={100}
        height={100}
        alt="reviewer"
      /> */}
      <Image
        unoptimized
        className="w-full"
        src={"/image01.png"}
        width={100}
        height={100}
        alt="reviewer"
      />
    </div>
  );
};

export default Images;
