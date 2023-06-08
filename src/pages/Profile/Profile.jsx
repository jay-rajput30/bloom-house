import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/AuthProvider";
import {
  getuserProfile,
  updateProfileAddress,
} from "../../backend/controllers/profile.controller";
import Loading from "../../utils/Loading/Loading";
import "./index.css";
import UpdateAddressInput from "./UpdateAddressInput/UpdateAddressInput";
import { toast } from "react-toastify";
import ProfileDetails from "./ProfileDetails";
import ProfileAddresses from "./ProfileAddresses";
import AddressInput from "../../components/AddressInput/AddressInput";

const Profile = () => {
  const { loggedInUser } = useContext(authContext);
  const [userDetails, setUserDetails] = useState();
  const [selectedAddress, setSelectedAddress] = useState("");
  const [profileToggle, setProfileToggle] = useState(false);
  const [showUpdateAddressForm, setShowUpdateAddressForm] = useState(false);
  const [showInputAddress, setShowInputAddress] = useState(false);
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
      <ProfileDetails userDetails={userDetails} />
      <ProfileAddresses
        userDetails={userDetails}
        deleteAddress={deleteAddress}
        editAddress={editAddress}
        setShowInputAddress={setShowInputAddress}
      />
      {showUpdateAddressForm && (
        <UpdateAddressInput
          currentAddress={selectedAddress}
          setShowUpdateAddressForm={setShowUpdateAddressForm}
          userAddresses={userDetails?.address}
          setProfileToggle={setProfileToggle}
        />
      )}
      {showInputAddress && (
        <AddressInput
          setShowAddressInput={setShowInputAddress}
          setcheckoutToggle={setProfileToggle}
        />
      )}
    </div>
  );
};

export default Profile;
