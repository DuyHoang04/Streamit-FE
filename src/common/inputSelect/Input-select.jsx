import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./input-select.scss";
const animatedComponents = makeAnimated();

const InputSelect = ({ data, onChange, label, setData }) => {
  const [newArray, setNewArray] = useState([]);
  const [options, setOptions] = useState([
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
    { value: "grape", label: "Grape" },
    { value: "melon", label: "Melon" },
  ]);

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "#222028",
      borderRadius: "5px",
      fontSize: "16px",
      border: 0,
      height: "50px",
      boxShadow: "none",
    }),
    option: (baseStyles, { isDisabled, isFocused, isSelected }) => ({
      ...baseStyles,
      backgroundColor: isSelected ? "red" : "#222028",
      color: isFocused ? "#f20000" : "lightgray",
      fontSize: "15px",
      cursor: "pointer",
    }),
    menuList: (baseStyles) => ({
      ...baseStyles,
      paddingTop: 0,
      paddingBottom: 0,
    }),
    multiValue: (baseStyles, { data }) => {
      return {
        ...baseStyles,
        backgroundColor: "#1a191f",
        color: "#f20000",
        cursor: "pointer",
      };
    },
    multiValueLabel: (baseStyles, { data }) => ({
      ...baseStyles,
      color: "#fff",
    }),
  };

  const handleChange = (selectedOptions) => {
    const selectedValuesArray = selectedOptions.map((option) => option.value);
    onChange(selectedOptions);
  };

  return (
    <>
      <div className="label-select">{label}</div>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={options}
        onChange={(selectedOptions) => onChange(selectedOptions)}
        styles={customStyles}
      />
    </>
  );
};

export default InputSelect;
