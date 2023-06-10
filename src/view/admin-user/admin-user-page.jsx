import React, { useEffect, useState, useRef } from "react";
import "./admin-user.scss";
import { BASE_URL } from "../../utils/apiConfig";
import { validateData } from "../../utils";
import { Table, Modal, Upload } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import InputCustom from "../../common/input/InputCustom";
import DropFile from "../../common/DropImage/drop-file";

import useUser from "../../hook/useUser";
import TitlePageAdmin from "../../common/title-page-admin/title-page-admin";

const AdminUserPage = () => {
  const { userList, getAllUserRequest, updateUserRequest, deleteUserRequest } =
    useUser();
  const [updateUserModal, setUpdateUserModal] = useState(false);
  const [deleteUserModal, setDeleteUserModal] = useState(false);
  const [userId, setUserId] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await getAllUserRequest();
    };
    fetchData();
  }, []);

  const openUpdateUserModal = (id) => {
    setUserId(id);
    setUpdateUserModal(true);
  };
  const openDeleteUserModal = (id) => {
    setUserId(id);
    setDeleteUserModal(true);
  };

  const resetDataState = () => {
    setUsername("");
    setEmail("");
  };

  const columns = [
    {
      title: "Image",
      key: "picturePath",
      dataIndex: "picturePath",
      width: 100,
      render: (picturePath) => (
        <img
          src={
            picturePath
              ? `${BASE_URL}/${picturePath}`
              : "https://png.pngitem.com/pimgs/s/649-6490124_katie-notopoulos-katienotopoulos-i-write-about-tech-round.png"
          }
          alt=""
          className="image_user"
        />
      ),
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      width: 150,
      render: (username) => <span className="name_user">{username}</span>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 150,
      render: (email) => <span className="email_user">{email}</span>,
    },
    {
      title: "Role",
      dataIndex: "isAdmin",
      key: "isAdmin",
      width: 150,
      render: (isAdmin) => (
        <span className="role_user">{isAdmin ? "ADMIN" : "USER"}</span>
      ),
    },
    {
      title: "Action",
      width: 150,
      render: (_, item) => (
        <div className="action manipulated__action action_movie">
          <div
            onClick={() => openUpdateUserModal(item._id)}
            className="action__edit"
          >
            Edit <EditOutlined className="edit_icons" />
          </div>
          <div
            onClick={() => openDeleteUserModal(item._id)}
            className="action__delete"
          >
            <DeleteOutlined className="delete_icons" />
          </div>
        </div>
      ),
      fixed: "right",
    },
  ];

  const getUserSelected = () => {
    return userList.find((user) => user._id === userId);
  };

  const handleUpdateUser = () => {
    const dataUser = {
      username,
      email,
      picturePath: imageUrl,
    };

    const formDataUser = new FormData();
    formDataUser.append(
      "username",
      dataUser.username || getUserSelected().username
    );
    formDataUser.append("email", dataUser.email || getUserSelected().email);
    formDataUser.append(
      "picturePath",
      dataUser.picturePath || getUserSelected().picturePath
    );

    const req = {
      payload: formDataUser,
      paths: { userId },
    };

    Promise.all([
      updateUserRequest({ req }),
      setUpdateUserModal(false),
      resetDataState(),
    ]);
  };

  const handleDeleteUser = () => {
    const req = {
      paths: { userId },
    };
    deleteUserRequest(req);
    setDeleteUserModal(false);
  };

  return (
    <>
      <TitlePageAdmin title={"User"} />
      <div className="admin_user">
        <Table
          lassName="ant-table-content"
          columns={columns}
          dataSource={userList}
          scroll={{ x: "max-content", y: 400 }}
          rowKey={(record) => record._id}
          pagination={false}
        />
      </div>
      <Modal
        title="Update User"
        okText="Update"
        open={updateUserModal}
        onCancel={() => setUpdateUserModal(false)}
        onOk={handleUpdateUser}
        cancelButtonProps={{ style: { display: "none" } }}
        className="modal_update"
      >
        <DropFile
          url={imageUrl}
          setFile={setImageUrl}
          label="Image without Title"
          title="Drag your image here"
        />
        <InputCustom
          label="Name"
          value={username}
          placeholder={getUserSelected()?.username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputCustom
          label="Email"
          value={email}
          type="text"
          placeholder={getUserSelected()?.email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Modal>
      <Modal
        title="Warning"
        okText="Delete"
        open={deleteUserModal}
        onCancel={() => setDeleteUserModal(false)}
        onOk={handleDeleteUser}
        cancelButtonProps={{ style: { display: "none" } }}
        className="delete-modal"
      >
        <h1 className="text-delete">Khi xóa sẽ không thể thu hồi nữa</h1>
      </Modal>
    </>
  );
};
export default AdminUserPage;
