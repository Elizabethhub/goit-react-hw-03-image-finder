import React from "react";

const ImageGalleryItem = ({ id, tags, webformatURL, largeImageURL, addLargeImg }) => {
  return (
    <li className="ImageGalleryItem" key={id}>
      <img
        src={webformatURL}
        id={id}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => addLargeImg(largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;
