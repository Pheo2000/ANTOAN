import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.VFC = () => {
  const router = useRouter();

  return (
    <>
      <section className={`mb-2 space-x-2 `}>
        {/* <nav className="flex justify-end shadow-lg relative">
          <div>
            <ul className="flex  p-4 text-base cursor-pointer">
              <li className="mr-5 text-gray-500  hover:text-gray-900">
                <Link href="/">Quản lý tuyển dụng </Link>
              </li>
              <li>
                <li className=" text-gray-500 hover:text-gray-900">
                  <div onClick={onClickLink}>Quản lý ứng viên </div>
                </li>
              </li>
            </ul>
          </div>
        </nav> */}

        {/* <div className="flex shadow-lg  justify-end">
          <div className="p-3 cursor-pointer mr-5">
            <i className="fa-solid fa-user text-2xl"></i>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Header;
