export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOAD_CART":
      return { ...state, cart: [...payload] };
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    }

    case "REMOVE_FROM_CART": {
      const filteredCartProducts = state.cart?.filter(
        (item) => item.id !== payload.id
      );
      return { ...state, cart: filteredCartProducts };
    }
    case "UPDATE_CART": {
      const updatedCart = state.cart?.map((cartItem) =>
        cartItem.id === payload.id ? payload : cartItem
      );
      return { ...state, cart: updatedCart };
    }
    default:
      return {
        ...state,
        cart: [...state.cart, payload],
      };
  }
};
