import React from "react";
import "./Heading.css";

function Heading() {
  return (
    <section className="heading">
      <h1 className="heading__title">This is your test task good luck</h1>
      <p className="heading__text">
        BoomTelecom crypto investments made simple
      </p>
      <div className="heading__buttons">
        <button className="heading__popup-button" type="button">
          Sign Up
        </button>
        <a className="heading__link" href="#">
          some link
        </a>
      </div>
    </section>
  );
}

export default Heading;
