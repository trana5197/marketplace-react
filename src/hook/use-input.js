import { useState } from "react";

const useInput = (validation) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validation(enteredValue);
  const valueIsInvalid = !valueIsValid && isTouched;

  const onChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    valueIsValid,
    valueIsInvalid,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInput;
