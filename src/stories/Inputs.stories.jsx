import React from "react";

import { Input } from "components";

export default {
  title: "rakesh_s_application16/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "srcRoundedBorder4",
  variant: "OutlineIndigo50",
  size: "smSrc",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
