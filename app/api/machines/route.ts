import { createServerClient } from '@/utils/supabaseServer';

export async function GET(request: Request) {
  const supabase = createServerClient();

  const getMachines = async () => {
    const { data: machines, error } = await supabase
      .from('machines')
      .select('*');

    if (error) {
      throw error;
    }
    return machines;
  };
}
