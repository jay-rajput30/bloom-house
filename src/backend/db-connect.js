import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env["REACT_SUPABASE_URL"],
  process.env["REACT_SUPABASE_PUBLIC_KEY"]
);
