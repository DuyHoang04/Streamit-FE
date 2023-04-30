import React, { useEffect, useRef, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import DropFile from "../../common/DropImage/drop-file";
import InputSelect from "../../common/inputSelect/Input-select";
import InputCustom from "../../common/input/InputCustom";
import TitlePageAdmin from "../../common/title-page-admin/title-page-admin";
import ButtonCustom from "../../common/button/buttonCustom";
import useGenres from "../../hook/useGenres";
import { validateData } from "../../utils";
import { toast } from "react-hot-toast";
import useMovie from "../../hook/useMovie";

const AddMovie = () => {
  const { getAllGenresRequest, genresList } = useGenres();
  const { addMovieRequest } = useMovie();
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

  const resetDataState = () => {
    nameRef.current.input.value = "";
    hoursRef.current.input.value = "";
    languageRef.current.input.value = "";
    yearRef.current.input.value = "";
    setBannerImage(null);
    setImage(null);
    descriptionRef.current.resizableTextArea.textArea.value = "";
    setVideo("");
  };

  const handleChangeGenres = (selectedOptions) => {
    const selectedValuesArray = selectedOptions.map((option) => option.value);
    setGenres(selectedValuesArray);
  };

  const dataInputSelect = genresList?.map((item) => {
    return { value: item._id, label: item.name };
  });

  const handleAddMovie = async (e) => {
    e.preventDefault();
    const dataMovie = {
      name: nameRef.current.input.value,
      description: descriptionRef.current.resizableTextArea.textArea.value,
      bannerImage,
      image,
      genres,
      language: languageRef.current.input.value,
      year: yearRef.current.input.value,
      time: hoursRef.current.input.value,
      video,
    };
    if (!validateData(dataMovie)) {
      toast.error("không được để trống");
    } else {
      const formDataMovie = Object.entries(dataMovie).reduce(
        (formData, [key, value]) => {
          if (Array.isArray(value)) {
            formData.append(key, JSON.stringify(value));
          } else {
            formData.append(key, value);
          }
          return formData;
        },
        new FormData()
      );
      const req = {
        payload: formDataMovie,
      };
      addMovieRequest(req);
      // resetDataState();
    }
  };

  return (
    <>
      <div className="add-movie-controller">
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
            url={bannerImage}
            setFile={setBannerImage}
            label="Image Banner"
            title="Drag your image here"
          />
          <DropFile
            url={image}
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
          <InputSelect
            // value={genres}
            data={dataInputSelect}
            onChange={handleChangeGenres}
            label="Category"
          />
          <DropFile
            url={video}
            setFile={setVideo}
            label="Movie Video"
            title="Drag your video here"
          />
        </div>
        <div className="submit-btn">
          <ButtonCustom
            onClick={handleAddMovie}
            icon={<UploadOutlined />}
            large
          >
            Submit
          </ButtonCustom>
        </div>
      </div>
    </>
  );
};

export default AddMovie;
