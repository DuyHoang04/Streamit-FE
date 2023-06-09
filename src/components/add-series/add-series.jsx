import React, { useEffect, useRef, useState } from "react";
import { UploadOutlined, RestOutlined, EditOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import DropFile from "../../common/DropImage/drop-file";
import InputSelect from "../../common/inputSelect/Input-select";
import InputCustom from "../../common/input/InputCustom";
import ButtonCustom from "../../common/button/buttonCustom";
import useGenres from "../../hook/useGenres";
import { validateData } from "../../utils";
import useSeries from "../../hook/useSeries";
import "./add-series.scss";

const AddSeries = () => {
  const { getAllGenresRequest, genresList } = useGenres();
  const { addSeriesMovieRequest } = useSeries();
  const [bannerImage, setBannerImage] = useState(null);
  const [image, setImage] = useState(null);
  const [genres, setGenres] = useState([]);
  const [name, setName] = useState("");
  const [hours, setHours] = useState(null);
  const [language, setLanguage] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [episodeName, setNameEpisode] = useState("");
  const [episodeNumber, setEpisodeNumber] = useState(null);
  const [video, setVideo] = useState(null);
  const [addEpisodeModal, setAddEpisodeModal] = useState(false);
  const [episodes, setEpisodes] = useState([]);
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
    setNameEpisode("");
    setEpisodeNumber("");
    setVideo("");
    setEpisodes([]);
  };

  const handleChangeGenres = (selectedOptions) => {
    const selectedValuesArray = selectedOptions.map((option) => option.value);
    setGenres(selectedValuesArray);
  };

  const dataInputSelect = genresList?.map((item) => {
    return { value: item._id, label: item.name };
  });

  const handleAddEpisode = () => {
    const dataEpisode = {
      episodeName,
      episodeNumber,
      video,
    };
    setEpisodes([...episodes, dataEpisode]);
    setAddEpisodeModal(false);
  };

  const handleDeleteEpisode = (name) => {
    const newEpisode = episodes.filter((item) => item.episodeName !== name);
    setEpisodes(newEpisode);
  };

  const handleAddSeries = async (e) => {
    e.preventDefault();
    const dataSeries = {
      name,
      description,
      bannerImage,
      image,
      genres,
      language,
      year,
      time: hours,
      episodes,
    };
    if (validateData(dataSeries)) {
      const formData = new FormData();
      formData.append("name", dataSeries.name);
      formData.append("description", dataSeries.description);
      formData.append("bannerImage", dataSeries.bannerImage);
      formData.append("image", dataSeries.image);
      formData.append("language", dataSeries.language);
      formData.append("year", dataSeries.year);
      formData.append("time", dataSeries.time);
      formData.append("genres", JSON.stringify(dataSeries.genres));
      const episodes = dataSeries.episodes.map((item, index) => {
        return {
          episodeName: item.episodeName,
          episodeNumber: item.episodeNumber,
        };
      });
      formData.append("episodes", JSON.stringify(episodes));
      dataSeries.episodes.forEach((episode) => {
        formData.append("video", episode.video);
      });

      const req = {
        payload: formData,
      };

      await addSeriesMovieRequest(req);
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
            label="Category"
          />

          <div className="add-episode" onClick={() => setAddEpisodeModal(true)}>
            Add Episode
          </div>
          <div className="episode-list-container">
            {episodes.map((item) => (
              <div className="episode-list-item" key={item.episodeName}>
                <video src={URL.createObjectURL(item.video)} alt="" />
                <h1 className="episode-name">{item.episodeName}</h1>
                <div className="episode-icons">
                  <div
                    className="icon"
                    onClick={(e) => handleDeleteEpisode(item.episodeName)}
                  >
                    <RestOutlined />
                  </div>
                  <div className="icon-edit">
                    <EditOutlined />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="submit-btn">
          <ButtonCustom
            onClick={handleAddSeries}
            icon={<UploadOutlined />}
            large
          >
            Submit
          </ButtonCustom>
        </div>
      </div>
      <Modal
        title="Add Episode"
        okText="Add"
        open={addEpisodeModal}
        onCancel={() => setAddEpisodeModal(false)}
        onOk={handleAddEpisode}
        cancelButtonProps={{ style: { display: "none" } }}
        className="custom-modal"
      >
        <InputCustom
          label="Name"
          value={episodeName}
          onChange={(e) => setNameEpisode(e.target.value)}
        />
        <InputCustom
          label="Episode"
          value={episodeNumber}
          type="number"
          onChange={(e) => setEpisodeNumber(e.target.value)}
        />
        <DropFile
          url={video}
          setFile={setVideo}
          label="Video without Title"
          title="Drag your video here"
        />
      </Modal>
    </>
  );
};

export default AddSeries;
