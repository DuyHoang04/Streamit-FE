import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const InputSelect = ({ data, onChange }) => {
  const [newArray, setNewArray] = useState([]);
  const [options, setOptions] = useState([
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
    { value: "grape", label: "Grape" },
    { value: "melon", label: "Melon" },
  ]);

  const handleChange = (selectedOptions) => {
    const selectedValuesArray = selectedOptions.map((option) => option.value);
    setNewArray(selectedValuesArray);
  };

  console.log(newArray);

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={options}
      onChange={(selectedOptions) => {
        handleChange(selectedOptions);
      }}
    />
  );
};

export default InputSelect;
