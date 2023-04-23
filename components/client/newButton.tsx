'use client';

import { useSupabase } from '@/context/supabaseProvider';
import { useState } from 'react';

export default function NewPost() {
  const [content, setContent] = useState('');
  const { supabase } = useSupabase();

  const handleSave = async () => {
    const { data } = await supabase.from('posts').insert({ content }).select();
  };

  return (
    <>
      <input onChange={(e) => setContent(e.target.value)} value={content} />
      <button onClick={handleSave}>Save</button>
    </>
  );
}
