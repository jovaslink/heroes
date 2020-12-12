import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [stateValues, setValues] = useState(initialState);

  const handlerInputForm = ({ target }) => {
    setValues({ ...stateValues, [target.name]: target.value });
  };
  const reset = () => {
    setValues(initialState);
  };

  return [handlerInputForm, stateValues, reset];
};
