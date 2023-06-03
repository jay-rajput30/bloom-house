import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import { authContext } from "../../context/AuthProvider";
import { getAddress } from "../../backend/controllers/profile.controller";
import AddressList from "./AddressList";
import CartOrderSummary from "../Cart/CartOrderSummary";
const Checkout = () => {
  const { loggedInUser } = useContext(authContext);
  const [addresses, setAddresses] = useState([]);
  const [checkoutToggle, setcheckoutToggle] = useState(false);
  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const { data, success } = await getAddress(loggedInUser.user_id);
        if (success) {
          setAddresses(data);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchAddress();
  }, [checkoutToggle]);
  console.log({ addresses });
  return (
    <div className="checkout-page-wrapper">
      <AddressList
        addresses={addresses}
        setcheckoutToggle={setcheckoutToggle}
      />
      <CartOrderSummary />
    </div>
  );
};
//TODO: make checkout page, check out page should show order summary and adress options to select. it should also show add address button
//TODO: on click of add address button should show add address inpout form as a pop up modal.
export default Checkout;
