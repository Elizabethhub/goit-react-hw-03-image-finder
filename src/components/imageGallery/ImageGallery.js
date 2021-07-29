import React from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import { ImageGalleryStyled } from "./imageGalleryStyled";

const ImageGallery = ({ images, addLargeImg }) => {
  return (
    <ImageGalleryStyled>
      {images.map((image) => (
        <ImageGalleryItem key={image.id} {...image} addLargeImg={addLargeImg} />
      ))}
    </ImageGalleryStyled>
  );
};

export default ImageGallery;
