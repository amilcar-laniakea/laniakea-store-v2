export const cartPrice = (i) => {
  return i.reduce((o, e) => o + e.price * e.quantity, 0);
};
