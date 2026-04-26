import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PawPrint, Calendar } from 'lucide-react';
import { useAuth } from '../services/auth';
import { createAnimal } from '../services/animals';

export default function AddPetPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    espece: 'Dog',
    race: '',
    dateofbirth: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError('You must be logged in to add a pet.');
      return;
    }
    setLoading(true);
    setError(null);

    try {
      await createAnimal({
        name: formData.name,
        espece: formData.espece,
        race: formData.race,
        dateofbirth: formData.dateofbirth || null,
        owner_id: user.id
      });
      navigate('/dashboard'); // redirect to dashboard on success
    } catch (err) {
      setError(err.message || 'Error adding pet.');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="container" style={{ paddingTop: 'calc(var(--nav-height) + var(--space-10))', textAlign: 'center' }}>
        <h2>Please sign in to add a pet.</h2>
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
            Add a Pet
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.0625rem' }}>
            Register a new companion to your VetCare profile.
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
          maxWidth: '500px',
        }}>
          {error && (
            <div style={{ padding: '12px', background: 'rgba(200,50,50,0.1)', color: '#c83232', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-5)' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <div className="input-group">
              <label><PawPrint size={16} style={{ display: 'inline', marginRight: '8px' }} />Pet Name</label>
              <input 
                type="text" 
                className="input" 
                placeholder="Luna"
                value={formData.name} 
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
              <div className="input-group">
                <label>Species (Espece)</label>
                <select 
                  className="input" 
                  value={formData.espece} 
                  onChange={e => setFormData({ ...formData, espece: e.target.value })}
                  required
                >
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Bird">Bird</option>
                  <option value="Rabbit">Rabbit</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="input-group">
                <label>Breed (Race)</label>
                <input 
                  type="text" 
                  className="input" 
                  placeholder="Golden Retriever"
                  value={formData.race} 
                  onChange={e => setFormData({ ...formData, race: e.target.value })}
                />
              </div>
            </div>

            <div className="input-group">
              <label><Calendar size={16} style={{ display: 'inline', marginRight: '8px' }} />Date of Birth</label>
              <input 
                type="date" 
                className="input" 
                value={formData.dateofbirth} 
                onChange={e => setFormData({ ...formData, dateofbirth: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-dark btn-lg" style={{ marginTop: 'var(--space-4)' }} disabled={loading}>
              {loading ? 'Saving...' : 'Add Pet'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
