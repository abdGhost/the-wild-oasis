import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://kykvhwpwpoytrgvjgqfb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5a3Zod3B3cG95dHJndmpncWZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjExMjAzODQsImV4cCI6MjAzNjY5NjM4NH0.6T3HPTiKkjiKHzBh_O4UUiZEdsWf3sdxoeA1ozMOWPA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
