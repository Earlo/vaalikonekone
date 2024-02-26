'use client';

import { Button } from '../generic/Button';
import { Input } from '../generic/Input';
import { useSupabase } from '@/context/supabaseProvider';
import { useState } from 'react';

export default function Login() {
  const { supabase } = useSupabase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      console.log({ error });
    }
  };

  const handleGitHubLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
    if (error) {
      console.log({ error });
    }
  };

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      console.log({ error });
    }
  };

  return (
    <>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <Button
        onClick={handleRegister}
        className="mt-6 transition-colors duration-200 ease-in-out"
      >
        Register
      </Button>
      <Button
        onClick={handleEmailLogin}
        className="mt-6 transition-colors duration-200 ease-in-out"
      >
        Login
      </Button>
      <Button
        onClick={handleGitHubLogin}
        className="mt-6 transition-colors duration-200 ease-in-out"
      >
        GitHub Login
      </Button>
    </>
  );
}
