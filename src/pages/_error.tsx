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
  // statusCodeを算出する。
  // - resが存在する時はSSRであり、res.statusCodeをそのまま利用すれば良い。
  // - resがない場合はCSRである。
  //   - err.statusCodeがあればそれをそのまま利用する
  //   - 意図しない例外が起きてerrがここに渡ってくる場合、単なるErrorオブジェクトが入っていてstatusCodeプロパティがない。errがある時点でISEなので500にする
  // See Also: https://nextjs.org/docs/advanced-features/custom-error-page
  const statusCode = res ? res.statusCode : err ? err.statusCode ?? 500 : 404;
  return { statusCode };
};

export default Error;
