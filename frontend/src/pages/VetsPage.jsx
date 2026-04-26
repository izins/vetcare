import { Star, Calendar, Award, Clock } from 'lucide-react';

const vets = [
  {
    name: 'Dr. James Whitmore',
    role: 'Chief Veterinarian',
    specialty: 'Internal Medicine & Geriatrics',
    experience: '20+ years',
    img: '/statics/Si/IMG_9600.JPG',
    available: true,
    bio: 'Passionate about senior pet care and chronic disease management. Dr. Whitmore leads our internal medicine team.',
    rating: 4.9,
    patients: '3.2k',
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Senior Surgeon',
    specialty: 'Orthopedics & Soft Tissue',
    experience: '15 years',
    img: '/statics/Si/IMG_9599.JPG',
    available: true,
    bio: 'Board-certified surgeon specializing in complex orthopedic procedures and minimally invasive techniques.',
    rating: 4.8,
    patients: '2.8k',
  },
  {
    name: 'Dr. Maria Lopez',
    role: 'Emergency Specialist',
    specialty: 'Critical Care & Emergency',
    experience: '12 years',
    img: '/statics/Si/IMG_9598.JPG',
    available: false,
    bio: 'Leading our 24/7 emergency unit with expertise in trauma stabilization and intensive post-operative care.',
    rating: 4.9,
    patients: '4.1k',
  },
];

export default function VetsPage() {
  return (
    <div>

      {/* ====== HERO BANNER ====== */}
      <section style={{
        position: 'relative',
        paddingTop: 'calc(var(--nav-height) + var(--space-9))',
        paddingBottom: 'var(--space-10)',
        background: '#1a3a2e',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(168,213,201,0.06)', filter: 'blur(100px)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 'var(--space-4)' }}>
            OUR TEAM
          </p>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', textShadow: '0 2px 20px rgba(0,0,0,0.3)', marginBottom: 'var(--space-4)' }}>
            Meet Your Veterinarians
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.0625rem', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto' }}>
            Our board-certified team combines decades of experience with a deeply compassionate approach to pet care.
          </p>
        </div>
      </section>

      {/* ====== VET CARDS ====== */}
      <div className="container" style={{ marginTop: 'calc(-1 * var(--space-8))', position: 'relative', zIndex: 2, paddingBottom: 'var(--space-10)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)' }}>
          {vets.map((vet, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
              gap: 'var(--space-7)',
              alignItems: 'center',
              background: 'var(--color-warm-white)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--color-sand)',
              transition: 'all 0.3s var(--ease-out)',
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {/* Image */}
              <div style={{
                order: i % 2 === 0 ? 0 : 1,
                height: '100%',
                minHeight: '440px',
              }}>
                <img src={vet.img} alt={vet.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* Info */}
              <div style={{ order: i % 2 === 0 ? 1 : 0, padding: 'var(--space-7)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
                  <span className={vet.available ? 'badge badge-confirmed' : 'badge badge-done'} style={{ border: vet.available ? '1px solid #4A7C6F' : '1px solid var(--color-stone)' }}>
                    {vet.available ? '● Available' : '○ Busy'}
                  </span>
                  <span className="text-sm text-muted" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={13} /> {vet.experience}
                  </span>
                </div>
                <h2 style={{ marginBottom: 'var(--space-2)' }}>{vet.name}</h2>
                <p style={{ color: 'var(--color-accent)', fontWeight: 500, marginBottom: 'var(--space-5)', fontSize: '1rem' }}>{vet.role} · {vet.specialty}</p>
                <p style={{ lineHeight: 1.8, marginBottom: 'var(--space-6)', color: 'var(--color-body)' }}>{vet.bio}</p>

                {/* Stats */}
                <div style={{
                  display: 'flex', gap: 'var(--space-6)',
                  padding: 'var(--space-4) 0',
                  borderTop: '1px solid var(--color-sand)',
                  borderBottom: '1px solid var(--color-sand)',
                  marginBottom: 'var(--space-6)',
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
                      <Star size={14} fill="#E8A849" color="#E8A849" />
                      <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-dark)' }}>{vet.rating}</span>
                    </div>
                    <span className="text-xs text-muted">Rating</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-dark)', marginBottom: '2px' }}>{vet.patients}</div>
                    <span className="text-xs text-muted">Patients</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-dark)', marginBottom: '2px' }}>
                      <Award size={18} color="var(--color-accent)" />
                    </div>
                    <span className="text-xs text-muted">Certified</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                  <button className="btn btn-accent"><Calendar size={16} /> Book with {vet.name.split(' ')[1]}</button>
                  <button className="btn btn-outline">View Profile</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
