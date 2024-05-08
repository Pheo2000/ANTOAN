import Layout from "@/components/helper/Layout";
import SystemError from "@/components/SystemError/SystemError";
import { NextPage, NextPageContext } from "next";
import React from "react";

interface ErrorProps {
  statusCode?: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  console.log("statusCode:", statusCode);
  return (
    <Layout>
      <SystemError />
    </Layout>
  );
};

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode ?? 500 : 404;
  return { statusCode };
};

export default Error;
