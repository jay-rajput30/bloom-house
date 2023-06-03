import { supabase } from "../db-connect";

export const getUserCart = async (userId) => {
  try {
    let { data: cart, error } = await supabase
      .from("cart")
      .select("id,products")
      .eq("user_id", userId);

    if (!error) {
      return { success: true, data: cart, error };
    }
  } catch (e) {
    return { success: false, error: e };
  }
};

export const updateCart = async (userId, items) => {
  try {
    const { data, error } = await supabase
      .from("cart")
      .update({ products: items })
      .eq("user_id", userId);
    if (!error) {
      return { success: true, data, error };
    }
  } catch (e) {
    return { success: false, error: e };
  }
};
