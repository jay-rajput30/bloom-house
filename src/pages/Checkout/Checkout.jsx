import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import { authContext } from "../../context/AuthProvider";
import { getAddress } from "../../backend/controllers/profile.controller";
import AddressList from "./AddressList";
import CartOrderSummary from "../Cart/CartOrderSummary";
import Loading from "../../utils/Loading/Loading";
import CheckoutOrderSummary from "./CheckoutOrderSummary";
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
        {selectedAdress && <button>proceed to payment</button>}
      </div>
      {/* <CheckoutOrderSummary selectedAdress={selectedAdress} />
      {selectedAdress && <button>proceed to payment</button>} */}
    </div>
  );
};

export default Checkout;
