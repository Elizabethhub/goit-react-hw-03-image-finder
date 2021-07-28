import React from "react";
import { ImageGalleryItemStyled } from "./ImageGalleryItemStyled";

const ImageGalleryItem = ({ id, tags, webformatURL, largeImageURL, addLargeImg }) => {
  return (
    <ImageGalleryItemStyled className="ImageGalleryItem" key={id}>
      <img
        src={webformatURL}
        id={id}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => addLargeImg(largeImageURL)}
      />
    </ImageGalleryItemStyled>
  );
};

export default ImageGalleryItem;
