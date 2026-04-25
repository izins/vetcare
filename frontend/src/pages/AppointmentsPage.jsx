import { useState } from 'react';
import { Calendar, Filter } from 'lucide-react';

const allAppointments = [
  { id: 1, date: '2026-04-28', time: '10:00', type: 'Consultation', status: 'confirmed', animal: 'Luna', vet: 'Dr. Whitmore' },
  { id: 2, date: '2026-05-05', time: '14:30', type: 'Vaccination', status: 'pending', animal: 'Milo', vet: 'Dr. Chen' },
  { id: 3, date: '2026-05-12', time: '09:00', type: 'Surgery', status: 'pending', animal: 'Bella', vet: 'Dr. Lopez' },
  { id: 4, date: '2026-03-15', time: '11:00', type: 'Vaccination', status: 'done', animal: 'Luna', vet: 'Dr. Whitmore' },
  { id: 5, date: '2026-02-01', time: '16:00', type: 'Consultation', status: 'done', animal: 'Milo', vet: 'Dr. Chen' },
];

export default function AppointmentsPage() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? allAppointments
    : allAppointments.filter(a => a.status === filter);

  const statusMap = { confirmed: 'badge-confirmed', pending: 'badge-pending', done: 'badge-done' };

  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + var(--space-7))' }}>
      <div className="container" style={{ paddingBottom: 'var(--space-10)' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-8)' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'var(--space-2)' }}>Appointments</h1>
            <p className="text-muted">Manage and track all your bookings.</p>
          </div>
          <button className="btn btn-dark"><Calendar size={16} /> New Appointment</button>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-6)', borderBottom: '1px solid var(--color-sand)', paddingBottom: 'var(--space-4)' }}>
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
          boxShadow: 'var(--shadow-xs)',
        }}>
          {/* Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 120px',
            padding: 'var(--space-4) var(--space-5)',
            borderBottom: '1px solid var(--color-sand)',
          }}>
            {['Date', 'Pet', 'Type', 'Veterinarian', 'Status'].map(h => (
              <span key={h} className="label">{h}</span>
            ))}
          </div>

          {/* Rows */}
          {filtered.map(apt => {
            const d = new Date(apt.date);
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
                <span style={{ fontWeight: 500, color: 'var(--color-dark)' }}>{apt.animal}</span>
                <span>{apt.type}</span>
                <span>{apt.vet}</span>
                <span className={`badge ${statusMap[apt.status]}`}>{apt.status}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
