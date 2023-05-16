export const getCategories = (data) => {
  return data.reduce(
    (acc, cur) => (acc.includes(cur.category) ? acc : [...acc, cur.category]),
    ["All"]
  );
};
