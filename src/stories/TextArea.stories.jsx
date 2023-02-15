import React from "react";
import { TextArea } from "components";

export default {
  title: "rakesh_s_application16/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = {
  shape: "RoundedBorder4",
  variant: "OutlineIndigo50",
  size: "sm",
  placeholder: "placeholder",
};
