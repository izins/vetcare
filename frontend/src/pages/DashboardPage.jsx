import { Plus, Calendar, ArrowRight, HeartPulse, PawPrint, ClipboardCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getUserAppointments } from '../services/appointments';
import { getUserAnimals } from '../services/animals';
import { getProfile } from '../services/users';
import { useAuth } from '../services/auth';

const mockAnimals = [
  { id: 1, name: 'Luna', espece: 'Dog', race: 'Golden Retriever', age: 3, img: '/statics/Si/IMG_9611.JPG' },
  { id: 2, name: 'Milo', espece: 'Cat', race: 'British Shorthair', age: 2, img: '/statics/Si/IMG_9595.JPG' },
  { id: 3, name: 'Bella', espece: 'Dog', race: 'Dalmatian', age: 4, img: '/statics/Si/IMG_9601.JPG' },
];

const mockAppointments = [
  { id: 1, date: '2026-04-28', time: '10:00', type: 'Consultation', status: 'confirmed', animal: 'Luna' },
  { id: 2, date: '2026-05-05', time: '14:30', type: 'Vaccination', status: 'pending', animal: 'Milo' },
  { id: 3, date: '2026-05-12', time: '09:00', type: 'Surgery', status: 'pending', animal: 'Bella' },
];

const statIcons = [PawPrint, Calendar, ClipboardCheck, Clock];
const statColors = [
  { bg: '#E8F0ED', color: '#4A7C6F' },
  { bg: '#EDE8F5', color: '#6B5BAE' },
  { bg: '#FDF6EC', color: '#E8A849' },
  { bg: '#E8EDF5', color: '#5B7BAE' },
];

function StatCard({ label, value, index }) {
  const Icon = statIcons[index];
  const c = statColors[index];
  return (
    <div style={{
      background: 'var(--color-warm-white)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid var(--color-sand)',
      transition: 'all 0.3s var(--ease-out)',
      cursor: 'default',
    }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = c.color; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--color-sand)'; }}
    >
      <div style={{
        width: '48px', height: '48px', borderRadius: 'var(--radius-md)',
        background: c.bg, color: c.color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 'var(--space-4)',
      }}>
        <Icon size={22} />
      </div>
      <p className="label" style={{ marginBottom: 'var(--space-2)' }}>{label}</p>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--color-dark)', lineHeight: 1 }}>{value}</div>
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
      padding: 'var(--space-4) var(--space-5)',
      borderBottom: '1px solid var(--color-sand)',
      transition: 'background 0.15s',
      cursor: 'pointer',
    }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--color-cream)'}
      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
    >
      <div style={{
        width: '56px', height: '56px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--color-accent-soft)',
        color: 'var(--color-accent)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
        border: '1.5px solid var(--color-accent)',
      }}>
        <span style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1 }}>{day}</span>
        <span style={{ fontSize: '0.625rem', fontWeight: 600, textTransform: 'uppercase' }}>{month}</span>
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ fontWeight: 600, color: 'var(--color-dark)', fontSize: '0.9375rem' }}>{apt.animal?.name || apt.animal || 'Inconnu'}</p>
        <p className="text-sm text-muted">{apt.type} · {apt.time}</p>
      </div>
      <span className={`badge ${statusMap[apt.status]}`}>{apt.status}</span>
    </div>
  );
}

export default function DashboardPage() {
  const { user: currentUser } = useAuth();
  const currentUserId = currentUser?.id || '98681655-9f0b-4f6d-9dbb-0c90aa80e1fc'; // Fallback sur Zinou

  const { data: userProfile } = useQuery({
    queryKey: ['profile', currentUserId],
    queryFn: () => getProfile(currentUserId),
    enabled: !!currentUserId,
  });

  const userName = userProfile?.username || 'Guest';

  // Récupération des données Supabase
  const { data: dbAppointments = [], isLoading: loadingApts } = useQuery({
    queryKey: ['appointments', currentUserId],
    queryFn: () => getUserAppointments(currentUserId),
  });

  const { data: dbAnimals = [], isLoading: loadingAnimals } = useQuery({
    queryKey: ['animals', currentUserId],
    queryFn: () => getUserAnimals(currentUserId),
  });

  // Si connecté, on montre ses vraies données (même vides). Sinon, fallback sur les mock data pour l'esthétique.
  const appointmentsToDisplay = currentUser ? dbAppointments : mockAppointments;
  const animalsToDisplay = currentUser ? dbAnimals : mockAnimals;

  // Calculate dynamic stats
  const totalPets = animalsToDisplay.length;
  const upcomingApts = appointmentsToDisplay.filter(a => a.status === 'pending' || a.status === 'confirmed').length;
  const completedApts = appointmentsToDisplay.filter(a => a.status === 'done').length;

  // Find next visit date
  const upcoming = appointmentsToDisplay
    .filter(a => a.status === 'pending' || a.status === 'confirmed')
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  let nextVisitStr = '--';
  if (upcoming.length > 0) {
    const d = new Date(upcoming[0].date);
    nextVisitStr = d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
  }

  // Dynamic default image based on species
  const getDefaultImage = (espece) => {
    switch (espece?.toLowerCase()) {
      case 'cat': return 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=150&q=80';
      case 'bird': return 'https://images.unsplash.com/photo-1552728089-571eb144586f?auto=format&fit=crop&w=150&q=80';
      case 'rabbit': return 'https://images.unsplash.com/photo-1585110396000-c9fd7e4815b3?auto=format&fit=crop&w=150&q=80';
      default: return 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=150&q=80'; // Dog
    }
  };

  return (
    <div>

      {/* ====== HERO BANNER ====== */}
      <section style={{
        position: 'relative',
        paddingTop: 'calc(var(--nav-height) + var(--space-9))',
        paddingBottom: 'var(--space-9)',
        background: '#33212A',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-100px', right: '-60px', width: '350px', height: '350px', borderRadius: '50%', background: 'rgba(168,213,201,0.08)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '10%', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(168,213,201,0.05)', filter: 'blur(60px)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--space-3)' }}>
                DASHBOARD
              </p>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 'var(--space-2)', fontSize: '1.0625rem' }}>Good morning,</p>
              <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>{userName}</h1>
            </div>
            <Link to="/book-appointment" className="btn btn-accent btn-lg" style={{ gap: 'var(--space-2)' }}>
              <Calendar size={18} /> Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* ====== STATS ====== */}
      <div className="container" style={{ marginTop: 'calc(-1 * var(--space-7))', position: 'relative', zIndex: 2, paddingBottom: 'var(--space-8)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)' }}>
          <StatCard label="TOTAL PETS" value={totalPets} index={0} />
          <StatCard label="UPCOMING" value={upcomingApts} index={1} />
          <StatCard label="COMPLETED" value={completedApts} index={2} />
          <StatCard label="NEXT VISIT" value={nextVisitStr} index={3} />
        </div>
      </div>

      {/* ====== MAIN CONTENT ====== */}
      <div className="container" style={{ paddingBottom: 'var(--space-10)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--space-6)' }}>

          {/* Appointments */}
          <div style={{
            background: 'var(--color-warm-white)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--color-sand)',
          }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: 'var(--space-5) var(--space-5) var(--space-4)',
              borderBottom: '1px solid var(--color-sand)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: 'var(--radius-md)',
                  background: '#EDE8F5', color: '#6B5BAE',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Calendar size={18} />
                </div>
                <h3 style={{ fontSize: '1.15rem' }}>Upcoming Appointments</h3>
              </div>
              <Link to="/appointments" className="btn btn-ghost btn-sm" style={{ color: 'var(--color-accent)' }}>View All <ArrowRight size={14} /></Link>
            </div>
            {appointmentsToDisplay.length === 0 ? (
              <div style={{ padding: 'var(--space-6)', textAlign: 'center', color: 'var(--color-body)' }}>
                You have no upcoming appointments.
              </div>
            ) : (
              appointmentsToDisplay.map(apt => <AppointmentRow key={apt.id} apt={apt} />)
            )}
          </div>

          {/* Pets */}
          <div style={{
            background: 'var(--color-warm-white)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--color-sand)',
            overflow: 'hidden',
          }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: 'var(--space-5) var(--space-5) var(--space-4)',
              borderBottom: '1px solid var(--color-sand)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: 'var(--radius-md)',
                  background: '#E8F0ED', color: '#4A7C6F',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <HeartPulse size={18} />
                </div>
                <h3 style={{ fontSize: '1.15rem' }}>Your Pets</h3>
              </div>
              <Link to="/add-pet" className="btn btn-ghost btn-sm" style={{ color: 'var(--color-accent)' }}><Plus size={14} /> Add</Link>
            </div>

            <div style={{ padding: 'var(--space-4)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {animalsToDisplay.length === 0 ? (
                  <div style={{ padding: 'var(--space-4)', textAlign: 'center', color: 'var(--color-body)' }}>
                    No pets added yet.
                  </div>
                ) : (
                  animalsToDisplay.map(a => (
                    <div key={a.id} style={{
                      display: 'flex', alignItems: 'center', gap: 'var(--space-4)',
                      padding: 'var(--space-3) var(--space-4)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid transparent',
                      transition: 'all 0.2s var(--ease-out)',
                      cursor: 'pointer',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-cream)'; e.currentTarget.style.borderColor = 'var(--color-sand-dark)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}
                    >
                      <img src={a.img || getDefaultImage(a.espece)} alt={a.name} style={{
                        width: '52px', height: '52px', borderRadius: 'var(--radius-full)', objectFit: 'cover',
                        border: '2px solid var(--color-accent-soft)',
                      }} />
                      <div style={{ flex: 1 }}>
                        <p style={{ fontWeight: 600, color: 'var(--color-dark)', fontSize: '0.9375rem' }}>{a.name}</p>
                        <p className="text-xs text-muted">{a.race} {a.age ? `· ${a.age} yrs` : ''}</p>
                      </div>
                      <Link to={`/health-book/${a.id}`} className="btn btn-outline btn-sm" style={{ padding: '4px 10px', fontSize: '0.75rem', zIndex: 2, position: 'relative' }}>
                        Carnet
                      </Link>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
