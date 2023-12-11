export const getCategories = (data) => {
  return data.reduce(
    (acc, cur) => (acc.includes(cur.category) ? acc : [...acc, cur.category]),
    ["All"]
  );
};

export const calculateSubTotal = (cart) => {
  return cart?.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
};

export const calculateTotal = (subtotal, discount, shippingCost) =>
  subtotal - discount + shippingCost;

export const setLocalStorage = (data) =>
  localStorage.setItem("user", JSON.stringify(data));
