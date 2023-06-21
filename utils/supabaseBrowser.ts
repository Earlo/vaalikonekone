import type { Database } from '@/lib/database.types';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';

export const createBrowserClient = () => createPagesBrowserClient<Database>();
