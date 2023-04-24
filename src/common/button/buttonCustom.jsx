import React from "react";
import { Button } from "antd";
import classNames from "classnames";
import "./buttonCustom.scss";

const ButtonCustom = ({
  children = "",
  type = "",
  onClick,
  large,
  outline,
  disabled,
  primary,
  rounded,
  className,
  icon,
}) => {
  const buttonClasses = classNames("button__default", {
    [className]: className,
    button__default: primary,
    button__outline: outline,
    button__large: large,
    button__disabled: disabled,
    button__rounded: rounded,
  });

  return (
    <Button
      icon={icon}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ButtonCustom;
