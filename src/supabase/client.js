

import { createClient } from '@supabase/supabase-js'

// Use a custom domain as the supabase URL
createClient(import.meta.env.VITE_LOG_SUPABASE_URL,import.meta.env.VITE_LOG_SUPABASE_ANON)

