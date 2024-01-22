import React from 'react'

const ImageItem = ({imagesrc , imgStyle}) => {
  return (
    <img src={imagesrc} alt="" className={imgStyle} />
  )
}

export default ImageItem