import React from "react";
import Card from "../../Components/Card";
export default function CardResults({ results }) {
  return (
    <div className="results">
      {results.map((gifobj) => {
        const { id, images, title } = gifobj;
        const { url } = images.original;
        return <Card key={id} url={url} altText={title} />;
      })}
    </div>
  );
}
