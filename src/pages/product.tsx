import { NextPage } from "next";
import React from "react";
import Layout from "@/components/helper/Layout";
import Product from "@/components/Product";

const NewScreenPages: NextPage = () => {
  return (
    <Layout>
      <Product />
    </Layout>
  );
};

export default NewScreenPages;
