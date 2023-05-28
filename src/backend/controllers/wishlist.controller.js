import { supabase } from "../db-connect";

export const updateWishList = async (item, userId) => {
  const { data, error } = await supabase
    .from("wishlist")
    .update({ products: item })
    .eq("user_id", userId);
  if (!error) {
    return { success: true, data, error };
  } else {
    return { success: false, error };
  }
};

export const getUserWishlist = async (userId) => {
  try {
    let { data: wishlist, error } = await supabase
      .from("wishlist")
      .select("*")
      .eq("user_id", userId);
    console.log({ wishlistController: wishlist });
    if (!error) {
      console.log({ wishlistData: wishlist });
      return { success: true, data: wishlist, error };
    }
  } catch (e) {
    return { success: false, error };
  }
};
