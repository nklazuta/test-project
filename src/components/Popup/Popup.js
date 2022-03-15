import { useEffect } from "react";
import { useFormWithValidation } from "../../hooks/useForm";
import "./Popup.css";

function Popup({ isOpen, onClose, onSubmit }) {
  const { values, errors, isFormValid, isInputValid, handleChange, resetForm } =
    useFormWithValidation();

  useEffect(() => {
    resetForm({});
  }, [resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({
      phone: values.phone,
    });
  }

  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <form className="popup__form" onSubmit={handleSubmit}>
          <h2 className="popup__title">Buy sim</h2>
          <label className="popup__label" htmlFor="phone">
            Enter your number
            <span className="popup__error" id="phone-error">
              {errors.phone || ""}
            </span>
            <input
              className={`popup__input ${
                !isInputValid && "popup__input_type_error"
              }`}
              id="phone"
              name="phone"
              type="tel"
              placeholder="+ 7 (999) 000-00-00"
              autoComplete="phone"
              value={values.phone || ""}
              onChange={handleChange}
              required
            />
          </label>
          <button
            className={`popup__submit-button ${
              !isFormValid && "popup__submit-button_disabled"
            }`}
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
