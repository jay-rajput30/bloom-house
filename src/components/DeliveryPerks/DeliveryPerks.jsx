import React from "react";
import { CheckSquare, MessageSquare, Truck } from "react-feather";
import "./index.css";
const DeliveryPerks = () => {
  return (
    <div className="delivery-perks-wrapper">
      <div className="perk-item">
        <Truck size="24" color="hsl(177, 100%, 14%)" strokeWidth="3" />
        <p> Free Shipping above $10 </p>
      </div>
      <div className="perk-item">
        <CheckSquare size="24" color="hsl(177, 100%, 14%)" strokeWidth="3" />
        <p>Guaranteed Replacements if Damaged</p>
      </div>
      <div className="perk-item">
        <MessageSquare size="24" color="hsl(177, 100%, 14%)" strokeWidth="3" />
        <p>Expert Guidance</p>
      </div>
    </div>
  );
};

export default DeliveryPerks;
