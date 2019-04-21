import React from "react";
import "../css/Book.css";
import "../images/things-fall-apart.jpg";

const Book = ({ source }) => (
  <div className="col-sm-3">
    <div className="card card-view">
      <img
        className="card-img-top"
        src={require(`../${source.imageLink}`)}
        alt="Book Cover"
      />
      <div className="card-body">
        <h5 className="card-title">{source.title}</h5>
        <p className="card-text">By: {source.author}</p>
        <p>Pages: {source.pages}</p>
        <p>Year: {source.year}</p>
        <p>Language: {source.language}</p>
        <p>
          Link: <a href={source.link}>{source.title}</a>
        </p>
      </div>
    </div>
  </div>
);

export default Book;
