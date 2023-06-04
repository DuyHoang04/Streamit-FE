import React, { useRef } from "react";
import "../registerPage/registerPage.scss";
import { Button, Checkbox, Form, notification, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../action/index";
import InputCustom from "../../common/input/InputCustom";
import { useNavigate } from "react-router-dom";
import { toastError, validateData } from "../../utils";
import useAuth from "../../hook/useAuth";
const registerPage = () => {
  const { registerRequest } = useAuth();
  const dispatch = useDispatch();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleRegister = () => {
    const dataRegister = {
      username: userNameRef.current.input.value,
      email: emailRef.current.input.value,
      password: passwordRef.current.input.value,
    };

    if (validateData(dataRegister)) {
      const reqRegister = {
        payload: dataRegister,
      };
      registerRequest({ reqRegister, navigate });
    } else {
      toastError("ghi day du");
    }
  };

  return (
    <div className="register_background">
      <div className="register_page">
        <div className="logo">
          <img
            src="../../src/assets/logo.png"
            style={{ width: "200px" }}
            alt=""
          />
        </div>
        <Form className="register-form">
          <Form.Item
            name="userName"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <InputCustom
              ref={userNameRef}
              type="userName"
              placeholder="userName"
            />
          </Form.Item>
          <Form.Item
            name="gmail"
            rules={[
              {
                required: true,
                message: "Please input your gmail!",
              },
            ]}
          >
            <InputCustom type="gmail" ref={emailRef} placeholder="gmail" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <InputCustom
              ref={passwordRef}
              type="password"
              placeholder="password"
            />
          </Form.Item>
          <Form.Item className="register_footer">
            <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
            <a
              className="register-form-forgot"
              href=""
              style={{ color: "white" }}
            >
              Forgot password
            </a>
            <Button
              onClick={handleRegister}
              type="primary"
              htmlType="submit"
              className="register-form-button"
            >
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default registerPage;
