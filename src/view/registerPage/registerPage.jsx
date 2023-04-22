import React, { useRef } from "react";
import "../registerPage/registerPage.scss";
import { Button, Checkbox, Form, Image } from "antd";
import { useDispatch, useSelector } from "react-redux"
import { authActions } from '../../action/index'
import InputCustom from "../../common/input/InputCustom";
const registerPage = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.userReducer.value)
    const userNameRef = useRef()
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleClick = () => {
        const username = userNameRef.current.input.value
        const email = emailRef.current.input.value
        const password = passwordRef.current.input.value
        dispatch(authActions.registerRequest({ email, password, username }))
    }
    return (
        <div className="register_background">
            <div className="register_page">
                <div className="logo">
                    <img src="../../src/assets/logo.png" style={{ width: "200px" }} alt="" />
                </div>
                <Form className="register-form">
                    <Form.Item
                        name="userName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}>

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
                    <Form.Item className="register_footer">
                        <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
                        <a className="register-form-forgot" href="" style={{ color: "white" }}>

                            Forgot password
                        </a>
                        <Button
                            onClick={handleClick}
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
