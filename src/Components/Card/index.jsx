import React from "react";
export default function Card(props) {
  const { url, altText } = props;
  return (
    <a href={url} className="card">
      <img className="img-card" alt={altText} src={url} />
    </a>
  );
}
