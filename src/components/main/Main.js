import React, { Component } from "react";
import ImageGallery from "../imageGallery/ImageGallery";
import Searchbar from "../searchbar/Searchbar";
import Button from "../button/Button";
import AppLoader from "../loader/Loader";
import Modal from "../modal/Modal";
import { getImages } from "../../services/Api";
import { MainStyled } from "./MainStyled";

class Main extends Component {
  state = {
    images: [],
    page: 1,
    query: "sea",
    largeImage: "",
    isLoading: false,
    showModal: false,
  };

  // componentDidUpdate(prevProps, prevState) {
  //     if (prevState.images !== this.state.images) {

  //     }
  // }

  findImage = async (query) => {
    const images = await getImages(query);

    this.setState({ query: query, images: images.hits, page: 2 });
  };

  addLargeImg = (largeImgUrl) => {
    console.log(`largeImgUrl`, largeImgUrl);
    this.setState({ largeImage: largeImgUrl, showModal: true });
  };

  loadMore = () => {
    this.setState({ isLoading: true });
    console.log(`load`, "load");
    getImages(this.state.query, this.state.page)
      .then((images) => {
        this.setState((prev) => ({ images: [...prev.images, ...images.hits], page: prev.page + 1 }));
      })
      .catch((error) => console.log(`error`, error))
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
        this.setState({ isLoading: false });
      });
  };

  toggleModal = (url) => {
    if (!url) {
      url = null;
    }
    this.setState({ showModal: !this.state.showModal, largeImageURL: url });
  };

  render() {
    const { showModal, images, isLoading, largeImage } = this.state;
    return (
      <MainStyled className="Main">
        <Searchbar onSubmit={this.findImage} />
        {showModal && <Modal onClose={this.toggleModal} url={largeImage} />}
        <ImageGallery images={this.state.images} addLargeImg={this.addLargeImg} />
        {!!images.length && !isLoading && <Button loadMore={this.loadMore} />}
        {isLoading && <AppLoader />}
      </MainStyled>
    );
  }
}

export default Main;
