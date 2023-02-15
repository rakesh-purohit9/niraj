import React from "react";
import { Radio } from "components";

export default {
  title: "rakesh_s_application16/Radio",
  component: Radio,
};

export const SampleRadio = (args) => <Radio {...args} />;

SampleRadio.args = {
  label: "Radio",
  variant: "FillGreen700",
  size: "sm",
  inputClassName: "mr-1",
};
