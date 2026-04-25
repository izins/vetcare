import { Star, Calendar } from 'lucide-react';

const vets = [
  {
    name: 'Dr. James Whitmore',
    role: 'Chief Veterinarian',
    specialty: 'Internal Medicine & Geriatrics',
    experience: '20+ years',
    img: '/statics/Si/IMG_9600.JPG',
    available: true,
    bio: 'Passionate about senior pet care and chronic disease management. Dr. Whitmore leads our internal medicine team.',
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Senior Surgeon',
    specialty: 'Orthopedics & Soft Tissue',
    experience: '15 years',
    img: '/statics/Si/IMG_9599.JPG',
    available: true,
    bio: 'Board-certified surgeon specializing in complex orthopedic procedures and minimally invasive techniques.',
  },
  {
    name: 'Dr. Maria Lopez',
    role: 'Emergency Specialist',
    specialty: 'Critical Care & Emergency',
    experience: '12 years',
    img: '/statics/Si/IMG_9598.JPG',
    available: false,
    bio: 'Leading our 24/7 emergency unit with expertise in trauma stabilization and intensive post-operative care.',
  },
];

export default function VetsPage() {
  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + var(--space-7))' }}>
      <div className="container" style={{ paddingBottom: 'var(--space-10)' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-9)', maxWidth: '600px', margin: '0 auto var(--space-9)' }}>
          <p className="label" style={{ marginBottom: 'var(--space-3)' }}>OUR TEAM</p>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'var(--space-4)' }}>
            Meet Your Veterinarians
          </h1>
          <p>Our board-certified team combines decades of experience with a deeply compassionate approach to pet care.</p>
        </div>

        {/* Vet Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)' }}>
          {vets.map((vet, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
              gap: 'var(--space-7)',
              alignItems: 'center',
            }}>
              {/* Image */}
              <div style={{
                order: i % 2 === 0 ? 0 : 1,
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                height: '440px',
              }}>
                <img src={vet.img} alt={vet.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* Info */}
              <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                  <span className={vet.available ? 'badge badge-confirmed' : 'badge badge-done'}>
                    {vet.available ? 'Available' : 'Busy'}
                  </span>
                  <span className="text-sm text-muted">{vet.experience}</span>
                </div>
                <h2 style={{ marginBottom: 'var(--space-2)' }}>{vet.name}</h2>
                <p style={{ color: 'var(--color-accent)', fontWeight: 500, marginBottom: 'var(--space-5)' }}>{vet.role} · {vet.specialty}</p>
                <p style={{ lineHeight: 1.8, marginBottom: 'var(--space-6)' }}>{vet.bio}</p>
                <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                  <button className="btn btn-dark"><Calendar size={16} /> Book with {vet.name.split(' ')[1]}</button>
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
