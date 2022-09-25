import React from "react";

const GridUI = ({ data }) => {
  const shareImage = (imageURL) => {
    const urlEncoded = encodeURIComponent(imageURL);
    window.open("https://api.whatsapp.com/send?text=" + urlEncoded, "_blank");
  };

  const srcCombiner = (imagesArr) => {
    let combinedSrc = "";
    for (let obj in imagesArr) {
      if (imagesArr[obj]["url"]) combinedSrc += imagesArr[obj]["url"] + ",";
    }
    return combinedSrc;
  };

  return (
    <div className="gridUI">
      {data.map((datum, idx) => (
        <div id={datum.id} key={datum.id}>
          <img
            id={`image_${idx}`}
            srcSet={srcCombiner(datum.images)}
            alt={datum.slug}
            loading="lazy"
          />
          <button onClick={() => shareImage(datum.images.original.url)}>
            <i
              className="fa fa-whatsapp"
              style={{ color: "white", background: "transparent" }}
            ></i>{" "}
            Share
          </button>
        </div>
      ))}
    </div>
  );
};

export default GridUI;
