import React from "react";

const SeoHiddenText = ({ title, description, tag = "p" }) => {
  const Tag = tag; // dynamic heading (h1 or p)

  return (
    <>
      {/* Hidden SEO Title */}
      <Tag
        style={{
          position: "absolute",
          left: "-9999px",
          top: "0",
          overflow: "hidden",
          height: "1px",
          width: "1px",
          fontSize: tag === "h1" ? "2rem" : "1.2rem",
          fontWeight: tag === "h1" ? "700" : "400",
        }}
      >
        {title}
      </Tag>

      {/* Visible Description */}
      <p
        style={{
          textAlign: "center",
          fontSize: "1.1rem",
          lineHeight: "1.8",
          maxWidth: "900px",
          margin: "25px auto",
          color: "#000",
          fontWeight: "400",
        }}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </>
  );
};

export default SeoHiddenText;
