import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import { authContext } from "../../context/AuthProvider";
import { getAddress } from "../../backend/controllers/profile.controller";
import AddressList from "./AddressList";
import CartOrderSummary from "../Cart/CartOrderSummary";
import Loading from "../../utils/Loading/Loading";
import CheckoutOrderSummary from "./CheckoutOrderSummary";
import { toast } from "react-toastify";
const Checkout = () => {
  const { loggedInUser } = useContext(authContext);
  const [addresses, setAddresses] = useState([]);
  const [checkoutToggle, setcheckoutToggle] = useState(false);
  const [selectedAdress, setSelectedAddress] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchAddress = async () => {
      try {
        setLoading(true);
        const { data, success } = await getAddress(loggedInUser.user_id);
        if (success) {
          setLoading(false);
          setAddresses(data);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchAddress();
  }, [checkoutToggle]);

  const paymentClickHandler = () => {
    toast.success("order placed successfully", {
      position: toast.BOTTOM_CENTER,
      theme: "colored",
      autoClose: 1000,
    });
  };
  if (loading) return <Loading />;
  return (
    <div className="checkout-page-wrapper">
      <AddressList
        addresses={addresses}
        setcheckoutToggle={setcheckoutToggle}
        selectedAdress={selectedAdress}
        setSelectedAddress={setSelectedAddress}
      />
      <div>
        <CheckoutOrderSummary selectedAdress={selectedAdress} />

        <button
          disabled={selectedAdress === false}
          className={
            selectedAdress.length !== 0 ? "enabled-button" : "disabled-button"
          }
          onClick={paymentClickHandler}
        >
          proceed to payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;
