import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./input-select.scss";
const animatedComponents = makeAnimated();

const InputSelect = ({ data, onChange, label, value }) => {
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

  return (
    <>
      <div className="label-select">{label}</div>
      <Select
        value={value}
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={data}
        onChange={(selectedOptions) => onChange(selectedOptions)}
        styles={customStyles}
      />
    </>
  );
};

export default InputSelect;
