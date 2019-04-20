import React, { Component } from "react";
import "../css/Book.css";

class Book extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="col-sm-12">
        <div className="card card-view">
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p>{this.props.body}</p>
            <button className="btn btn-success">Edit</button>
            <button className="btn btn-info">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
