import React, { useRef } from "react";
import "../login/loginStyle.css";
import { Button, Checkbox, Form, Image } from "antd";
import { useDispatch } from "react-redux";
import { authActions } from "../../action/index";
import InputCustom from "../../common/input/InputCustom";
import { useNavigate } from "react-router-dom";
import { toastError, validateData } from "../../utils";
import useAuth from "../../hook/useAuth";

const loginPage = () => {
  const { loginRequest } = useAuth();
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const handleLogin = () => {
    const dataLogin = {
      email: emailRef.current.input.value,
      password: passwordRef.current.input.value,
    };

    if (validateData(dataLogin)) {
      const reqLogin = {
        payload: dataLogin,
      };
      loginRequest({ reqLogin, navigate });
    } else {
      toastError("Ghi day du");
    }
  };

  return (
    <div className="login_background">
      <div className="login_page">
        <div className="logo">
          <img
            src="../../src/assets/logo.png"
            style={{ width: "200px" }}
            alt=""
          />
        </div>
        <Form className="login-form">
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
          <Form.Item className="login_footer">
            <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
            <a
              className="login-form-forgot"
              href="register"
              style={{ color: "white" }}
            >
              Forgot password
            </a>
            <Button
              onClick={handleLogin}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Sign in
            </Button>
            <div className="register_btn">
              <a style={{ color: "white" }} href="/register">
                register now!
              </a>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default loginPage;
