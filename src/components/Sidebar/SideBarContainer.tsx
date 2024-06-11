import React from "react";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";

const SideBarContainer: React.VFC = () => {
  const router = useRouter();

  const handlerLogOut = () => {

    const tokenString = localStorage.getItem("store")
    const token = JSON.parse(tokenString as string).token;


    if (token) {
      localStorage.removeItem('store');
      router.push("/login");
    }
  }
  return <Sidebar handlerLogOut={handlerLogOut} />;
};
export default SideBarContainer;
