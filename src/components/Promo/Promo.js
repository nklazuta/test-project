import React from "react";
import logo from "../../images/boom-telecom-icon.svg";
import arrow from "../../images/arrow-icon.svg";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__text-block">
        <div className="promo__logo-block">
          <img className="promo__logo" src={logo} alt="BoomTelecom logo" />
          <p className="promo__logo-text">Powerd by BoomTelecom</p>
        </div>
        <h3 className="promo__text">
          We are proud to make such a project in our company
        </h3>
        <p className="promo__link">
          learn more about BoomTelecom
          <img className="promo__arrow" src={arrow} alt="Arrow icon" />
        </p>
      </div>
    </section>
  );
}

export default Promo;
