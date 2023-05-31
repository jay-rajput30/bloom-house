import React, { useContext, useState } from "react";
import "./index.css";
import AddressInputFormItem from "./AddressInputFormItem";
import { addAddress } from "../../backend/controllers/profile.controller";
import { authContext } from "../../context/AuthProvider";
const AddressInput = () => {
  const { loggedInUser } = useContext(authContext);
  const [addressInput, setAddressInput] = useState({
    flatNo: "",
    area: "",
    city: "",
    state: "",
    pincode: 000000,
  });
  console.log({ addressInput });
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    // console.log({ name, value });
    setAddressInput({ ...addressInput, [name]: value });
  };

  const formBtnClickHandler = async () => {
    console.log({ userid: loggedInUser.user_id });
    const { data, success } = await addAddress(
      addressInput,
      "89ba83f7-2679-4059-a00f-c6af4065f6f1"
    );
    if (success) {
      console.log({ AdressData: data });
    }
  };

  return (
    <div className="address-input-wrapper">
      <form className="address-input-form" onSubmit={(e) => e.preventDefault()}>
        <AddressInputFormItem
          inputChangeHandler={inputChangeHandler}
          type="text"
          item={addressInput.flatNo}
          name="flatNo"
          text="FlatNo/Building"
        />
        <AddressInputFormItem
          inputChangeHandler={inputChangeHandler}
          type="text"
          item={addressInput.area}
          name="area"
          text="Area"
        />
        <AddressInputFormItem
          inputChangeHandler={inputChangeHandler}
          type="text"
          item={addressInput.city}
          name="city"
          text="City"
        />
        <AddressInputFormItem
          inputChangeHandler={inputChangeHandler}
          type="text"
          item={addressInput.state}
          name="state"
          text="State"
        />
        <AddressInputFormItem
          inputChangeHandler={inputChangeHandler}
          type="number"
          item={addressInput.pincode}
          name="pincode"
          text="Pincode"
        />
        <div className="signup-form-item-buttons">
          <button onClick={formBtnClickHandler}>add address</button>
        </div>
      </form>
    </div>
  );
};

export default AddressInput;
