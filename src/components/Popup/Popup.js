import { useEffect, useRef } from "react";
import { useFormWithValidation } from "../../hooks/useForm";
import "./Popup.css";

function Popup({ isOpen, onClose, onSubmit }) {
  const { values, errors, isFormValid, isInputValid, handleChange, resetForm } =
    useFormWithValidation();

  const popupClass = `popup ${isOpen ? "popup_opened" : ""}`;
  const inputClass = `popup__input ${
    !isInputValid ? "popup__input_type_error" : ""
  }`;
  const submitButtonClass = `popup__submit-button ${
    !isFormValid ? "popup__submit-button_disabled" : ""
  }`;

  //Закрыть попап при клике на оверлей
  const overlay = useRef();

  useEffect(() => {
    function handleOverlayClose(evt) {
      if (overlay.current === evt.target) onClose();
    }

    document.addEventListener("mousedown", handleOverlayClose);
    return () => {
      document.removeEventListener("mousedown", handleOverlayClose);
    };
  });

  //Закрыть попап клавишей ESC
  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  });

  //Очищать форму при каждом открытии попапа
  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  //Обработчик сабмита формы
  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({
      phone: values.phone,
    });
    resetForm();
  }

  return (
    <div className={popupClass} ref={overlay}>
      <div className="popup__container">
        <form className="popup__form" onSubmit={handleSubmit}>
          <h2 className="popup__title">Buy sim</h2>
          <label className="popup__label" htmlFor="phone">
            Enter your number
            <span className="popup__error" id="phone-error">
              {errors.phone || ""}
            </span>
            <input
              className={inputClass}
              id="phone"
              name="phone"
              type="tel"
              pattern="\+?\s?\d\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}"
              maxLength="18"
              placeholder="+7 (999) 000-00-00"
              autoComplete="phone"
              value={values.phone || ""}
              onChange={handleChange}
              required
            />
          </label>
          <button
            className={submitButtonClass}
            type="submit"
            disabled={!isFormValid}
          >
            Send
          </button>
        </form>
        <button
          className="popup__close-button"
          type="button"
          aria-label="Close"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default Popup;
