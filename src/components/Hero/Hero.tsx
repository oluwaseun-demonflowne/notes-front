import React from "react";
import Text from "./Text";
import Images from "./Image";

const Hero = () => {
  return (
    <div className="flex h-[85vh] items-center gap-10">
      <Text />
      <Images />
    </div>
  );
};

export default Hero;
