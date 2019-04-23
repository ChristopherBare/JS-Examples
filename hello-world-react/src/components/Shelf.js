import React, {Component} from "react";
import Book from "./Book";
import Nav from "./Nav";
import "../css/Shelf.css";
import books from "../assets/books.json";
import ModalComponent from "./Modal";



class Shelf extends Component {
  constructor() {
    super();
    this.state = {modalShow: false};
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="div-board">
            <button className="btn btn-success add-button btn-lg btn-block"
            onClick={() => this.setState({ modalShow: true})}>
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
        <ModalComponent 
        show={this.state.modalShow}
        onHide={this.modalClose}
        />
      </div>
    );
  }
}
export default Shelf;
