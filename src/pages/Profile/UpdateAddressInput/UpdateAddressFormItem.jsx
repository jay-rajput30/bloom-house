import React from "react";

const UpdateAddressFormItem = ({
  inputChangeHandler,
  type,
  item,
  name,
  text,
}) => {
  return (
    <div className="address-input-form-item">
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

export default UpdateAddressFormItem;
