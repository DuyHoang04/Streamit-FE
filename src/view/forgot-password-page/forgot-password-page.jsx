import React, { useEffect } from "react";
import "./forgot-password-page.scss";
import InputCustom from "../../common/input/InputCustom";
import ButtonCustom from "../../common/button/buttonCustom";
import { useState } from "react";
import validator from "validator";
import useAuth from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const { forgotPasswordRequest, keyResetPass } = useAuth();
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isFormOtp, setIsFormOtp] = useState(false);
  const [isOtp, setIsOtp] = useState("");

  const handleSendEmail = () => {
    if (validator.isEmail(email)) {
      const req = {
        payload: { email },
      };
      forgotPasswordRequest(req);
      setIsValid(true);
      setIsFormOtp(true);
    } else {
      setIsValid(false);
    }
  };
  const handleSendOTP = () => {
    if (isOtp === keyResetPass) {
      navigate(`/reset_password?otp=${isOtp}&email=${email}`);
    } else {
      setIsValid(false);
    }
  };

  console.log(keyResetPass);

  return (
    <div className="forgot-password-page">
      <div className="container">
        {!isFormOtp ? (
          <>
            <div className="title">Forgot-Password</div>
            <div className="desc">
              We'll email you with instructions to reset your password.
            </div>
            <InputCustom
              large
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            {!isValid && (
              <p className="valid-email">Please enter a valid email.</p>
            )}
            <ButtonCustom large onClick={handleSendEmail}>
              Send
            </ButtonCustom>
          </>
        ) : (
          <>
            <div className="title">OTP</div>
            <div className="desc">
              We'll OTP you with instructions to reset your password.
            </div>
            <InputCustom
              large
              placeholder="Your OTP"
              value={isOtp}
              onChange={(e) => setIsOtp(e.target.value)}
              type="text"
            />
            {!isValid && (
              <p className="valid-email">Please enter a valid OTP.</p>
            )}
            <ButtonCustom large onClick={handleSendOTP}>
              Send
            </ButtonCustom>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
