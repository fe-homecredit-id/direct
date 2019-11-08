import React from "react";
import Layout from "../../components/layout";
import CompLayout from "../../components/CompLayout/CompLayout";
import { Text } from "../../lib";

const TextPage = () => {
  const text = [
    {
      name: "h1",
      var: <Text textType="h1">Hello</Text>,
    },
    {
      name: "h2",
      var: <Text textType="h2">Hello</Text>,
    },
    {
      name: "h3",
      var: <Text textType="h3">Hello</Text>,
    },
    {
      name: "h4",
      var: <Text textType="h4">Hello</Text>,
    },
    {
      name: "h5",
      var: <Text textType="h5">Hello</Text>,
    },
    {
      name: "h6",
      var: <Text textType="h6">Hello</Text>,
    },
    {
      name: "Default",
      var: <Text>Hello</Text>,
    },
  ];

  return (
    <Layout>
      <CompLayout
        compName="Text"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={text}
      ></CompLayout>
    </Layout>
  );
};

export default TextPage;