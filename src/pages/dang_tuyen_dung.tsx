import { NextPage } from "next";
import React from "react";
import Layout from "@/components/helper/Layout";
import Dangtuyendung from "@/components/dangtuyendung";

const NewScreenPages: NextPage = () => {
  return (
    <Layout>
      <Dangtuyendung />
    </Layout>
  );
};

export default NewScreenPages;
