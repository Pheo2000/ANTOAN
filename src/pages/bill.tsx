import { NextPage } from "next";
import React from "react";
import Layout from "@/components/helper/Layout";
import Bill from "@/components/Bill";

const NewScreenPages: NextPage = () => {
  return (
    <Layout>
      <Bill />
    </Layout>
  );
};

export default NewScreenPages;
