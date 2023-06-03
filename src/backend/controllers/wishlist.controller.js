import { supabase } from "../db-connect";

export const updateWishList = async (items, userId) => {
  const { data, error } = await supabase
    .from("wishlist")
    .update({ products: items })
    .eq("user_id", userId)
    .select();
  if (!error) {
    console.log({ updatedWishtlistData: data });
    return { success: true, data, error };
  } else {
    return { success: false, error };
  }
};

export const getUserWishlist = async (userId) => {
  try {
    let { data: wishlist, error } = await supabase
      .from("wishlist")
      .select("id, products")
      .eq("user_id", userId);
    console.log({ wishlistController: wishlist[0] });
    if (!error) {
      console.log({ wishlistData: wishlist });
      return { success: true, data: wishlist[0], error };
    }
  } catch (e) {
    return { success: false, error };
  }
};
