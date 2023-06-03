import React, { useState } from "react";
import "./index.css";
import { getAddress } from "./checkout.helper";
import AddressInput from "../../components/AddressInput/AddressInput";
const AddressList = ({ addresses, setcheckoutToggle }) => {
  const [selectedAdress, setSelectedAddress] = useState("");
  const [showAddressInput, setShowAddressInput] = useState(false);

  return (
    <fieldset className="addresslist-wrapper">
      <legend>delivery address</legend>

      <form onSubmit={(e) => e.preventDefault()}>
        {addresses?.map((addressItem) => {
          return (
            <div className="addresslist-item" key={addressItem.id}>
              <input
                type="radio"
                value={getAddress(addressItem)}
                id={addressItem.id}
                checked={selectedAdress === getAddress(addressItem)}
                onChange={() => setSelectedAddress(getAddress(addressItem))}
                name="address-item-group"
              />
              <label htmlFor={addressItem.id}> {getAddress(addressItem)}</label>
            </div>
          );
        })}
      </form>
      <button onClick={() => setShowAddressInput(true)}>add new address</button>
      {showAddressInput && (
        <AddressInput
          setShowAddressInput={setShowAddressInput}
          setcheckoutToggle={setcheckoutToggle}
        />
      )}
    </fieldset>
  );
};

export default AddressList;
