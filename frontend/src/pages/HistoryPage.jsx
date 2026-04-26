import { Stethoscope, Pill, Activity, ChevronRight, Search } from 'lucide-react';
import { useState } from 'react';

const historyData = [
  { id: 1, date: '2026-04-10', type: 'Vaccination', pet: 'Luna', vet: 'Dr. Whitmore', notes: 'Annual Rabies and DHPPI booster. Patient healthy, no adverse reactions observed.', icon: Pill },
  { id: 2, date: '2026-02-14', type: 'Consultation', pet: 'Milo', vet: 'Dr. Chen', notes: 'Mild limp in left hind leg. X-ray clear. Prescribed anti-inflammatories for 5 days.', icon: Stethoscope },
  { id: 3, date: '2025-11-05', type: 'Surgery', pet: 'Luna', vet: 'Dr. Lopez', notes: 'Routine spay procedure completed successfully. No complications. Follow-up in 10 days.', icon: Activity },
  { id: 4, date: '2025-08-20', type: 'Vaccination', pet: 'Milo', vet: 'Dr. Whitmore', notes: 'First round of core vaccines administered. Mild drowsiness post-vaccination, resolved within 24h.', icon: Pill },
  { id: 5, date: '2025-06-01', type: 'Consultation', pet: 'Luna', vet: 'Dr. Chen', notes: 'Annual wellness exam. Weight stable, dental health good. Heartworm test negative.', icon: Stethoscope },
];

const typeColors = {
  Vaccination: { bg: '#EDE8F5', color: '#6B5BAE', border: '#D4CCE8' },
  Consultation: { bg: '#E8F0ED', color: '#4A7C6F', border: '#C8DDD5' },
  Surgery: { bg: '#FCEAEA', color: '#C45C5C', border: '#F0D0D0' },
};

export default function HistoryPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Luna', 'Milo', 'Bella'];
  const filtered = activeFilter === 'All' ? historyData : historyData.filter(h => h.pet === activeFilter);

  return (
    <div>

      {/* ====== HERO BANNER ====== */}
      <section style={{
        position: 'relative',
        paddingTop: 'calc(var(--nav-height) + var(--space-9))',
        paddingBottom: 'var(--space-9)',
        background: '#3a301e',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-100px', right: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(232,168,73,0.07)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '5%', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(232,168,73,0.05)', filter: 'blur(60px)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--space-3)' }}>
            PET RECORDS
          </p>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', textShadow: '0 2px 20px rgba(0,0,0,0.3)', marginBottom: 'var(--space-2)' }}>
            Medical History
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.0625rem', maxWidth: '500px' }}>
            Complete timeline of past procedures, consultations, and treatments.
          </p>
        </div>
      </section>

      {/* ====== CONTENT ====== */}
      <div className="container" style={{ marginTop: 'calc(-1 * var(--space-6))', position: 'relative', zIndex: 2, paddingBottom: 'var(--space-10)' }}>

        {/* Filter pills */}
        <div style={{
          display: 'flex', gap: 'var(--space-2)',
          marginBottom: 'var(--space-7)',
          background: 'var(--color-warm-white)',
          borderRadius: 'var(--radius-full)',
          padding: 'var(--space-2)',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--color-sand)',
          width: 'fit-content',
        }}>
          {filters.map(f => (
            <button key={f}
              onClick={() => setActiveFilter(f)}
              className="btn btn-sm"
              style={{
                background: activeFilter === f ? 'var(--color-dark)' : 'transparent',
                color: activeFilter === f ? '#fff' : 'var(--color-body)',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                fontWeight: activeFilter === f ? 600 : 400,
                transition: 'all 0.2s var(--ease-out)',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ maxWidth: '800px' }}>
          {filtered.map((item, index) => {
            const Icon = item.icon;
            const d = new Date(item.date);
            const tc = typeColors[item.type];
            return (
              <div key={item.id} style={{ display: 'flex', gap: 'var(--space-5)' }}>

                {/* Timeline node + line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{
                    width: '48px', height: '48px',
                    borderRadius: 'var(--radius-full)',
                    background: tc.bg,
                    color: tc.color,
                    border: `2px solid ${tc.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 0 0 4px ${tc.bg}`,
                  }}>
                    <Icon size={20} />
                  </div>
                  {index !== filtered.length - 1 && (
                    <div style={{
                      width: '2px', flex: 1,
                      background: 'linear-gradient(to bottom, var(--color-sand-dark), var(--color-sand))',
                      margin: 'var(--space-2) 0',
                    }} />
                  )}
                </div>

                {/* Card */}
                <div style={{
                  flex: 1,
                  marginBottom: 'var(--space-5)',
                  background: 'var(--color-warm-white)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-5) var(--space-6)',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--color-sand)',
                  cursor: 'pointer',
                  transition: 'all 0.25s var(--ease-out)',
                }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = tc.border; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--color-sand)'; }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-3)' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-2)' }}>
                        <h4 style={{ margin: 0 }}>{item.type}</h4>
                        <span style={{
                          padding: '2px 12px', borderRadius: 'var(--radius-full)',
                          background: tc.bg, color: tc.color,
                          fontSize: '0.75rem', fontWeight: 600,
                        }}>
                          {item.pet}
                        </span>
                      </div>
                      <p className="text-xs text-muted">
                        {d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} · {item.vet}
                      </p>
                    </div>
                    <ChevronRight size={18} color="var(--color-stone)" />
                  </div>
                  <p className="text-sm" style={{ lineHeight: 1.7, color: 'var(--color-body)' }}>{item.notes}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
