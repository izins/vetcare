import { useState } from 'react';
import { Calendar, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getUserAppointments } from '../services/appointments';
import { useAuth } from '../services/auth';

const allAppointments = [
  { id: 1, date: '2026-04-28', time: '10:00', type: 'Consultation', status: 'confirmed', animal: 'Luna', vet: 'Dr. Whitmore' },
  { id: 2, date: '2026-05-05', time: '14:30', type: 'Vaccination', status: 'pending', animal: 'Milo', vet: 'Dr. Chen' },
  { id: 3, date: '2026-05-12', time: '09:00', type: 'Surgery', status: 'pending', animal: 'Bella', vet: 'Dr. Lopez' },
  { id: 4, date: '2026-03-15', time: '11:00', type: 'Vaccination', status: 'done', animal: 'Luna', vet: 'Dr. Whitmore' },
  { id: 5, date: '2026-02-01', time: '16:00', type: 'Consultation', status: 'done', animal: 'Milo', vet: 'Dr. Chen' },
];

export default function AppointmentsPage() {
  const { user: currentUser } = useAuth();
  const currentUserId = currentUser?.id || '98681655-9f0b-4f6d-9dbb-0c90aa80e1fc'; // Fallback sur Zinou

  const { data: dbAppointments = [], isLoading } = useQuery({
    queryKey: ['appointments', currentUserId],
    queryFn: () => getUserAppointments(currentUserId),
  });

  const appointmentsData = currentUser ? dbAppointments : allAppointments;

  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? appointmentsData
    : appointmentsData.filter(a => a.status === filter);

  const statusMap = { confirmed: 'badge-confirmed', pending: 'badge-pending', done: 'badge-done' };

  const typeColors = {
    Consultation: { bg: '#E8F0ED', color: '#4A7C6F' },
    Vaccination: { bg: '#EDE8F5', color: '#6B5BAE' },
    Surgery: { bg: '#FCEAEA', color: '#C45C5C' },
  };

  return (
    <div>

      {/* ====== HERO BANNER ====== */}
      <section style={{
        position: 'relative',
        paddingTop: 'calc(var(--nav-height) + var(--space-9))',
        paddingBottom: 'var(--space-9)',
        background: '#3a2a1e',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-80px', right: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(210,170,120,0.08)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '15%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(210,170,120,0.05)', filter: 'blur(60px)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--space-3)' }}>
                MANAGE BOOKINGS
              </p>
              <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', textShadow: '0 2px 20px rgba(0,0,0,0.3)', marginBottom: 'var(--space-2)' }}>
                Appointments
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.0625rem' }}>Manage and track all your bookings in one place.</p>
            </div>
            <Link to="/book-appointment" className="btn btn-accent btn-lg"><Calendar size={18} /> New Appointment</Link>
          </div>
        </div>
      </section>

      {/* ====== CONTENT ====== */}
      <div className="container" style={{ marginTop: 'calc(-1 * var(--space-6))', position: 'relative', zIndex: 2, paddingBottom: 'var(--space-10)' }}>

        {/* Filter tabs */}
        <div style={{
          display: 'flex', gap: 'var(--space-2)',
          marginBottom: 'var(--space-6)',
          background: 'var(--color-warm-white)',
          borderRadius: 'var(--radius-full)',
          padding: 'var(--space-2)',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--color-sand)',
          width: 'fit-content',
        }}>
          {[
            { key: 'all', label: 'All' },
            { key: 'pending', label: 'Pending' },
            { key: 'confirmed', label: 'Confirmed' },
            { key: 'done', label: 'Completed' },
          ].map(f => (
            <button key={f.key}
              onClick={() => setFilter(f.key)}
              className="btn btn-sm"
              style={{
                background: filter === f.key ? 'var(--color-dark)' : 'transparent',
                color: filter === f.key ? '#fff' : 'var(--color-body)',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                fontWeight: filter === f.key ? 600 : 400,
                transition: 'all 0.2s var(--ease-out)',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Table-like list */}
        <div style={{
          background: 'var(--color-warm-white)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-sm)',
          border: '1px solid var(--color-sand)',
        }}>
          {/* Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 120px',
            padding: 'var(--space-4) var(--space-5)',
            borderBottom: '2px solid var(--color-sand)',
            background: 'var(--color-cream)',
          }}>
            {['Date', 'Pet', 'Type', 'Veterinarian', 'Status'].map(h => (
              <span key={h} className="label" style={{ fontSize: '0.6875rem' }}>{h}</span>
            ))}
          </div>

          {/* Rows */}
          {filtered.length === 0 ? (
            <div style={{ padding: 'var(--space-8)', textAlign: 'center', color: 'var(--color-body)' }}>
              No appointments found.
            </div>
          ) : (
            filtered.map(apt => {
              const d = new Date(apt.date);
              const tc = typeColors[apt.type] || typeColors.Consultation;

              return (
                <div key={apt.id} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr 1fr 120px',
                  padding: 'var(--space-4) var(--space-5)',
                  borderBottom: '1px solid var(--color-sand)',
                  alignItems: 'center',
                  transition: 'background 0.15s',
                  cursor: 'pointer',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--color-cream)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <span style={{ color: 'var(--color-dark)', fontWeight: 500, fontSize: '0.9375rem' }}>
                    {d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} · {apt.time}
                  </span>
                  <span style={{ fontWeight: 600, color: 'var(--color-dark)' }}>{apt.animal?.name || apt.animal || 'Inconnu'}</span>
                  <span>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center',
                      padding: '4px 14px', borderRadius: 'var(--radius-full)',
                      background: tc.bg, color: tc.color,
                      fontSize: '0.8125rem', fontWeight: 500,
                    }}>
                      {apt.type}
                    </span>
                  </span>
                  <span style={{ color: 'var(--color-body)' }}>{apt.vet || 'TBD'}</span>
                  <span className={`badge ${statusMap[apt.status]}`}>{apt.status}</span>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
