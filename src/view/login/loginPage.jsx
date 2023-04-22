import React, { useRef } from "react";
import "../login/loginStyle.css";
import { Button, Checkbox, Form, Image } from "antd";
import { useDispatch, useSelector } from "react-redux"
import { authActions } from '../../action/index'
import InputCustom from "../../common/input/InputCustom";
const loginPage = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.userReducer.value)
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleClick = () => {  
    const email = emailRef.current.input.value
    const password = passwordRef.current.input.value
    dispatch(authActions.loginRequest({email, password}))
  }
  return (
    <div className="login_background">
    <div className="login_page">
      <div className="logo">
        <img src="../../src/assets/logo.png" style={{ width: "200px" }} alt="" />
      </div>
      <Form className="login-form">
        <Form.Item
          name="gmail"
          rules={[
            {
              required: true,
              message: 'Please input your gmail!',
            },
          ]}>

          <InputCustom
            type="gmail"
            ref={emailRef}
            placeholder="gmail"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}>
          <InputCustom
            ref={passwordRef}
            type="password"
            placeholder="password"
          />

        </Form.Item>
        <Form.Item className="login_footer">
          <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
          <a className="login-form-forgot" href="register" style={{ color: "white" }}>

            Forgot password
          </a>
          <Button
            onClick={handleClick}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Sign in
          </Button>
          <div className="register_btn">
            <a style={{ color: "white" }} href="/register">register now!</a>
          </div>
        </Form.Item>
      </Form>
    </div>
    </div>
  );
};
export default loginPage;
