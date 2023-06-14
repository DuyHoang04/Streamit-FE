import React from "react";
import "./reset-password-page.scss";
import queryString from "query-string";
import { useNavigate, useLocation } from "react-router-dom";
import "./reset-password-page.scss";
import InputCustom from "../../common/input/InputCustom";
import CustomButton from "../../common/button/buttonCustom";
import { useState } from "react";
import { toastError } from "../../utils";
import useAuth from "../../hook/useAuth";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const { resetPasswordRequest } = useAuth();
  const queryParams = queryString.parse(useLocation().search);
  const isOtp = queryParams.otp;
  const emailUser = queryParams.email;

  console.log(isOtp);

  const [newPass, setNewPass] = useState("");

  const handleResetPassword = () => {
    if (newPass) {
      const req = {
        payload: {
          keyReset: isOtp,
          newPass,
        },
      };
      resetPasswordRequest({ req, navigate });
    } else {
      toastError("Ghi day du");
    }
  };

  return (
    <div className="reset-password-page">
      <div className="container">
        <div className="title">Reset Password Email {emailUser}</div>
        <InputCustom
          large
          placeholder="New Password"
          type="password"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
        />
        <CustomButton large onClick={handleResetPassword}>
          Submit
        </CustomButton>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
