import React, {Component} from "react";
import Book from "./Book";
import Nav from "./Nav";
import "../css/Shelf.css";
import books from "../assets/books.json";


class Shelf extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="div-board">
            <button className="btn btn-success add-button btn-lg btn-block">
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
      </div>
    );
  }
}
export default Shelf;
