import React from 'react'

const DisplayAssetArticle = ({content}) => {
  return (
    <iframe
        src={content}
        title="Embedded YouTube Video"
        allow="autoplay; encrypted-media"
        className="w-full h-[428px]"
        allowFullScreen
      ></iframe>
  )
}

export default DisplayAssetArticle