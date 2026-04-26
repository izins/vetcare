import { supabase } from './supabaseClient';

export const createAppointment = async (appointmentData) => {
  const { data, error } = await supabase
    .from('appointement')
    .insert([appointmentData])
    .select();
  if (error) throw error;
  return data;
};

export const getUserAppointments = async (userId) => {
  const { data, error } = await supabase
    .from('appointement')
    .select(`
      *,
      animal ( name, espece, race )
    `)
    .eq('owner_id', userId)
    .order('date', { ascending: true });
  if (error) throw error;
  return data;
};

export const getAppointmentsByAnimal = async (animalId) => {
  const { data, error } = await supabase
    .from('appointement')
    .select('*')
    .eq('animal_id', animalId)
    .order('date', { ascending: false });
  if (error) throw error;
  return data;
};

export const updateAppointmentStatus = async (id, status) => {
  const { data, error } = await supabase
    .from('appointement')
    .update({ status })
    .eq('id', id)
    .select();
  if (error) throw error;
  return data;
};
