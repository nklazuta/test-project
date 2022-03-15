import React from "react";
import coins from "../../images/coins.jpg";
import piles from "../../images/vertical-coins.jpg";
import "./Steps.css";

function Steps() {
  return (
    <section className="steps">
      <h2 className="steps__title">Join other investors in 3 easy steps</h2>
      <ul className="steps__cards">
        <li className="steps__card">
          <p className="steps__card-number">1</p>
          <p className="steps__card-title">Create wallet</p>
          <p className="steps__card-text">
            Wallet allows you to securily connect and store tokens
          </p>
          <img className="steps__card-photo" src={coins} alt="Blue coins" />
          <p className="steps__card-link">Create wallet</p>
        </li>
        <li className="steps__card">
          <p className="steps__card-number">2</p>
          <p className="steps__card-title">Get tokens</p>
          <p className="steps__card-text">
            Buy tokens on and recieve them on your wallet
          </p>
          <img className="steps__card-photo" src={coins} alt="Blue coins" />
          <p className="steps__card-link">Buy tokens</p>
        </li>
        <li className="steps__card">
          <p className="steps__card-number">3</p>
          <p className="steps__card-title">Hold tokens</p>
          <p className="steps__card-text">
            By holding tokens you become eligeble to recive monthly payments
          </p>
          <img className="steps__card-photo" src={piles} alt="Blue coins" />
          <p className="steps__card-link">How to recieve payments</p>
        </li>
      </ul>
    </section>
  );
}

export default Steps;
