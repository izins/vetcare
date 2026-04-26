import { supabase } from './supabaseClient';
import { useState, useEffect } from 'react';

// Hook personnalisé lié au VRAI système Auth de Supabase
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user || null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { user, loading };
};

export const signUp = async (userData) => {
  // 1. Supabase native auth
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: userData.email,
    password: userData.password,
  });
  if (authError) throw authError;

  // 2. Insert into public.users to keep ton SQL working
  if (authData?.user) {
    const { error: dbError } = await supabase.from('users').insert([{
      id: authData.user.id, // L'ID natif Supabase
      username: userData.username,
      email: userData.email,
      passeword: userData.password, // Ton champ dans SQL
      dateodbirth: userData.dateodbirth || '2000-01-01',
      adresse: userData.adresse,
      // num: userData.num, // ATTENTION: La colonne 'num' n'existe pas encore dans ta base !
      role: 'client'
    }]);
    if (dbError) console.error("Erreur d'insertion public.users:", dbError);
  }
  return authData;
};

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
};

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};

export const signOut = async () => {
  await supabase.auth.signOut();
  window.location.href = '/auth';
};
