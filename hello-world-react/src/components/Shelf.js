import React, { Component } from "react";
import Book from "./Book";
import Nav from "./Nav";
import "../css/Shelf.css";
import books from "../assets/books.json";
import ModalComponent from "./Modal";

class Shelf extends Component {
  constructor() {
    super();
    this.state = { modalShow: false };
  }
  toggleModal = () => {
    this.setState({
      modalShow: !this.state.modalShow
    })
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="div-board">
            <button
              className="btn btn-success add-button btn-lg btn-block"
              onClick={this.toggleModal}
            >
              Add Books
            </button>
            <br />
            <div className="row">
              {books.map(book => (
                <Book source={book} />
              ))}
            </div>
          </div>
          <br />
        </div>
        <ModalComponent show={this.state.modalShow} onHide={this.toggleModal} />
      </div>
    );
  }
}
export default Shelf;
