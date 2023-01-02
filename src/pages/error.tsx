import Layout from "@/components/helper/Layout";
import SystemError from "@/components/SystemError";
import { NextPage } from "next";
import React from "react";

const SystemErrorPage: NextPage = () => {
  return (
    <>
      <Layout>
        <SystemError />
      </Layout>
    </>
  );
};

export default SystemErrorPage;
