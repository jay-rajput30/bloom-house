import { updateCart } from "../backend/controllers/cart.controller";

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case "UPDATE_PRODUCTS":
      return { ...state, products: payload };
    // case "LOAD_CART":
    //   return { ...state, cart: [...payload] };
    // case "ADD_TO_CART": {
    //   return {
    //     ...state,
    //     cart: [...state.cart, payload],
    //   };
    // }

    // case "REMOVE_FROM_CART": {
    //   const filteredCartProducts = state.cart?.filter(
    //     (item) => item.id !== payload.id
    //   );
    //   return { ...state, cart: filteredCartProducts };
    // }
    // case "UPDATE_CART": {
    //   const updatedCart = state.cart?.map((cartItem) =>
    //     cartItem.id === payload.id ? payload : cartItem
    //   );
    //   return { ...state, cart: updatedCart };
    // }
    case "LOAD_WISHLIST": {
      const updateWishlist = payload.map((item) =>
        state.products?.find((productItem) => productItem.id === item)
      );
      return { ...state, wishlist: updateWishlist };
    }
    case "ADD_TO_WISHLIST": {
      if (!state.wishlist.find((item) => item.id === payload.id)) {
        return { ...state, wishlist: [...state.wishlist, payload] };
      }
    }

    case "REMOVE_FROM_WISHLIST": {
      const filteredWishlistProducts = state?.wishlist.filter(
        (item) => item.id !== payload.id
      );

      return { ...state, wishlist: filteredWishlistProducts };
    }
    default:
      return state;
  }
};
