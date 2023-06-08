import React from "react";
import "./index.css";
import { Edit2, Trash2 } from "react-feather";
const ProfileAddresses = ({
  userDetails,
  deleteAddress,
  editAddress,
  setShowInputAddress,
}) => {
  return (
    <section className="profile-addresses">
      <h2>Saved Address</h2>
      {userDetails?.address.map((addressitem) => {
        return (
          <article className="profile-address-item" key={addressitem?.id}>
            <p>{Object.values(addressitem).splice(1).join(", ")}</p>
            <div>
              <Edit2
                size={14}
                onClick={() => editAddress(addressitem)}
                troke={"gray"}
                fill={"gray"}
              />
              <Trash2
                size={14}
                onClick={() => deleteAddress(addressitem)}
                stroke={"red"}
              />
            </div>
          </article>
        );
      })}
      <button onClick={() => setShowInputAddress(true)}>add address</button>
    </section>
  );
};

export default ProfileAddresses;
