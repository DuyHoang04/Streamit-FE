import React, { useEffect, useState } from "react";
import InputCustom from "../../common/input/InputCustom";
import ButtonCustom from "../../common/button/buttonCustom";
import Navbar from "./navbar/navbar";
export default function HomePage() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);
  return (
    <>
      <Navbar />
    </>
  );
}
