import React, { useState } from "react";
import Layout from "../../components/layout";
import CompLayout from "../../components/CompLayout/CompLayout";
import { Radio } from "../../lib";
import { Select } from "../../lib/DropdownSelect/DropdownSelect";

const RadiobtnPage = () => {
  const [radioSelected, setRadioSelected] = useState();
  const [boxSelected, setBoxSelected] = useState();

  const radio = [
    {
      name: "Default",
      var: (
        <Radio
          option1="option 1"
          option2="option 2"
          name="display"
          selected={radioSelected}
          setSelected={setRadioSelected}
        ></Radio>
      ),
    },
  ];

  console.log(boxSelected);

  return (
    <Layout>
      <CompLayout
        compName="Radio Button"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={radio}
      ></CompLayout>
      <Select
        dropdownList={[
          { id: "apa", name: "apayy" },
          { id: "apaa", name: "apayyaaa" },
          { id: "apaaaa", name: "apayyaaaahmmmm" },
        ]}
        setSelected={setBoxSelected}
      ></Select>
    </Layout>
  );
};

export default RadiobtnPage;
