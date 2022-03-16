import { useEffect } from "react";
import { useFormWithValidation } from "../../hooks/useForm";
import "./Popup.css";

function Popup({ isOpen, onClose, onSubmit }) {
  const { values, errors, isFormValid, isInputValid, handleChange, resetForm } =
    useFormWithValidation();

  const popupClass = isOpen ? "popup popup_opened" : "popup";
  const inputClass = !isInputValid
    ? "popup__input popup__input_type_error"
    : "popup__input";
  const submitButtonClass = !isFormValid
    ? "popup__submit-button popup__submit-button_disabled"
    : "popup__submit-button";

  useEffect(() => {
    resetForm({});
  }, [isOpen, resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({
      phone: values.phone,
    });
    resetForm();
  }

  return (
    <div className={popupClass}>
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
