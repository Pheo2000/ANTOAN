import React from "react";
import Image from "next/image";

const Loading: React.FC = () => {
  return (
    <div className="flex fixed justify-center items-center inset-0 bg-gray-300 opacity-70 z-9999">
      <div className="pb-20 absolute z-0">
        <Image
          height="80"
          width="80"
          src="/icon/icon.svg"
          className="animate-spin absolute rounded-full"
          alt=""
        />
      </div>
      <div className="pb-20 absolute z-10">
        <Image
          height="50"
          width="50"
          src="/icon/check.svg"
          className="absolute"
          alt=""
        />
      </div>
      <div className="absolute pt-40 text-3xl">Loading...</div>
    </div>
  );
};

export default Loading;
