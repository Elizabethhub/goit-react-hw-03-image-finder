import React from "react";

const ImageGallery = ({ images, addLargeImg }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li className="ImageGalleryItem" key={id}>
          <img
            src={webformatURL}
            id={id}
            alt={tags}
            onClick={() => {
              addLargeImg(largeImageURL);
            }}
            className="image"
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
