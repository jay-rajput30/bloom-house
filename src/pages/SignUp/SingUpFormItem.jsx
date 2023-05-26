import React from "react";

const SingUpFormItem = ({ inputChangeHandler, type, item }) => {
  return (
    <div className="signup-form-item">
      <label htmlFor={type}>{type}: </label>
      <input
        type={type}
        id={type}
        name={type}
        value={item}
        onChange={inputChangeHandler}
      />
    </div>
  );
};

export default SingUpFormItem;
