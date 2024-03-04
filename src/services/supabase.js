import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xmanafmnpckyeypymvjk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtYW5hZm1ucGNreWV5cHltdmprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMDAyMzMsImV4cCI6MjAyNDY3NjIzM30.NVOrXlv2jf_gbw-G4h4CKi3KYywFLbGV8nljMP-arTE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
