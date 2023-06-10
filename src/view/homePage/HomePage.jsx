import React, { useEffect, useState } from "react";
import Navbar from "./navbar/navbar";
import Banner from "./banner/banner";
import Loader from "../../common/loader/Loader";
import useMedia from "../../hook/useMedia";

export default function HomePage() {
  const { getMovieAndSeries, mediaList } = useMedia();

  useEffect(() => {
    const fetchData = async () => {
      await getMovieAndSeries({});
    };
    fetchData();
  }, []);

  return (
    <>
      {mediaList.length > 0 ? <Banner /> : <Loader />}
      {/* <Navbar /> */}
    </>
  );
}
