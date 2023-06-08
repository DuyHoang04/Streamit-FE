import React, { useEffect, useState } from "react";
import Navbar from "./navbar/navbar";
import Banner from "./banner/banner";
import Loader from "../../common/loader/Loader";
export default function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <Banner />
      <Loader />
    </>
  );
}
