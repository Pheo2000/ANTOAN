import { NextPage } from "next";
import React from "react";
import Layout from "@/components/helper/Layout";
import Login from "@/components/login";

const NewScreenPages: NextPage = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default NewScreenPages;
