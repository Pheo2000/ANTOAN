import Head from "@/components/helper/Head";
import Layout from "@/components/helper/Layout";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import Example from "@/components/Example";
import { Example as ExampleModel } from "@/domain/models/Example/Example";
import Contents from "@/components/helper/Contents";

type TopPageProps = {
  exampleList: ExampleModel[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const exampleList: ExampleModel[] = [
    { id: 1, title: "Test 1" },
    { id: 2, title: "Test 2" },
    { id: 3, title: "Test 3" },
  ];
  return {
    props: { exampleList },
  };
};

const TopPage: NextPage<TopPageProps> = ({ exampleList }) => {
  return (
    <>
      <Head title="Index Page" />
      <Layout>
        <Contents />
      </Layout>
    </>
  );
};

export default TopPage;
