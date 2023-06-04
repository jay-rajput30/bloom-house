export const getAddress = (address) => {
  return Object.values(address).splice(1).join(",  ");
};
