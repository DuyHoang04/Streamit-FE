import React, { useEffect, useState } from "react";
import Navbar from "./navbar/navbar";
import Banner from "./banner/banner";
import Loader from "../../common/loader/Loader";
import useMedia from "../../hook/useMedia";
import { getMovieByGenres, getRandomElements } from "../../utils";

export default function HomePage() {
  const { getMovieAndSeries, mediaList } = useMedia();
  const newMovieList = getMovieByGenres(mediaList);
  const dataBanner = getRandomElements(mediaList, 5);

  useEffect(() => {
    const fetchData = async () => {
      await getMovieAndSeries({});
    };
    fetchData();
  }, []);

  return (
    <>
      {mediaList.length > 0 ? <Banner data={dataBanner} /> : <Loader />}
      {/* <Navbar /> */}
    </>
  );
}
