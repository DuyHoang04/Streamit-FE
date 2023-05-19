import React, { useEffect, useState } from "react";
import InputCustom from "../common/input/InputCustom";
import ButtonCustom from "../common/button/buttonCustom";

export default function HomePage() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);
  return (
    <>
      <p style={{ marginBottom: "10px" }}>You clicked {count} times</p>

      <ButtonCustom onClick={() => setCount(count + 1)}>Count</ButtonCustom>
    </>
  );
}
