import React, { useState } from "react";
import { Radio } from "antd";
import AddMovie from "../../components/add-movie/add-movie";
import AddSeries from "../../components/add-series/add-series";
import TitlePageAdmin from "../../common/title-page-admin/title-page-admin";
import "./admin-add-movie.scss";

const AdminAddMoviePage = () => {
  const [selectedOption, setSelectedOption] = useState("movie");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <TitlePageAdmin title={`Add ${selectedOption}`} />

      <Radio.Group onChange={handleOptionChange} value={selectedOption}>
        <Radio value="movie">Movie</Radio>
        <Radio value="series">Series</Radio>
      </Radio.Group>

      {selectedOption === "movie" && <AddMovie />}
      {selectedOption === "series" && <AddSeries />}
    </>
  );
};

export default AdminAddMoviePage;
