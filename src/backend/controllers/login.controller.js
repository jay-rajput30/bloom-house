import { supabase } from "../db-connect";

export const checkLogin = async (inputData) => {
  try {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: inputData.email,
      password: inputData.password,
    });
    console.log({ data });
    return { success: true, data, error };
  } catch (e) {
    return { sucess: false, error: e };
  }
};
