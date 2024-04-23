import { NextPage } from "next";
import React from "react";
import Layout from "@/components/helper/Layout";
import User from "@/components/User";

const NewScreenPages: NextPage = () => {
  return (
    <Layout>
      <User />
    </Layout>
  );
};

export default NewScreenPages;
