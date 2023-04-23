'use client';

import { useState } from 'react';
import { useSupabase } from '../../supabase-provider';
import Button from '../generic/button';
import Input from '../generic/input';

export default function Login() {
  const { supabase, session } = useSupabase();
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

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
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

  return session ? (
    <Button onClick={handleLogout}>Logout</Button>
  ) : (
    <>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
      />
      <Button onClick={handleRegister} className="mt-4">
        Register
      </Button>
      <Button onClick={handleEmailLogin} className="mt-4">
        Email Login
      </Button>
      <Button onClick={handleGitHubLogin} className="mt-4">
        GitHub Login
      </Button>
    </>
  );
}
