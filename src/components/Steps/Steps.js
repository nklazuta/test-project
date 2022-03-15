import { useState, useEffect } from "react";
import coins from "../../images/coins.png";
import piles from "../../images/vertical-coins.png";
import "./Steps.css";

function Steps() {
  const [windowWidth, setWindowWidth] = useState(document.body.clientWidth);
  const [linkText, setLinkText] = useState("");

  useEffect(() => {
    checkWindowWidth();
  }, []);

  //определить ширину экрана устройства пользователя и установить текст ссылки
  const checkWindowWidth = () => {
    setWindowWidth(document.body.clientWidth);

    if (windowWidth > 1000) {
      setLinkText("How to recieve payments");
    } else {
      setLinkText("How to stake");
    }
  };

  //отслеживать изменение ширины экрана
  window.addEventListener("resize", function () {
    checkWindowWidth();
  });

  return (
    <section className="steps">
      <h2 className="steps__title">Join other investors in 3 easy steps</h2>
      <ul className="steps__cards">
        <li className="steps__card">
          <div className="steps__card-box">
            <p className="steps__card-number">1</p>
            <p className="steps__card-title">Create wallet</p>
            <p className="steps__card-text">
              Wallet allows you to securily connect and store tokens
            </p>
            <img className="steps__card-photo" src={coins} alt="Blue coins" />
          </div>
          <p className="steps__card-link">Create wallet</p>
        </li>

        <li className="steps__card">
          <div className="steps__card-box">
            <p className="steps__card-number">2</p>
            <p className="steps__card-title">Get tokens</p>
            <p className="steps__card-text steps__card-text_type_narrow">
              Buy tokens on and recieve them on your wallet
            </p>
            <img className="steps__card-photo" src={coins} alt="Blue coins" />
          </div>
          <p className="steps__card-link">Buy tokens</p>
        </li>

        <li className="steps__card">
          <div className="steps__card-box">
            <p className="steps__card-number">3</p>
            <p className="steps__card-title">Hold tokens</p>
            <p className="steps__card-text">
              By holding tokens you become eligeble to recive monthly payments
            </p>
            <img
              className="steps__card-photo steps__card-photo_type_piles"
              src={piles}
              alt="Blue coins"
            />
          </div>
          <p className="steps__card-link">{linkText}</p>
        </li>
      </ul>
    </section>
  );
}

export default Steps;
