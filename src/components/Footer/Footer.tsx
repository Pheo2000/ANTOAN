import Link from "next/link";
import React from "react";

const Footer: React.VFC = () => {
  return (
    <>
      <footer className="fixed inset-x-0 bottom-0 text-center bg-gray-900 text-white py-2 h-8">
        <span>©︎Copyright 2022 </span>
        {/* <Link href="#">
          <a>Miraisoft</a>
        </Link> */}
      </footer>
    </>
  );
};

export default Footer;
