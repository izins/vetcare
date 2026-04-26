import { supabase } from './supabaseClient';

export const getUserAnimals = async (userId) => {
  const { data, error } = await supabase
    .from('animal')
    .select('*')
    .eq('owner_id', userId)
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
};

export const createAnimal = async (animalData) => {
  const { data, error } = await supabase
    .from('animal')
    .insert([animalData])
    .select();
  if (error) throw error;
  return data;
};

export const updateAnimal = async (id, updateData) => {
  const { data, error } = await supabase
    .from('animal')
    .update(updateData)
    .eq('id', id)
    .select();
  if (error) throw error;
  return data;
};

export const deleteAnimal = async (id) => {
  const { error } = await supabase
    .from('animal')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return true;
};
