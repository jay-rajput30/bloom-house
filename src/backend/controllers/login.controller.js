import { supabase } from "../db-connect";

export const checkLogin = async (inputData) => {
  try {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: inputData.email,
      password: inputData.password,
    });

    if (data) {
      return { success: true, data, error };
    }
  } catch (e) {
    return { sucess: false, error: e };
  }
};

export const signUpUser = async (signUpData) => {
  try {
    let { data, error } = await supabase.auth.signUp({
      email: signUpData.email,
      password: signUpData.password,
    });
    const { wishlistData, wishlistError } = await supabase
      .from("wishlist")
      .insert([{ user_id: data.user.id, products: [] }])
      .select();
    const { carttData, cartError } = await supabase
      .from("cart")
      .insert([{ user_id: data.user.id, products: [] }])
      .select();

    const { profileData, profileError } = await supabase
      .from("profile")
      .insert([
        {
          id: data.user.id,
          address: [],
          firstName: signUpData.firstName,
          lastName: signUpData.lastName,
          phoneNo: signUpData.phoneNo,
        },
      ]);

    if (data) {
      return { success: true, data, error };
    }
  } catch (e) {
    return { sucess: false, error: e };
  }
};
