import { supabase } from "../db-connect";

export const addAddress = async (addressData, userId) => {
  try {
    let { data: profileData, profileError } = await supabase
      .from("profile")
      .select("address")
      .eq("id", userId);
    console.log({ profileData });
    const { data, error } = await supabase
      .from("profile")
      .update({ address: [...profileData[0].address, addressData] })
      .eq("id", userId);

    if (!error) {
      return { success: true, data, error };
    }
  } catch (e) {
    return { sucess: false, error: e };
  }
};
