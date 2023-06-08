export const getAddress = (address) => {
  console.log(address);
  return `${address?.flatNo},${address?.area},${address?.city}, ${address?.state}: ${address?.pincode}`;
};
