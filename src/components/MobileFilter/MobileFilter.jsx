import React from "react";
import "./index.css";
import { X } from "react-feather";

const MobileFilter = ({ setShowFilter }) => {
  return (
    <div className="mobile-filter-wrapper">
      <X className="close-filter" onClick={() => setShowFilter(false)} />
    </div>
  );
};

export default MobileFilter;
