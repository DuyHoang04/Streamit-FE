import React, { useEffect, useRef, useState } from "react";
import "./admin-genres.scss";
import { Table, Modal } from "antd";
import TitlePageAdmin from "../../common/title-page-admin/title-page-admin";
import useGenres from "../../hook/useGenres";
import {
  EditOutlined,
  DeleteOutlined,
  UploadOutlined,
  RestOutlined,
} from "@ant-design/icons";
import moment from "moment";
import ButtonCustom from "../../common/button/buttonCustom";
import InputCustom from "../../common/input/InputCustom";
import { toastError, validateData } from "../../utils";

const AdminGenresPage = () => {
  const {
    genresList,
    getAllGenresRequest,
    addGenresRequest,
    deleteGenresRequest,
    updateGenresRequest,
  } = useGenres();
  const [addGenresModal, setAddGenresModal] = useState(false);
  const [updateGenresModal, setUpdateGenresModal] = useState(false);
  const [deleteGenresModal, setDeleteGenresModal] = useState(false);
  const [genresId, setGenresId] = useState("");
  const nameRef = useRef();
  const descriptionRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      await getAllGenresRequest();
    };
    fetchData();
  }, []);

  const handleOpenDeleteGenresModal = (id) => {
    setGenresId(id);
    setDeleteGenresModal(true);
  };
  const handleOpenUpdateGenresModal = (id) => {
    setGenresId(id);
    setUpdateGenresModal(true);
  };

  const columns = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      width: 100,
      render: (name) => <span className="genres_name">{name}</span>,
    },
    {
      title: "Movies",
      dataIndex: "movies",
      key: "movies",
      width: 150,
      render: (movies) => <span className="genres_movie">{movies.length}</span>,
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 150,
      render: (createdAt) => (
        <span className="genres_movie">
          {moment(createdAt).format("YYYY-MM-DD")}
        </span>
      ),
    },
    {
      title: "Action",
      width: 150,
      render: (_, item) => (
        <div className="action manipulated__action action_movie">
          <div
            onClick={() => handleOpenUpdateGenresModal(item._id)}
            className="action__edit"
          >
            Edit <EditOutlined className="edit_icons" />
          </div>
          <div
            onClick={() => handleOpenDeleteGenresModal(item._id)}
            className="action__delete"
          >
            <DeleteOutlined className="delete_icons" />
          </div>
        </div>
      ),
      fixed: "right",
    },
  ];

  const getGenresSelected = () => {
    return genresList.find((item) => item._id === genresId);
  };

  const handleAddGenres = () => {
    const dataGenres = {
      name: nameRef.current.input.value,
      description: descriptionRef.current.resizableTextArea.textArea.value,
    };
    if (validateData(dataGenres)) {
      const req = {
        payload: dataGenres,
      };
      addGenresRequest(req);
      setAddGenresModal(false);
    } else {
      toastError("ko dc bo trong");
    }
  };

  const handleDeleteGenres = () => {
    const req = {
      paths: {
        genresId,
      },
    };

    deleteGenresRequest(req);
    setDeleteGenresModal(false);
  };
  const handleUpdateGenres = () => {
    const dataGenres = {
      name: nameRef.current.input.value,
      description: descriptionRef.current.resizableTextArea.textArea.value,
    };
    const req = {
      payload: dataGenres,
      paths: {
        genresId,
      },
    };

    updateGenresRequest(req);
    setUpdateGenresModal(false);
  };

  return (
    <>
      <TitlePageAdmin title={"Genres"} />
      <div className="admin-genres">
        <div
          className="admin-genres-add"
          onClick={() => setAddGenresModal(true)}
        >
          <ButtonCustom>Add</ButtonCustom>
        </div>
        <Table
          lassName="ant-table-content"
          columns={columns}
          dataSource={genresList}
          scroll={{ x: "max-content", y: 400 }}
          rowKey={(record) => record._id}
          pagination={false}
        />
      </div>
      <Modal
        title="Add Genres"
        okText="Add"
        open={addGenresModal}
        onCancel={() => setAddGenresModal(false)}
        onOk={handleAddGenres}
        cancelButtonProps={{ style: { display: "none" } }}
        className="custom-modal"
      >
        <InputCustom label="Name" ref={nameRef} />
        <InputCustom
          label="Description"
          ref={descriptionRef}
          type="text"
          isTextarea
        />
      </Modal>
      {/* DELETE */}
      <Modal
        title="Warning"
        okText="Delete"
        open={deleteGenresModal}
        onCancel={() => setDeleteGenresModal(false)}
        onOk={handleDeleteGenres}
        cancelButtonProps={{ style: { display: "none" } }}
        className="delete-modal"
      >
        <h1 className="text-delete">Khi xóa sẽ không thể thu hồi nữa</h1>
      </Modal>
      {/* UPDATE */}
      <Modal
        title="Update Genres"
        okText="Update"
        open={updateGenresModal}
        onCancel={() => setUpdateGenresModal(false)}
        onOk={handleUpdateGenres}
        cancelButtonProps={{ style: { display: "none" } }}
        className="custom-modal"
      >
        <InputCustom
          label="Name"
          ref={nameRef}
          placeholder={getGenresSelected()?.name}
        />
        <InputCustom
          label="Description"
          ref={descriptionRef}
          type="text"
          isTextarea
          placeholder={getGenresSelected()?.description}
        />
      </Modal>
    </>
  );
};

export default AdminGenresPage;
