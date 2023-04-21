import React from "react";
import { Input } from "antd";
import classNames from "classnames";
import "./inputCustom.css";
import { forwardRef } from "react";

const InputCustom = (
  {
    label = "",
    type,
    value,
    onChange,
    large,
    outline,
    placeholder = "",
    disabled,
    isTextarea,
  },
  ref
) => {
  const { TextArea } = Input;
  const inputClasses = classNames("custom-input", {
    "custom-input-outline": outline,
    "custom-input-large": large,
  });

  return (
    <div>
      <label className="label-input">{label}</label>
      {isTextarea ? (
        <TextArea
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClasses}
        />
      ) : (
        <Input
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClasses}
        />
      )}
    </div>
  );
};

export default forwardRef(InputCustom);
