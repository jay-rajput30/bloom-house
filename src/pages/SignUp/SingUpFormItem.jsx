import React from "react";

const SingUpFormItem = ({ inputChangeHandler, type, item, name, text }) => {
  return (
    <div className="signup-form-item">
      <label htmlFor={item}>{text}: </label>
      <input
        type={type}
        id={item}
        name={name}
        value={item}
        onChange={inputChangeHandler}
      />
    </div>
  );
};

export default SingUpFormItem;
