import React from "react";
const AssetVideoContainer = ({ content }) => {
  return (
    <iframe
        src={content}
        title="Embedded YouTube Video"
        allow="autoplay; encrypted-media"
        className="w-full aspect-video"
        allowFullScreen
      ></iframe>
  );
};

export default AssetVideoContainer;
