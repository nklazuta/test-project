import { useState, useCallback } from "react";

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isInputValid, setIsInputValid] = useState(true);

  const handleChange = (evt) => {
    const input = evt.target;
    const value = input.value;
    const name = input.name;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsFormValid(input.closest("form").checkValidity());
    setIsInputValid(input.checkValidity());
  };

  const resetForm = useCallback(
    (
      newValues = {},
      newErrors = {},
      newIsFormValid = false,
      newIsInputValid = true
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsFormValid);
      setIsInputValid(newIsInputValid);
    },
    [setValues, setErrors, setIsFormValid]
  );

  return { values, errors, isFormValid, isInputValid, handleChange, resetForm };
}
