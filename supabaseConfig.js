import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://cfknptmzkecdeqyrtciq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNma25wdG16a2VjZGVxeXJ0Y2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5NTk0NjAsImV4cCI6MjA2ODUzNTQ2MH0.irFImmsHFT7FsNEC3dvyRzBD-27Sq9GSXiRbnn1PFmE";

export const supabase = createClient(supabaseUrl, supabaseKey);