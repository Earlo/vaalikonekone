import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/lib/database.types';

export const createBrowserClient = () => createPagesBrowserClient<Database>();
