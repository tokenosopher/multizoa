import React from "react";
import Link from "next/link";

const ImageDescription = ({ text, sources }) => {
  return (
    <p style={{ textAlign: "center", marginTop: "0", fontSize: "14px" }}>
      <em>{text} </em>
      {sources.map((source) => (
        <>
          <Link key={source.name} href={source.url}>
            {source.name}
          </Link>{" "}
        </>
      ))}
    </p>
  );
};

export default ImageDescription;
