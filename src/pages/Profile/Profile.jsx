import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/AuthProvider";
import {
  getuserProfile,
  updateProfileAddress,
} from "../../backend/controllers/profile.controller";
import Loading from "../../utils/Loading/Loading";
import "./index.css";
import { Edit2, Trash2 } from "react-feather";
import UpdateAddressInput from "./UpdateAddressInput/UpdateAddressInput";
import { toast } from "react-toastify";
const Profile = () => {
  const { loggedInUser } = useContext(authContext);
  const [userDetails, setUserDetails] = useState();
  const [selectedAddress, setSelectedAddress] = useState("");
  const [profileToggle, setProfileToggle] = useState(false);
  const [showUpdateAddressForm, setShowUpdateAddressForm] = useState(false);
  const fetchUserDetails = async () => {
    try {
      const { data, success } = await getuserProfile(loggedInUser.user_id);
      if (success) {
        setUserDetails(data[0]);
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, [profileToggle]);

  const deleteAddress = async (address) => {
    const updateAddressDetails = userDetails?.address.filter(
      (item) => item.id !== address.id
    );
    const { data, success } = await updateProfileAddress(
      updateAddressDetails,
      loggedInUser.user_id
    );
    if (success) {
      setUserDetails(data);
      toast.error("address deleted", {
        position: toast.BOTTOM_CENTER,
        theme: "colored",
        autoClose: 1000,
      });
      setProfileToggle((prev) => !prev);
    }
  };
  if (!userDetails) {
    return <Loading />;
  }

  const editAddress = async (addressItem) => {
    setSelectedAddress(addressItem);
    setShowUpdateAddressForm(true);
  };
  return (
    <div className="profile-wrapper">
      <section className="profile-details">
        <h2>User Details</h2>
        <p>name: {userDetails?.firstName + " " + userDetails?.lastName}</p>
        <p>contact: {userDetails?.phoneNo}</p>
      </section>
      <section className="profile-addresses">
        <h2>Saved Address</h2>
        {userDetails?.address.map((addressitem) => {
          return (
            <article className="profile-address-item" key={addressitem?.id}>
              <p>{Object.values(addressitem).splice(1).join(", ")}</p>
              <div>
                <Edit2 size={14} onClick={() => editAddress(addressitem)} />
                <Trash2 size={14} onClick={() => deleteAddress(addressitem)} />
              </div>
            </article>
          );
        })}
      </section>
      {showUpdateAddressForm && (
        <UpdateAddressInput
          currentAddress={selectedAddress}
          setShowUpdateAddressForm={setShowUpdateAddressForm}
          userAddresses={userDetails?.address}
        />
      )}
    </div>
  );
};

export default Profile;
