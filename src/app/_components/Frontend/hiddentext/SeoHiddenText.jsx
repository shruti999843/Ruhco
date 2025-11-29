import React from "react";

const SeoHiddenText = ({ title, description }) => {
  return (
    <>
   <p
  style={{
    position: "absolute",
    left: "-9999px",
    top: "0",
    overflow: "hidden",
    height: "1px",
    width: "1px",
    fontSize: "2rem",
    fontWeight: "700",
  }}
>
  {title}
</p>


  <p
  style={{
    textAlign: "center",
    fontSize: "1.1rem",
    lineHeight: "1.8",
    maxWidth: "900px",
    margin: "5px auto",
    color: "#000",
    fontWeight: "400",
  }}
  dangerouslySetInnerHTML={{ __html: description }}
/>

    </>
  );
};

export default SeoHiddenText;
