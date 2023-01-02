import NewScreen from "@/components/NewScreen";
import { NextPage } from "next";
import React from "react";
import Layout from "@/components/helper/Layout";

const NewScreenPages: NextPage = () => {
  return (
    <Layout>
      <NewScreen />
    </Layout>
  );
};

export default NewScreenPages;
