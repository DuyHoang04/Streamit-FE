import React from "react";
import "./admin-add-movie.scss";
import DropFile from "../../common/DropImage/drop-file";
import InputSelect from "../../common/inputSelect/Input-select";
import InputCustom from "../../common/input/InputCustom";
import TitlePageAdmin from "../../common/title-page-admin/title-page-admin";

const AdminAddMoviePage = () => {
  return (
    <>
      <div className="add-movie-controller">
        <TitlePageAdmin title="Add Movie" />
        <div className="top">
          <InputCustom label="Name" placeholder="Name" />
          <InputCustom label="Hours" placeholder="2hr" />
          <InputCustom label="Language Used" placeholder="English" />
          <InputCustom label="Year of Release" placeholder="2023" />
          <DropFile label="Image Banner" title="Drag your image here" />
          <DropFile label="Image without Title" title="Drag your image here" />
        </div>
        <div className="bottom">
          <InputCustom
            isTextarea
            label="Description"
            placeholder="Description"
          />
          <DropFile label="Movie Video" title="Drag your video here" />
        </div>
      </div>
    </>
  );
};

export default AdminAddMoviePage;
