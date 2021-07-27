import React, { Component } from "react";
import { getImages } from "../../services/Api";
import ImageGallery from "../imageGallery/ImageGallery";

class Main extends Component {
  state = {
    images: [],
    page: 1,
    query: "cat",
  };

  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevState.query !== this.state.query) {
  //       this.getImages();
  //     }
  //   }

  addLargeImg = (largeImgUrl) => {
    this.setState({ largeImage: largeImgUrl });
  };
  //  const find = () => {
  //     getImages(state.query).then((data) => {
  //       state.images = [...data];
  //       state.page = 2;
  //     });
  //   };

  //   const loadMore = () => {
  //     getImages(state.query, state.page).then((data) => {
  //       state.images = [...state.images, ...data];
  //       state.page += 1;
  //     });
  //   };

  render() {
    return (
      <>
        <ImageGallery images={this.state.images} addLargeImg={this.addLargeImg} />
      </>
    );
  }
}

export default Main;
