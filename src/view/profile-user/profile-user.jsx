import React, { useState, useRef } from "react";
import "./profile-user.scss";
import useUser from "../../hook/useUser";
import Loader from "../../common/loader/Loader";
import { BASE_URL } from "../../utils/apiConfig";
import { Avatar } from "antd";
import ButtonCustom from "../../common/button/buttonCustom";
import { Modal } from "antd";
import DropFile from "../../common/DropImage/drop-file";
import InputCustom from "../../common/input/InputCustom";
import { toastError, validateData } from "../../utils";
import useAuth from "../../hook/useAuth";
const ProfileUser = () => {
  const { accessToken } = useAuth();
  const { userInfo, updateUserRequest, getDetailUser, changePassUser } =
    useUser();
  const [updateUserModal, setUpdateUserModal] = useState(false);
  const [changePassUserModal, setChangePassUserModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const usernameRef = useRef();
  const emailRef = useRef();
  const oldPassRef = useRef();
  const newPassRef = useRef();

  const handleUpdateUser = async () => {
    const dataUser = {
      username: usernameRef.current.input.value,
      email: emailRef.current.input.value,
      picturePath: imageUrl,
    };

    const formDataUser = new FormData();
    formDataUser.append("username", dataUser.username || userInfo?.username);
    formDataUser.append("email", dataUser.email || userInfo?.email);
    formDataUser.append("picturePath", dataUser.picturePath);

    const req = {
      payload: formDataUser,
      paths: { userId: userInfo._id },
    };

    await updateUserRequest({ req, accessToken });
    setUpdateUserModal(false);
  };

  const handleChangePassword = async () => {
    const dataChange = {
      oldPassword: oldPassRef.current.input.value,
      newPassword: newPassRef.current.input.value,
    };

    if (validateData(dataChange)) {
      const req = {
        payload: dataChange,
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      };
      await changePassUser(req);
      setChangePassUserModal(false);
    } else {
      toastError("Ghi day du");
    }
  };

  return (
    <div className="profile-user">
      {userInfo ? (
        <div className="profile_user-container">
          <div className="profile_user_title">Your Profile</div>
          <div className="profile_user_image">
            <Avatar
              className="avatar"
              size={125}
              src={
                userInfo?.picturePath
                  ? `${BASE_URL}/${userInfo?.picturePath}`
                  : "https://png.pngitem.com/pimgs/s/649-6490124_katie-notopoulos-katienotopoulos-i-write-about-tech-round.png"
              }
            />
          </div>
          <div className="profile_user_username">
            <label>Username:</label>
            <span>{userInfo.username}</span>
          </div>
          <div className="profile_user_email">
            <label>Email:</label>
            <span>{userInfo.email}</span>
          </div>

          <div className="profile_user_action">
            <ButtonCustom onClick={() => setUpdateUserModal(true)}>
              Update Profile
            </ButtonCustom>
            <ButtonCustom onClick={() => setChangePassUserModal(true)}>
              Change Password
            </ButtonCustom>
          </div>
          {/* UPDATE */}
          <Modal
            title="Update User"
            okText="Update"
            open={updateUserModal}
            onCancel={() => setUpdateUserModal(false)}
            onOk={handleUpdateUser}
            cancelButtonProps={{ style: { display: "none" } }}
            className="modal_update"
          >
            {" "}
            <DropFile
              url={imageUrl}
              setFile={setImageUrl}
              label="Image without Title"
              title="Drag your image here"
            />
            <InputCustom
              label="Name"
              ref={usernameRef}
              placeholder={userInfo?.username}
            />
            <InputCustom
              label="Email"
              ref={emailRef}
              type="text"
              placeholder={userInfo?.email}
            />
          </Modal>

          {/* CHANGE PASS */}
          <Modal
            title="Change Password"
            okText="OK"
            open={changePassUserModal}
            onCancel={() => setChangePassUserModal(false)}
            onOk={handleChangePassword}
            cancelButtonProps={{ style: { display: "none" } }}
            className="modal_update"
          >
            {" "}
            <InputCustom label="Old Password" ref={oldPassRef} type="text" />
            <InputCustom label="New Password" ref={newPassRef} type="text" />
          </Modal>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProfileUser;
