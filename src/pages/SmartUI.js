import React from "react";
import Clock from "react-digital-clock";

const SmartUI = () => {
  return (
    <div
      style={{ backgroundColor: "#000", height: "100vh", fontSize: "250px" }}
    >
      <Clock hour12={false} />
    </div>
  );
};

export default SmartUI;
