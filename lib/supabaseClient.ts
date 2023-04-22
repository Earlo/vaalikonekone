import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || undefined;
const supabaseKey = process.env.SUPABASE_KEY || undefined;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase credentials are missing.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
