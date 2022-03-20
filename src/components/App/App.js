import { useState } from "react";
import Heading from "../Heading/Heading";
import Steps from "../Steps/Steps";
import Promo from "../Promo/Promo";
import Popup from "../Popup/Popup";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  //Обработчик клика по кнопке, открывающей попап
  const handleOpenPopupButtonClick = () => {
    setIsOpen(true);
  };

  //Закрыть попап
  const closePopup = () => {
    setIsOpen(false);
  };

  //Обработчик сабмита формы
  const handleSubmit = ({ phone }) => {
    setIsOpen(false);
    console.log(phone);
  };

  return (
    <div className="App">
      <Heading onClick={handleOpenPopupButtonClick} />
      <Steps />
      <Promo />
      <Popup isOpen={isOpen} onClose={closePopup} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
