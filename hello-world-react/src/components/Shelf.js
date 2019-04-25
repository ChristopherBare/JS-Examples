import React, { Component } from "react";
import Book from "./Book";
import Nav from "./Nav";
import "../css/Shelf.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import _ from "lodash";
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase";



const config = {
  apiKey: "AIzaSyBWFHBFeh3gam07ktK5y7fw_K0YI7i_lTU",
  authDomain: "libraryapp-46269.firebaseapp.com",
  databaseURL: "https://libraryapp-46269.firebaseio.com",
  projectId: "libraryapp-46269",
  storageBucket: "libraryapp-46269.appspot.com",
  messagingSenderId: "201807908850"
};
firebase.initializeApp(config);

const database = firebase.database();

class Shelf extends Component {
  constructor() {
    super();

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      modalShow: false,
      books: []
    };
  }

  componentDidMount() {
    const bookRef = database.ref("Book/");
    bookRef.on("value", snapshot => {
      this.getData(snapshot.val());
    });
  }

  getData(values) {
    let booksVal = values;
    let bookList = _(booksVal)
      .keys()
      .map(bookKey => {
        let cloned = _.clone(booksVal[bookKey]);
        cloned.key = bookKey;
        return cloned;
      })
      .value();

    this.setState({
      books: bookList
    });
  }
  toggleModal = () => {
    this.setState({
      modalShow: !this.state.modalShow
    });
  };
  handleClose = () => {
    this.setState({ modalShow: false });
  };

  handleShow = () => {
    this.setState({ modalShow: true });
  };
  writeData = e => {
    e.preventDefault();
    let fields = e.target.elements;
    let book = {};
    for (let x of [...fields]) {
      if (x.name) book[x.name] = x.value;
    }
    database.ref("Book/").push(book, function(error) {
      if (error) {
        alert("That didn't work, please try again.");
      } else {
        console.log("Successful submit!");
      }
    });
  };

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
              {this.state.books.map(book => (
                <Book source={book} key={book.key} />
              ))}
            </div>
          </div>
          <br />
        </div>
        <Modal show={this.state.modalShow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Book</Modal.Title>
          </Modal.Header>
          <form
            id="modalForm"
            onSubmit={this.writeData.bind(this)}
            className="form-inline my-2 my-lg-0"
          >
            <Modal.Body>
              Please Add the information below
              <input
                className="form-control mr-sm-2"
                placeholder="Link to Image"
                aria-label="link"
                id="imageLink"
                name="imageLink"
                required
              />
              <input
                className="form-control mr-sm-2"
                placeholder="Title"
                aria-label="Title"
                id="title"
                name="title"
                required
              />
              <input
                className="form-control mr-sm-2"
                placeholder="Author"
                aria-label="Author"
                id="author"
                name="author"
                required
              />
              <input
                className="form-control mr-sm-2"
                placeholder="Pages"
                aria-label="Pages"
                id="pages"
                name="pages"
                required
              />
              <input
                className="form-control mr-sm-2"
                placeholder="Year"
                aria-label="Year"
                id="year"
                name="year"
                required
              />
              <input
                className="form-control mr-sm-2"
                placeholder="Language"
                aria-label="Language"
                id="language"
                name="language"
                required
              />
              <input
                className="form-control mr-sm-2"
                placeholder="Wikipedia Link"
                aria-label="Wikipedia Link"
                id="link"
                name="link"
                required
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" form="modalForm">
                Save
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Shelf;
