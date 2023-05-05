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
  const nameRef = useRef();
  const hoursRef = useRef();
  const languageRef = useRef();
  const yearRef = useRef();
  const descriptionRef = useRef();
  const nameEpisodeRef = useRef();
  const episodeNumberRef = useRef();
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
    nameRef.current.input.value = "";
    hoursRef.current.input.value = "";
    languageRef.current.input.value = "";
    yearRef.current.input.value = "";
    // setBannerImage(null);
    // setImage(null);
    descriptionRef.current.resizableTextArea.textArea.value = "";
    // setVideo("");
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
      episodeName: nameEpisodeRef.current.input.value,
      episodeNumber: episodeNumberRef.current.input.value,
      video,
    };
    setEpisodes([...episodes, dataEpisode]);
    setAddEpisodeModal(false);
  };

  const handleDeleteEpisode = (name) => {
    const newEpisode = episodes.filter((item) => item.episodeName !== name);
    setEpisodes(newEpisode);
  };

  const handleAddSeries = (e) => {
    e.preventDefault();
    const dataSeries = {
      name: nameRef.current.input.value,
      description: descriptionRef.current.resizableTextArea.textArea.value,
      bannerImage,
      image,
      genres,
      language: languageRef.current.input.value,
      year: yearRef.current.input.value,
      time: hoursRef.current.input.value,
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

      addSeriesMovieRequest(req);
    }
  };

  console.log(episodes);

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
        <InputCustom label="Name" ref={nameEpisodeRef} />
        <InputCustom label="Episode" ref={episodeNumberRef} type="number" />
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
