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
            <a href="" className="font-normal">
              Ứng Dụng Decor
            </a>
          </div>
        </div>

        <nav className="mt-3 pb-10">
          <ul className="mt-2 ">
            <li className=" px-3 py-2 relative ">
              <div className="flex block">
                <p className="text-white ml-3 text-xl">Quản lý các chức năng </p>
              </div>
              <div>
                <ul className="mt-2 ml-4 cursor-pointer">
                  <li
                    onClick={() => router.push("/user")}
                    className="flex mt-2 "
                  >
                    <p className="text-white ml-3"> Quản lý User </p>
                  </li>
                  <li
                    onClick={() => router.push("/da_xong")}
                    className="flex mt-2 "
                  >
                    <p className="text-white ml-3"> Quản lý hóa đơn </p>
                  </li>
                  <li
                    onClick={() => router.push("/het_han")}
                    className="flex mt-2 "
                  >
                    <p className="text-white ml-3">Quản lý Thể loại</p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          {/* <ul className="mt-2 ">
            <li className=" px-3 py-2 relative ">
              <div className="flex block">
                <p className="text-white ml-3 text-xl">Quản lý ứng viên </p>
              </div>
              <div>
                <ul className="mt-2 ml-4 cursor-pointer">
                  <li
                    onClick={() => router.push("/hsut")}
                    className="flex mt-2 "
                  >
                    <p className="text-white ml-3">Hồ sơ ứng tuyển</p>
                  </li>
                  <li
                    onClick={() => router.push("/hsycpv")}
                    className="flex mt-2 "
                  >
                    <p className="text-white ml-3">Hồ sơ yêu cầu phỏng vấn </p>
                  </li>
                  <li
                    onClick={() => router.push("/hsdc")}
                    className="flex mt-2 "
                  >
                    <p className="text-white ml-3">Hồ sơ đã được chọn </p>
                  </li>
                  <li
                    onClick={() => router.push("/hstc")}
                    className="flex mt-2 "
                  >
                    <p className="text-white ml-3">Hồ sơ bị từ chối </p>
                  </li>
                </ul>
              </div>
            </li>
          </ul> */}
        </nav>
      </div>
    </section>
  );
};
export default Sidebar;
