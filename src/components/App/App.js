import { useState } from "react";
import Heading from "../Heading/Heading";
import Steps from "../Steps/Steps";
import Promo from "../Promo/Promo";
import Popup from "../Popup/Popup";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopupButtonClick = () => {
    setIsOpen(true);
    console.log('open')
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleSubmit = ({ phone }) => {
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
