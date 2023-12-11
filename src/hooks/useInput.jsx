import React, { useState } from "react";

const useInput = (inputType, value) => {
  const [item, setItem] = useState(value);
  const changeHandler = (e) => {
    setItem(e.target.value);
  };
  return { [inputType]: item, [`${inputType}ChangeHander`]: changeHandler };
};

//TODO: fix this custom hook
export default useInput;
