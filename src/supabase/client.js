import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseUrl = "https://rvlosqzwtigokckwwxtp.supabase.co";
// const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2bG9zcXp3dGlnb2tja3d3eHRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzMTQ1NDcsImV4cCI6MjAwODg5MDU0N30.VHtlWnEZrnfhMfd_D4M9gFn4jyQQ2zWKai9KYu4oxr4";

export const supabase = createClient(supabaseUrl, supabaseKey);
