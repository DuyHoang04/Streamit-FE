import React from "react";
import "./admin-add-movie.scss";
import { UploadOutlined } from "@ant-design/icons";
import DropFile from "../../common/DropImage/drop-file";
import InputSelect from "../../common/inputSelect/Input-select";
import InputCustom from "../../common/input/InputCustom";
import TitlePageAdmin from "../../common/title-page-admin/title-page-admin";
import ButtonCustom from "../../common/button/buttonCustom";
import AddMovie from "../../components/add-movie/add-movie";

const AdminAddMoviePage = () => {
  return (
    <>
      <AddMovie />
    </>
  );
};

export default AdminAddMoviePage;
