
import React from "react";
import {Button} from "antd";
import classNames from "classnames";
import './buttonCustom.css'

const ButtonCustom = ({
  children = "",
  type = "",
  onClick,
  small,
  large,
  outline,
  disabled,
  primary,
  rounded,
  className
}) => {
  const buttonClasses = classNames("button__default", {
    [className]: className,
    button__default: primary,
    button__outline: outline,
    button__small: small,
    button__large: large,
    button__disabled: disabled,
    button__rounded: rounded
  });

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
    {children}
    </button>
  );
};

export default ButtonCustom;