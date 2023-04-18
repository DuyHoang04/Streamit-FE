import React from "react";
import { Input } from "antd";
import classNames from "classnames";
import "./inputCustom.css";

const InputCustom = ({
  label = "",
  type,
  value,
  onChange,
  large,
  outline,
  placeholder = "",
  disabled,
}) => {
  const inputClasses = classNames("custom-input", {
    "custom-input-outline": outline,
    "custom-input-large": large,
  });

  return (
    <div>
      <label className="label-input">{label}</label>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClasses}
      />
    </div>
  );
};

export default InputCustom;
