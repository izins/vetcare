import { User, Settings, LogOut, PawPrint } from 'lucide-react';

export default function ProfilePage() {
  const mockPets = [
    { name: 'Luna', species: 'Dog', breed: 'Golden Retriever', age: 3 },
    { name: 'Milo', species: 'Cat', breed: 'British Shorthair', age: 2 },
  ];

  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + var(--space-7))' }}>
      <div className="container" style={{ paddingBottom: 'var(--space-10)' }}>

        <div style={{ marginBottom: 'var(--space-8)' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'var(--space-2)' }}>Profile</h1>
          <p className="text-muted">Manage your account and linked pets.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 'var(--space-6)' }}>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {[
              { icon: User, label: 'Account', active: true },
              { icon: PawPrint, label: 'My Pets', active: false },
              { icon: Settings, label: 'Preferences', active: false },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <button key={i} className="btn btn-ghost" style={{
                  justifyContent: 'flex-start',
                  background: item.active ? 'var(--color-accent-soft)' : 'transparent',
                  color: item.active ? 'var(--color-accent)' : 'var(--color-body)',
                  fontWeight: item.active ? 600 : 400,
                }}>
                  <Icon size={16} /> {item.label}
                </button>
              );
            })}
            <div style={{ flex: 1 }} />
            <button className="btn btn-ghost" style={{ justifyContent: 'flex-start', color: 'var(--color-error)' }}>
              <LogOut size={16} /> Sign Out
            </button>
          </div>

          {/* Main Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>

            {/* Account Card */}
            <div className="card-flat">
              <h3 style={{ marginBottom: 'var(--space-6)' }}>Personal Information</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }} onSubmit={e => e.preventDefault()}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
                  <div className="input-group">
                    <label>First Name</label>
                    <input className="input" type="text" defaultValue="Sarah" />
                  </div>
                  <div className="input-group">
                    <label>Last Name</label>
                    <input className="input" type="text" defaultValue="Connor" />
                  </div>
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input className="input" type="email" defaultValue="sarah@example.com" disabled style={{ opacity: 0.6 }} />
                </div>
                <div className="input-group">
                  <label>Phone</label>
                  <input className="input" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button className="btn btn-dark">Save Changes</button>
                </div>
              </form>
            </div>

            {/* Linked Pets */}
            <div className="card-flat">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-5)' }}>
                <h3>Linked Pets</h3>
                <button className="btn btn-outline btn-sm">Add Pet</button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                {mockPets.map((pet, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 'var(--space-4)',
                    padding: 'var(--space-4)',
                    background: 'var(--color-cream)',
                    borderRadius: 'var(--radius-md)',
                  }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: 'var(--radius-full)',
                      background: 'var(--color-accent-soft)', color: 'var(--color-accent)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.25rem',
                    }}>
                      {pet.species === 'Dog' ? '🐶' : '🐱'}
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: 'var(--color-dark)' }}>{pet.name}</p>
                      <p className="text-xs text-muted">{pet.breed} · {pet.age} yrs</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
