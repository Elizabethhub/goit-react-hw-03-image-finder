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

  fetchImages = (query, page) => {
    this.setState({ isLoading: true });
    getImages(query, page).then((images) => {
      this.setState((prev) => ({ images: !page ? images : [...prev.images, ...images], isLoading: false }));
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.fetchImages(this.state.query);
    }
    if (this.state.page !== prevState.page) {
      this.fetchImages(this.state.query, this.state.page);
    }
    if (this.state.images !== prevState.images) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }
  loadMore = async () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };
  findImage = async (query) => {
    this.setState({ query, page: 1 });
  };

  addLargeImg = (largeImgUrl) => {
    this.setState({ largeImage: largeImgUrl, showModal: true });
  };

  // loadMore = () => {
  // this.setState({ isLoading: true });
  //   console.log(`load`, "load");
  //   getImages(this.state.query, this.state.page)
  //     .then((images) => {
  //       this.setState((prev) => ({ images: [...prev.images, ...images.hits], page: prev.page + 1 }));
  //     })
  //     .catch((error) => console.log(`error`, error))
  //     .finally(() => {
  //       window.scrollTo({
  //         top: document.documentElement.scrollHeight,
  //         behavior: "smooth",
  //       });
  //       this.setState({ isLoading: false });
  //     });
  // };

  toggleModal = (url) => {
    if (!url) {
      url = null;
    }
    this.setState({ showModal: !this.state.showModal, largeImage: "" });
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
