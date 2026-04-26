import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, PawPrint, Activity } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../services/auth';
import { getUserAnimals } from '../services/animals';
import { createAppointment } from '../services/appointments';

export default function BookAppointmentPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    animal_id: '',
    type: 'Consultation',
    date: '',
    time: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { data: animals = [], isLoading: loadingAnimals } = useQuery({
    queryKey: ['animals', user?.id],
    queryFn: () => getUserAnimals(user?.id),
    enabled: !!user?.id,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError('You must be logged in to book an appointment.');
      return;
    }
    setLoading(true);
    setError(null);

    try {
      await createAppointment({
        animal_id: formData.animal_id,
        owner_id: user.id,
        type: formData.type,
        date: formData.date,
        time: formData.time + ':00', // ensure time format matches DB
        status: 'pending'
      });
      navigate('/appointments'); // redirect to list on success
    } catch (err) {
      setError(err.message || 'Error booking appointment.');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="container" style={{ paddingTop: 'calc(var(--nav-height) + var(--space-10))', textAlign: 'center' }}>
        <h2>Please sign in to book an appointment.</h2>
      </div>
    );
  }

  return (
    <div>
      <section style={{
        position: 'relative',
        paddingTop: 'calc(var(--nav-height) + var(--space-9))',
        paddingBottom: 'var(--space-9)',
        background: '#1a3a2e', // Forest green
        overflow: 'hidden',
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: 'var(--space-2)' }}>
            Book a Visit
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.0625rem' }}>
            Schedule an appointment for your pet.
          </p>
        </div>
      </section>

      <div className="container" style={{ marginTop: 'calc(-1 * var(--space-6))', position: 'relative', zIndex: 2, paddingBottom: 'var(--space-10)' }}>
        <div style={{
          background: 'var(--color-warm-white)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-8)',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--color-sand)',
          maxWidth: '600px',
        }}>
          {error && (
            <div style={{ padding: '12px', background: 'rgba(200,50,50,0.1)', color: '#c83232', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-5)' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <div className="input-group">
              <label><PawPrint size={16} style={{ display: 'inline', marginRight: '8px' }} />Select Pet</label>
              {loadingAnimals ? (
                <p>Loading your pets...</p>
              ) : (
                <select 
                  className="input" 
                  value={formData.animal_id} 
                  onChange={e => setFormData({ ...formData, animal_id: e.target.value })}
                  required
                >
                  <option value="" disabled>Choose a pet</option>
                  {animals.map(a => (
                    <option key={a.id} value={a.id}>{a.name} ({a.espece})</option>
                  ))}
                </select>
              )}
            </div>

            <div className="input-group">
              <label><Activity size={16} style={{ display: 'inline', marginRight: '8px' }} />Reason for Visit</label>
              <select 
                className="input" 
                value={formData.type} 
                onChange={e => setFormData({ ...formData, type: e.target.value })}
                required
              >
                <option value="Consultation">Consultation</option>
                <option value="Vaccination">Vaccination</option>
                <option value="Surgery">Surgery</option>
                <option value="Checkup">General Checkup</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
              <div className="input-group">
                <label><Calendar size={16} style={{ display: 'inline', marginRight: '8px' }} />Date</label>
                <input 
                  type="date" 
                  className="input" 
                  value={formData.date} 
                  onChange={e => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>
              <div className="input-group">
                <label><Clock size={16} style={{ display: 'inline', marginRight: '8px' }} />Time</label>
                <input 
                  type="time" 
                  className="input" 
                  value={formData.time} 
                  onChange={e => setFormData({ ...formData, time: e.target.value })}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-dark btn-lg" style={{ marginTop: 'var(--space-4)' }} disabled={loading}>
              {loading ? 'Booking...' : 'Confirm Appointment'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
