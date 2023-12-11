import React, { useContext, useState } from "react";
import "./index.css";
import { toast } from "react-toastify";
import UpdateAddressFormItem from "./UpdateAddressFormItem";
import { authContext } from "../../../context/AuthProvider";
import { updateProfileAddress } from "../../../backend/controllers/profile.controller";

const UpdateAddressInput = ({
  currentAddress,
  setShowUpdateAddressForm,
  userAddresses,
  setProfileToggle,
}) => {
  const { loggedInUser } = useContext(authContext);
  const [addressInput, setAddressInput] = useState({
    id: currentAddress.id,
    flatNo: currentAddress?.flatNo,
    area: currentAddress?.area,
    city: currentAddress?.city,
    state: currentAddress?.state,
    pincode: currentAddress?.pincode,
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddressInput({ ...addressInput, [name]: value });
  };

  const formBtnClickHandler = async () => {
    const updatedAddresses = userAddresses.map((item) =>
      item.id === addressInput.id ? { ...addressInput } : item
    );
    const { success } = await updateProfileAddress(
      updatedAddresses,
      loggedInUser?.user_id
    );
    if (success) {
      toast.success("user address updated", {
        position: toast.BOTTOM_CENTER,
        theme: "colored",
        autoClose: 1000,
      });
      setShowUpdateAddressForm(false);
      setProfileToggle((prev) => !prev);
      setAddressInput({
        flatNo: "",
        area: "",
        city: "",
        state: "",
        pincode: 0,
      });
    }
  };

  return (
    <div className="address-input-wrapper">
      <form className="address-input-form" onSubmit={(e) => e.preventDefault()}>
        <UpdateAddressFormItem
          inputChangeHandler={inputChangeHandler}
          type="text"
          item={addressInput.flatNo}
          name="flatNo"
          text="FlatNo/Building"
        />
        <UpdateAddressFormItem
          inputChangeHandler={inputChangeHandler}
          type="text"
          item={addressInput.area}
          name="area"
          text="Area"
        />
        <UpdateAddressFormItem
          inputChangeHandler={inputChangeHandler}
          type="text"
          item={addressInput.city}
          name="city"
          text="City"
        />
        <UpdateAddressFormItem
          inputChangeHandler={inputChangeHandler}
          type="text"
          item={addressInput.state}
          name="state"
          text="State"
        />
        <UpdateAddressFormItem
          inputChangeHandler={inputChangeHandler}
          type="number"
          item={addressInput.pincode}
          name="pincode"
          text="Pincode"
        />
        <div className="signup-form-item-buttons">
          <button onClick={formBtnClickHandler}>update</button>
          <button onClick={() => setShowUpdateAddressForm(false)}>
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAddressInput;
