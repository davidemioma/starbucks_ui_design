import React from "react";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="relative w-[300px] h-[300px] cursor-pointer">
        <Image
          className="animate-pulse"
          loading="lazy"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Loader;
