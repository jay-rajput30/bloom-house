import React, { useContext, useState } from "react";
import "./index.css";
import AddressInputFormItem from "./AddressInputFormItem";
import { addAddress } from "../../backend/controllers/profile.controller";
import { authContext } from "../../context/AuthProvider";
import { getRandomAddress } from "./address.data";
const AddressInput = ({ setShowAddressInput, setcheckoutToggle }) => {
  const { loggedInUser } = useContext(authContext);
  const [addressInput, setAddressInput] = useState({
    flatNo: "",
    area: "",
    city: "",
    state: "",
    pincode: 0,
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setAddressInput({ ...addressInput, [name]: value });
  };

  const addRandomAddress = () => {
    console.log(getRandomAddress());
    setAddressInput(getRandomAddress());
  };
  const formBtnClickHandler = async () => {
    console.log({ insideAddressInput: loggedInUser?.user_id });
    const { data, success } = await addAddress(
      addressInput,
      loggedInUser?.user_id
    );
    if (success) {
      setShowAddressInput(false);
      setAddressInput({
        flatNo: "",
        area: "",
        city: "",
        state: "",
        pincode: 0,
      });
      setcheckoutToggle((prev) => !prev);
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
          <button onClick={formBtnClickHandler}>save</button>
          <button onClick={() => setShowAddressInput(false)}>cancel</button>
          <button onClick={addRandomAddress}>random data</button>
        </div>
      </form>
    </div>
  );
};

export default AddressInput;
