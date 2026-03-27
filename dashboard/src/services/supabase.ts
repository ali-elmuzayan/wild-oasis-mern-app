import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabaseUrl = "https://utivyubwbycxtkqapnyq.supabase.co";
const supabaseKey = "sb_publishable_KZea48bFOCy7m6sPtPGdlw_Nx3MbWnH";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
