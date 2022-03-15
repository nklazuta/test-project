import React from "react";
import Card from "../Card/Card";
import coins from "../../images/coins.jpg";
import piles from "../../images/vertical-coins.jpg";
import "./Steps.css";

function Steps() {
  return (
    <section className="steps">
      <h2 className="steps__title">Join other investors in 3 easy steps</h2>
      <ul className="steps__cards">
        <Card
          number="1"
          title="Create wallet"
          text="Wallet allows you to securily connect and store tokens"
          image={coins}
          link="Create wallet"
        />
        <Card
          number="2"
          title="Get tokens"
          text="Buy tokens on and recieve them on your wallet"
          image={coins}
          link="Buy tokens"
        />
        <Card
          number="3"
          title="Hold tokens"
          text="By holding tokens you become eligeble to recive monthly payments"
          image={piles}
          link="How to recieve payments"
        />
      </ul>
    </section>
  );
}

export default Steps;
