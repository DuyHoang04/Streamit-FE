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
  const [name, setName] = useState("");
  const [hours, setHours] = useState(null);
  const [language, setLanguage] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await getAllGenresRequest();
    };
    fetchData();
  }, []);

  const resetDataState = () => {
    setName("");
    setHours("");
    setLanguage("");
    setYear("");
    setBannerImage("");
    setImage("");
    setDescription("");
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
      name,
      description,
      bannerImage,
      image,
      genres,
      language,
      year,
      time: hours,
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
      await addMovieRequest(req);
      resetDataState();
    }
  };

  return (
    <>
      <div className="add-movie-controller">
        <div className="top">
          <InputCustom
            value={name}
            label="Name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <InputCustom
            value={hours}
            label="Hours"
            placeholder="2hr"
            onChange={(e) => setHours(e.target.value)}
          />
          <InputCustom
            value={language}
            label="Language Used"
            placeholder="English"
            onChange={(e) => setLanguage(e.target.value)}
          />
          <InputCustom
            value={year}
            label="Year of Release"
            placeholder="2023"
            onChange={(e) => setYear(e.target.value)}
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
            value={description}
            isTextarea
            label="Description"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <InputSelect
            // value={genres}
            data={dataInputSelect}
            onChange={handleChangeGenres}
            label="Genres"
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
