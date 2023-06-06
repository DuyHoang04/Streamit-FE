import React, { useEffect, useState } from "react";
import { Button, Tooltip } from "antd";
export default function HomePage() {
  const DoubleTooltipButton = () => {
    return (
      <Tooltip
        title={
          <div>
            <Tooltip title="Tooltip 1">
              <span>Tooltip 1</span>
            </Tooltip>
            <Tooltip title="Tooltip 2">
              <span>Tooltip 2</span>
            </Tooltip>
          </div>
        }
        mouseEnterDelay={0.5} // Đặt thời gian trễ khi hover vào tooltip
      >
        <Button>Hover me</Button>
      </Tooltip>
    );
  };

  return (
    <>
      <DoubleTooltipButton />
    </>
  );
}
