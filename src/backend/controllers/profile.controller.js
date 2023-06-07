import { supabase } from "../db-connect";

export const addAddress = async (addressData, userId) => {
  try {
    let { data: profileData, profileError } = await supabase
      .from("profile")
      .select("address")
      .eq("id", userId);

    const { data, error } = await supabase
      .from("profile")
      .update({
        address: [
          ...profileData[0].address,
          { ...addressData, id: crypto.randomUUID() },
        ],
      })
      .eq("id", userId);

    if (!error) {
      return { success: true, data, error };
    }
  } catch (e) {
    return { sucess: false, error: e };
  }
};
export const updateProfileAddress = async (updatedAddress, userId) => {
  try {
    const { data, error } = await supabase
      .from("profile")
      .update({
        address: updatedAddress,
      })
      .eq("id", userId)
      .select();

    if (!error) {
      return { success: true, data: data[0], error };
    }
  } catch (e) {
    return { success: falsed, error: e };
  }
};

// export const updateSingleProfileAddress = async (updatedAddress, userId) => {
//   try {
//     const { data, error } = await supabase
//       .from("profile")
//       .update({
//         address: updatedAddress,
//       })
//       .eq("id", userId)
//       .select();

//     if (!error) {
//       return { success: true, data: data[0], error };
//     }
//   } catch (e) {
//     return { success: falsed, error: e };
//   }
// };

export const getAddress = async (userId) => {
  try {
    const { data, error } = await supabase
      .from("profile")
      .select("address")
      .eq("id", userId);
    if (!error) {
      return { success: true, data: data[0].address, error };
    }
  } catch (e) {
    return { success: false, error: e };
  }
};

export const getuserProfile = async (userId) => {
  try {
    let { data: profile, error } = await supabase
      .from("profile")
      .select()
      .eq("id", userId);
    if (!error) {
      return { success: true, data: profile };
    }
  } catch (e) {
    return { success: false, error: e };
  }
};
