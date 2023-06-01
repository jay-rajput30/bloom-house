import React from "react";
import "./index.css";
import { getAddress } from "./checkout.helper";
const AddressList = ({ addresses }) => {
  return (
    <div className="addresslist-wrapper">
      <p>select delivery address: </p>
      <ul>
        {addresses?.map((addressItem) => {
          return (
            <li key={addressItem.id} className="addresslist-item">
              {getAddress(addressItem)}
            </li>
          );
        })}
      </ul>
      <button>add new address</button>
    </div>
  );
};

export default AddressList;
