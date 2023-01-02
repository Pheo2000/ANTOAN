import NotFound from "@/components/404/NotFound";
import Layout from "@/components/helper/Layout";
import { NextPage } from "next";
import React from "react";

const Error404Page: NextPage = () => {
  return (
    <>
      <Layout>
        <NotFound />
      </Layout>
    </>
  );
};

export default Error404Page;
