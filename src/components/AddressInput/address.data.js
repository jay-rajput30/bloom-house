let addressData = [
  {
    flatNo: "1A",
    area: "ABC Colony",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400001",
  },
  {
    flatNo: "2B",
    area: "XYZ Society",
    city: "Delhi",
    state: "Delhi",
    pincode: "110001",
  },
  {
    flatNo: "3C",
    area: "PQR Enclave",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560001",
  },
  {
    flatNo: "4D",
    area: "LMN Heights",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600001",
  },
  {
    flatNo: "5E",
    area: "EFG Gardens",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700001",
  },
];

export const getRandomAddress = () => {
  return addressData[Math.floor(Math.random() * 5) + 1];
};
