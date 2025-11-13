import React from "react";

const SeoHiddenText = ({ title, description }) => {
  return (
    <>
      <h1 style={{ position: "absolute", left: "-9999px", visibility: "hidden" }}>{title}</h1>
      <p
  style={{
          textAlign: "center",
          fontSize: "1.1rem",
          lineHeight: "1.8",
          maxWidth: "900px",
          margin: "40px auto", 
          color: "#000",
          fontWeight: "400",
        }}
      >{description}</p>
    </>
  );
};

export default SeoHiddenText;
