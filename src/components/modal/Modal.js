import React, { Component } from "react";
import { ModalStyled } from "./ModalStyled";
// import { createPortal } from "react-dom";

// const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  handelKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handelKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handelKeyDown);
  }

  handelBackdrop = (e) => {
    if (e.currentTarget !== e.target) return false;
    this.props.onClose();
  };

  render() {
    return (
      <ModalStyled className="Overlay" onClick={this.handelBackdrop}>
        <div className="Modal">
          <img src={this.props.url} alt="Large img" />
        </div>
      </ModalStyled>
    );
  }
}
