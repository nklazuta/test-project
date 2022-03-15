import React from "react";
import "./Card.css";

function Card({ number, title, text, image, link }) {
  return (
    <li className="card">
      <p className="card__number">{number}</p>
      <p className="card__title">{title}</p>
      <p className="card__text">{text}</p>
      <img className="card__photo" src={image} alt="Blue coins" />
      <p className="card__link">{link}</p>
    </li>
  );
}

export default Card;
