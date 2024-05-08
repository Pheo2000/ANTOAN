import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Sidebar: React.VFC = () => {
  const router = useRouter();

  return (
    <section className=" z-10 bg-color-sidebar h-screen">
      <div
        onClick={() => router.push("/")}
        className="p-4 flex border border-r-0 border-t-0 border-l-0 cursor-pointer"
      >
        <Image src="/AdminLTELogo.png" width={33} height={33} alt="logo" />
        <span className="block ml-4 mt-1 text-xl text-white ">
          Web Quản Trị{" "}
        </span>
      </div>

      <div className="px-2">
        <div className="flex p-2  border border-r-0 border-t-0 border-l-0 my-3">
          <div className="">
            <Image
              src="/user2-160x160.jpg"
              width={33}
              height={33}
              alt="logo"
              className="rounded"
            />
          </div>
          <div className="ml-4 text-base text-white ">
            <a href="/user" className="font-normal">
              Ứng Dụng Decor
            </a>
          </div>
        </div>

        <p className="text-white ml-3 text-xl text-center">Các Action</p>
      </div>
      <div className="h-52 text-left mt-5 cursor-pointer">
        <p
          onClick={() => router.push("/user")}
          className="text-white px-2 py-5 hover:bg-white hover:text-black"> Quản lý User </p>
        <p
          onClick={() => router.push("/typeDecor")}
          className="text-white px-2 py-5 hover:bg-white hover:text-black"> Quản lý Thể Loại</p>
        <p
          onClick={() => router.push("/bill")}
          className="text-white px-2 py-5 hover:bg-white hover:text-black">Quản lý Hóa Đơn
        </p>

        <p
          onClick={() => router.push("/product")}
          className="text-white px-2 py-5 hover:bg-white hover:text-black">Quản lý Sản Phẩm
        </p>
        <p className="text-center text-white">
          <button className="p-3 bg-green-500 rounded">Logout</button>
        </p>

      </div>
    </section>
  );
};
export default Sidebar;
