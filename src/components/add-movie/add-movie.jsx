import React, { useEffect, useRef, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import DropFile from "../../common/DropImage/drop-file";
import InputSelect from "../../common/inputSelect/Input-select";
import InputCustom from "../../common/input/InputCustom";
import TitlePageAdmin from "../../common/title-page-admin/title-page-admin";
import ButtonCustom from "../../common/button/buttonCustom";
import useGenres from "../../hook/useGenres";

const AddMovie = () => {
  const { getAllGenresRequest } = useGenres();
  const [bannerImage, setBannerImage] = useState(null);
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [genres, setGenres] = useState([]);
  const nameRef = useRef();
  const hoursRef = useRef();
  const languageRef = useRef();
  const yearRef = useRef();
  const descriptionRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      await getAllGenresRequest();
    };
    fetchData();
  }, []);

  const handleChangeGenres = (selectedOptions) => {
    const selectedValuesArray = selectedOptions.map((option) => option.value);
    setGenres(selectedValuesArray);
  };

  return (
    <>
      <div className="add-movie-controller">
        <TitlePageAdmin title="Add Movie" />
        <div className="top">
          <InputCustom ref={nameRef} label="Name" placeholder="Name" />
          <InputCustom ref={hoursRef} label="Hours" placeholder="2hr" />
          <InputCustom
            ref={languageRef}
            label="Language Used"
            placeholder="English"
          />
          <InputCustom
            ref={yearRef}
            label="Year of Release"
            placeholder="2023"
          />
          <DropFile
            setFile={setBannerImage}
            label="Image Banner"
            title="Drag your image here"
          />
          <DropFile
            setFile={setImage}
            label="Image without Title"
            title="Drag your image here"
          />
        </div>
        <div className="bottom">
          <InputCustom
            ref={descriptionRef}
            isTextarea
            label="Description"
            placeholder="Description"
          />
          <InputSelect onChange={handleChangeGenres} label="Category" />
          <DropFile
            setFile={setVideo}
            label="Movie Video"
            title="Drag your video here"
          />
        </div>
        <div className="submit-btn">
          <ButtonCustom icon={<UploadOutlined />} large>
            Submit
          </ButtonCustom>
        </div>
      </div>
    </>
  );
};

export default AddMovie;
