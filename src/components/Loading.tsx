import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        top: "0",
        bottom: "0",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "red",
        fontSize: "20px",
        alignItems: "center",
      }}
    >
      Loading....
    </div>
  );
};

export default Loading;
