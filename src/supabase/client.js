import { createClient } from '@supabase/supabase-js';

// Use the values from .env
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
