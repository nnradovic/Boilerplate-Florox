import React from "react";
import Select from "react-select";

export default function InputMultiSelect({ options }) {
  return <Select options={options} isMulti />;
}
