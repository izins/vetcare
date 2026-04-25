import { Plus, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const mockAnimals = [
  { id: 1, name: 'Luna', species: 'Dog', breed: 'Golden Retriever', age: 3, img: '/statics/Si/IMG_9611.JPG' },
  { id: 2, name: 'Milo', species: 'Cat', breed: 'British Shorthair', age: 2, img: '/statics/Si/IMG_9595.JPG' },
  { id: 3, name: 'Bella', species: 'Dog', breed: 'Dalmatian', age: 4, img: '/statics/Si/IMG_9601.JPG' },
];

const mockAppointments = [
  { id: 1, date: '2026-04-28', time: '10:00', type: 'Consultation', status: 'confirmed', animal: 'Luna' },
  { id: 2, date: '2026-05-05', time: '14:30', type: 'Vaccination', status: 'pending', animal: 'Milo' },
  { id: 3, date: '2026-05-12', time: '09:00', type: 'Surgery', status: 'pending', animal: 'Bella' },
];

function StatCard({ label, value }) {
  return (
    <div style={{
      background: 'var(--color-warm-white)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-xs)',
    }}>
      <p className="label" style={{ marginBottom: 'var(--space-2)' }}>{label}</p>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--color-dark)' }}>{value}</div>
    </div>
  );
}

function AppointmentRow({ apt }) {
  const d = new Date(apt.date);
  const day = d.getDate();
  const month = d.toLocaleString('default', { month: 'short' });

  const statusMap = {
    confirmed: 'badge-confirmed',
    pending: 'badge-pending',
    done: 'badge-done',
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: 'var(--space-4) 0',
      borderBottom: '1px solid var(--color-sand)',
    }}>
      <div style={{
        width: '56px', height: '56px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--color-accent-soft)',
        color: 'var(--color-accent)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <span style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1 }}>{day}</span>
        <span style={{ fontSize: '0.625rem', fontWeight: 600, textTransform: 'uppercase' }}>{month}</span>
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ fontWeight: 600, color: 'var(--color-dark)', fontSize: '0.9375rem' }}>{apt.animal}</p>
        <p className="text-sm text-muted">{apt.type} · {apt.time}</p>
      </div>
      <span className={`badge ${statusMap[apt.status]}`}>{apt.status}</span>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + var(--space-7))' }}>
      <div className="container" style={{ paddingBottom: 'var(--space-10)' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-8)' }}>
          <div>
            <p className="text-muted" style={{ marginBottom: 'var(--space-1)' }}>Good morning,</p>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Sarah</h1>
          </div>
          <Link to="/auth" className="btn btn-dark" style={{ gap: 'var(--space-2)' }}>
            <Calendar size={16} /> Book Appointment
          </Link>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
          <StatCard label="TOTAL PETS" value="3" />
          <StatCard label="UPCOMING" value="3" />
          <StatCard label="COMPLETED" value="24" />
          <StatCard label="NEXT VISIT" value="28 Apr" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--space-6)' }}>

          {/* Appointments */}
          <div style={{
            background: 'var(--color-warm-white)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-6)',
            boxShadow: 'var(--shadow-xs)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-5)' }}>
              <h3>Upcoming Appointments</h3>
              <Link to="/appointments" className="btn btn-ghost btn-sm">View All <ArrowRight size={14} /></Link>
            </div>
            {mockAppointments.map(apt => <AppointmentRow key={apt.id} apt={apt} />)}
          </div>

          {/* Pets */}
          <div style={{
            background: 'var(--color-warm-white)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-6)',
            boxShadow: 'var(--shadow-xs)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-5)' }}>
              <h3>Your Pets</h3>
              <button className="btn btn-ghost btn-sm"><Plus size={14} /> Add</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {mockAnimals.map(a => (
                <div key={a.id} style={{
                  display: 'flex', alignItems: 'center', gap: 'var(--space-4)',
                  padding: 'var(--space-3)',
                  borderRadius: 'var(--radius-md)',
                  transition: 'background 0.2s',
                  cursor: 'pointer',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--color-cream)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <img src={a.img} alt={a.name} style={{
                    width: '48px', height: '48px', borderRadius: 'var(--radius-full)', objectFit: 'cover',
                  }} />
                  <div>
                    <p style={{ fontWeight: 600, color: 'var(--color-dark)', fontSize: '0.9375rem' }}>{a.name}</p>
                    <p className="text-xs text-muted">{a.breed} · {a.age} yrs</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
