import React, { useEffect, useState, useRef } from "react";
import "./admin-movies.scss";
import {
  EditOutlined,
  DeleteOutlined,
  UploadOutlined,
  RestOutlined,
} from "@ant-design/icons";
import useMedia from "../../hook/useMedia";
import TitlePageAdmin from "../../common/title-page-admin/title-page-admin";
import { Table, Modal } from "antd";
import { BASE_URL } from "../../utils/apiConfig";
import DropFile from "../../common/DropImage/drop-file";
import InputSelect from "../../common/inputSelect/Input-select";
import InputCustom from "../../common/input/InputCustom";
import useGenres from "../../hook/useGenres";
import useMovie from "../../hook/useMovie";
import useSeries from "../../hook/useSeries";

const AdminMoviesPage = () => {
  const { getAllGenresRequest, genresList } = useGenres();
  const { updateMovieRequest, deleteMovieRequest } = useMovie();
  const {
    updateEpisodeRequest,
    deleteEpisodeRequest,
    deleteSeriesRequest,
    updateSeriesRequest,
  } = useSeries();
  const { mediaList, getMovieAndSeries } = useMedia();
  const [updateMovieModal, setUpdateMovieModal] = useState(false);
  const [addEpisodeModal, setAddEpisodeModal] = useState(false);
  const [updateEpisodeModal, setUpdateEpisodeModal] = useState(false);
  const [deleteEpisodeModal, setDeleteEpisodeModal] = useState(false);
  const [deleteMovieModal, setDeleteMovieModal] = useState(false);
  const [movieId, setMovieId] = useState(null);
  const [episodeId, setEpisodeId] = useState(null);
  const [isSeries, setIsSeries] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  const [bannerImage, setBannerImage] = useState(null);
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [genres, setGenres] = useState([]);

  const [name, setName] = useState("");
  const [hours, setHours] = useState(null);
  const [language, setLanguage] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");

  const [episodeName, setNameEpisode] = useState("");
  const [episodeNumber, setEpisodeNumber] = useState(null);
  const [videoEpisode, setVideoEpisode] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await getMovieAndSeries({ queries: {} });
      await getAllGenresRequest();
    };
    fetchData();
  }, []);

  const dataInputSelect = genresList?.map((item) => {
    return { value: item._id, label: item.name };
  });

  const handleChangeGenres = (selectedOptions) => {
    const selectedValuesArray = selectedOptions.map((option) => option.value);
    setGenres(selectedValuesArray);
  };

  const handleOpenUpdateModal = (id, isSeries) => {
    setMovieId(id);
    setUpdateMovieModal(true);
  };

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

  const columns = [
    {
      title: "Image",
      key: "image",
      dataIndex: "image",
      width: 100,
      render: (image) => (
        <img src={`${BASE_URL}/${image}`} alt="" className="image_movie" />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 200,
      render: (name) => <span className="movie_name">{name}</span>,
    },
    {
      title: "Genres",
      dataIndex: "genres",
      key: "genres",
      width: 100,
      render: (genres) => (
        <span className="movie_name">{genres[0]?.name}...</span>
      ),
    },
    {
      title: "Language",
      dataIndex: "language",
      key: "language",
      width: 150,
      render: (language) => <span className="language_movie">{language}</span>,
    },
    {
      title: "Year",
      key: "year",
      dataIndex: "year",
      width: 150,
      render: (year) => <span className="year_movie">{year}</span>,
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      width: 100,
      render: (time) => <span className="time_movie">{time}hr</span>,
    },
    {
      title: "Category",
      width: 100,
      dataIndex: "isSeries",
      key: "isSeries",
      render: (isSeries) => (
        <span className="category_movie">{isSeries ? "Tv Show" : "Movie"}</span>
      ),
    },
    {
      title: "Action",
      width: 150,
      render: (_, item) => (
        <div className="action manipulated__action action_movie">
          <div
            onClick={() => handleOpenUpdateModal(item._id, item?.isSeries)}
            className="action__edit"
          >
            Edit <EditOutlined className="edit_icons" />
          </div>
          <div
            onClick={() => openDeleteModal(item._id, item?.isSeries)}
            className="action__delete"
          >
            <DeleteOutlined className="delete_icons" />
          </div>
        </div>
      ),
      fixed: "right",
    },
  ];

  const getSelectMovie = () => {
    return mediaList.find((movie) => movie._id === movieId);
  };

  const handleUpdateMovie = () => {
    const genresIdArray = getSelectMovie().genres.map((item) => {
      return item._id;
    });
    const dataMovie = {
      name: name || getSelectMovie().name,
      description: description || getSelectMovie().description,
      bannerImage,
      image,
      genres: genres.length > 0 ? genres : genresIdArray,
      language: language || getSelectMovie().language,
      year: year || getSelectMovie().year,
      time: hours || getSelectMovie().time,
      video,
    };
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
      paths: { movieId },
    };

    updateMovieRequest(req);
    setUpdateMovieModal(false);
  };

  const openUpdateEpisodeModal = (id) => {
    setEpisodeId(id);
    setUpdateEpisodeModal(true);
  };
  const openDeleteEpisodeModal = (id) => {
    setEpisodeId(id);
    setDeleteEpisodeModal(true);
  };

  const handleUpdateEpisode = async () => {
    const formDataEpisode = new FormData();

    formDataEpisode.append("episodeName", episodeName);
    formDataEpisode.append("episodeNumber", episodeNumber || 1);
    formDataEpisode.append("video", video);

    const req = {
      payload: formDataEpisode,
      paths: {
        seriesId: movieId,
      },
      queries: {
        episodeId,
      },
    };

    await updateEpisodeRequest(req);
    await setUpdateEpisodeModal(false);
    await setUpdateMovieModal(false);
  };

  const handleDeleteEpisode = async () => {
    const req = {
      paths: {
        seriesId: movieId,
      },
      queries: {
        episodeId,
      },
    };

    await deleteEpisodeRequest(req);
    await setDeleteEpisodeModal(false);
    await setUpdateMovieModal(false);
  };

  const openDeleteModal = (id, isSeries) => {
    setMovieId(id);
    setIsSeries(isSeries || false);
    setDeleteMovieModal(true);
  };

  const handleDeleteMovieOrSeries = () => {
    if (isSeries) {
      deleteSeriesRequest({
        paths: {
          seriesId: movieId,
        },
      });
    } else {
      deleteMovieRequest({
        paths: {
          movieId,
        },
      });
    }
    setDeleteMovieModal(false);
  };

  const handleAddEpisode = () => {
    const dataEpisode = {
      episodeName,
      episodeNumber,
      video: videoEpisode,
    };
    setEpisodes([...episodes, dataEpisode]);
    setAddEpisodeModal(false);
  };

  const handleDeleteEpisodeWhenAdd = (name) => {
    const newEpisode = episodes.filter((item) => item.episodeName !== name);
    setEpisodes(newEpisode);
  };

  const handleUpdateSeries = (e) => {
    e.preventDefault();
    const defaultGenres = getSelectMovie().genres.map((item) => {
      return item._id;
    });

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("bannerImage", bannerImage);
    formData.append("image", image);
    formData.append("language", language);
    formData.append("year", year);
    formData.append("time", hours);
    if (Array.isArray(genres) && genres.length > 0) {
      formData.append("genres", JSON.stringify(genres));
    } else {
      formData.append("genres", JSON.stringify(defaultGenres));
    }
    const newEpisodes = episodes?.map((item) => {
      return {
        episodeName: item.episodeName,
        episodeNumber: item.episodeNumber,
      };
    });
    formData.append("episodes", JSON.stringify(newEpisodes));
    episodes?.forEach((episode) => {
      formData.append("video", episode.video);
    });

    const req = {
      payload: formData,
      paths: {
        seriesId: movieId,
      },
    };

    updateSeriesRequest(req);
    setUpdateMovieModal(false);
  };

  return (
    <>
      <div className="admin_movie">
        <TitlePageAdmin title={"Movie"} />
        <Table
          className="ant-table-content"
          columns={columns}
          dataSource={mediaList}
          scroll={{ x: "max-content", y: 400 }}
          rowKey={(record) => record._id}
          pagination={false}
        />
      </div>
      <Modal
        title={`Update Movie ${getSelectMovie()?.name}`}
        okText="Update"
        open={updateMovieModal}
        onCancel={() => setUpdateMovieModal(false)}
        onOk={
          getSelectMovie()?.isSeries ? handleUpdateSeries : handleUpdateMovie
        }
        cancelButtonProps={{ style: { display: "none" } }}
        className="modal_update"
        width={800} // Chỉnh width tại đây
      >
        <div className="add-movie-controller">
          <div className="top">
            <InputCustom
              value={name}
              label="Name"
              placeholder={getSelectMovie()?.name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputCustom
              value={hours}
              label="Hours"
              placeholder={getSelectMovie()?.time}
              onChange={(e) => setHours(e.target.value)}
            />
            <InputCustom
              value={language}
              label="Language Used"
              placeholder={getSelectMovie()?.language}
              onChange={(e) => setLanguage(e.target.value)}
            />
            <InputCustom
              value={year}
              label="Year of Release"
              placeholder={getSelectMovie()?.year}
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
              placeholder={getSelectMovie()?.description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <InputSelect
              // value={genres}
              data={dataInputSelect}
              onChange={handleChangeGenres}
              label="Category"
            />
            {getSelectMovie()?.isSeries ? (
              <>
                <div
                  className="add-episode"
                  onClick={() => setAddEpisodeModal(true)}
                  style={{ color: "white" }}
                >
                  Add Episode
                </div>
                <div className="episode-list-container">
                  {getSelectMovie()?.episodes.map((item) => (
                    <div className="episode-list-item" key={item.episodeName}>
                      <video controls>
                        <source src={`${BASE_URL}/${item.video}`} />
                      </video>
                      <h1 className="episode-name">{item.episodeName}</h1>
                      <div className="episode-icons">
                        <div
                          className="icon"
                          onClick={() => openDeleteEpisodeModal(item._id)}
                        >
                          <RestOutlined />
                        </div>
                        <div
                          className="icon-edit"
                          onClick={() => openUpdateEpisodeModal(item._id)}
                        >
                          <EditOutlined />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {episodes.length > 0 && (
                  <div className="title-episode-add">Add Movie</div>
                )}
                <div className="episode-add-container">
                  {episodes.length > 0 &&
                    episodes.map((item) => (
                      <div className="episode-list-item" key={item.episodeName}>
                        <video controls>
                          <source src={item.video} />
                        </video>
                        <h1 className="episode-name">{item.episodeName}</h1>
                        <div className="episode-icons">
                          <div
                            className="icon"
                            onClick={(e) =>
                              handleDeleteEpisodeWhenAdd(item.episodeName)
                            }
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
                {/* ADD */}
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
                    url={videoEpisode}
                    setFile={setVideoEpisode}
                    label="Video without Title"
                    title="Drag your video here"
                  />
                </Modal>
                {/* UPDATE */}
                <Modal
                  title="Update Episode"
                  okText="Update Episode"
                  open={updateEpisodeModal}
                  onCancel={() => setUpdateEpisodeModal(false)}
                  onOk={handleUpdateEpisode}
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
                    url={video || ""}
                    setFile={setVideo}
                    label="Video without Title"
                    title="Drag your video here"
                  />
                </Modal>
                <Modal
                  title="Warning"
                  okText="Delete"
                  open={deleteEpisodeModal}
                  onCancel={() => setDeleteEpisodeModal(false)}
                  onOk={handleDeleteEpisode}
                  cancelButtonProps={{ style: { display: "none" } }}
                  className="delete-modal"
                >
                  <h1 className="text-delete">
                    Khi xóa sẽ không thể thu hồi nữa
                  </h1>
                </Modal>
              </>
            ) : (
              <>
                <DropFile
                  url={video}
                  setFile={setVideo}
                  label="Movie Video"
                  title="Drag your video here"
                />
              </>
            )}
          </div>
        </div>
      </Modal>
      <Modal
        title="Warning"
        okText="Delete"
        open={deleteMovieModal}
        onCancel={() => setDeleteMovieModal(false)}
        onOk={handleDeleteMovieOrSeries}
        cancelButtonProps={{ style: { display: "none" } }}
        className="delete-modal"
      >
        <h1 className="text-delete">Khi xóa sẽ không thể thu hồi nữa</h1>
      </Modal>
    </>
  );
};

export default AdminMoviesPage;
