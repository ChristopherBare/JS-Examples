import React from "react";
import Book from "./Book";
import Nav from "./Nav";
import "../css/Shelf.css";
import books from "../assets/books.json";

const bookList = books;
console.log(bookList);
const Shelf = () => (
  <div>
    <Nav />
    <div className="container">
      <div className="div-board">
        <div className="row">
          {bookList.map(book => (
            <Book source={book} />
          ))}
        </div>
      </div>
      <br />
      <button className="btn btn-success add-button btn-lg btn-block">
        Add
      </button>
    </div>
  </div>
);

export default Shelf;
