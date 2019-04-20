import React, { Component } from "react";
import Book from "./Book";
import Nav from "./Nav"
import "../css/Shelf.css";
import books from "../assets/books.json";

class Shelf extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="div-board">
            <div className="row">
              <Book title="First Title" body="A random body 1" />
              <Book title="Worked" body="A random body 2" />
              <Book title="Whoopity Dee" body="A random body 3" />
            </div>
          </div>
          <br />
          <button className="btn btn-success add-button btn-lg btn-block">
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Shelf;

