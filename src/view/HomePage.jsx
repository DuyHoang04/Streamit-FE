import React, { useEffect, useState } from "react";
import InputCustom from "../common/input/InputCustom";

export default function HomePage() {
  const [count, setCount] = useState(0);
  useEffect(() => {}, []);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <InputCustom label="Test" large outline />
    </div>
  );
}
