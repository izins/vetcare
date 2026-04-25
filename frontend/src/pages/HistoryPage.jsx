import { Stethoscope, Pill, Activity, ChevronRight } from 'lucide-react';

const historyData = [
  { id: 1, date: '2026-04-10', type: 'Vaccination', pet: 'Luna', vet: 'Dr. Whitmore', notes: 'Annual Rabies and DHPPI booster. Patient healthy, no adverse reactions observed.', icon: Pill },
  { id: 2, date: '2026-02-14', type: 'Consultation', pet: 'Milo', vet: 'Dr. Chen', notes: 'Mild limp in left hind leg. X-ray clear. Prescribed anti-inflammatories for 5 days.', icon: Stethoscope },
  { id: 3, date: '2025-11-05', type: 'Surgery', pet: 'Luna', vet: 'Dr. Lopez', notes: 'Routine spay procedure completed successfully. No complications. Follow-up in 10 days.', icon: Activity },
  { id: 4, date: '2025-08-20', type: 'Vaccination', pet: 'Milo', vet: 'Dr. Whitmore', notes: 'First round of core vaccines administered. Mild drowsiness post-vaccination, resolved within 24h.', icon: Pill },
  { id: 5, date: '2025-06-01', type: 'Consultation', pet: 'Luna', vet: 'Dr. Chen', notes: 'Annual wellness exam. Weight stable, dental health good. Heartworm test negative.', icon: Stethoscope },
];

export default function HistoryPage() {
  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + var(--space-7))' }}>
      <div className="container" style={{ paddingBottom: 'var(--space-10)' }}>

        <div style={{ marginBottom: 'var(--space-8)' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'var(--space-2)' }}>Medical History</h1>
          <p className="text-muted">Complete timeline of past procedures and consultations.</p>
        </div>

        {/* Filter pills */}
        <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-7)' }}>
          {['All', 'Luna', 'Milo', 'Bella'].map((f, i) => (
            <button key={i} className={i === 0 ? 'btn btn-dark btn-sm' : 'btn btn-ghost btn-sm'} style={{
              borderRadius: 'var(--radius-full)',
            }}>
              {f}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ maxWidth: '800px' }}>
          {historyData.map((item, index) => {
            const Icon = item.icon;
            const d = new Date(item.date);
            return (
              <div key={item.id} style={{ display: 'flex', gap: 'var(--space-5)' }}>

                {/* Timeline node + line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{
                    width: '44px', height: '44px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--color-accent-soft)',
                    color: 'var(--color-accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={18} />
                  </div>
                  {index !== historyData.length - 1 && (
                    <div style={{ width: '2px', flex: 1, background: 'var(--color-sand-dark)', margin: 'var(--space-2) 0' }} />
                  )}
                </div>

                {/* Card */}
                <div className="card-flat" style={{
                  flex: 1,
                  marginBottom: 'var(--space-5)',
                  cursor: 'pointer',
                  transition: 'all 0.2s var(--ease-out)',
                }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-3)' }}>
                    <div>
                      <h4 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                        {item.type}
                        <span className="text-sm" style={{ fontWeight: 400, color: 'var(--color-muted)', fontFamily: 'var(--font-sans)' }}>
                          for {item.pet}
                        </span>
                      </h4>
                      <p className="text-xs text-muted" style={{ marginTop: '2px' }}>
                        {d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} · {item.vet}
                      </p>
                    </div>
                    <ChevronRight size={18} color="var(--color-stone)" />
                  </div>
                  <p className="text-sm" style={{ lineHeight: 1.7 }}>{item.notes}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
