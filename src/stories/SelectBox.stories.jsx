import React from "react";

import { SelectBox } from "components";

export default {
  title: "rakesh_s_application16/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "RoundedBorder4",
  variant: "OutlineIndigo50",
  size: "lg",
  className: "w-[300px]",
};
