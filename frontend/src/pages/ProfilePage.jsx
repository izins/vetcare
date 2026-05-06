import { User, Settings, LogOut, PawPrint, Shield, Bell, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../services/users';
import { getUserAnimals } from '../services/animals';
import { useAuth, signOut } from '../services/auth';

export default function ProfilePage() {
  const { user: currentUser } = useAuth();
  const currentUserId = currentUser?.id || '98681655-9f0b-4f6d-9dbb-0c90aa80e1fc';
  const navigate = useNavigate();

  const { data: userProfile } = useQuery({
    queryKey: ['profile', currentUserId],
    queryFn: () => getProfile(currentUserId),
    enabled: !!currentUserId,
  });

  const { data: dbAnimals = [] } = useQuery({
    queryKey: ['animals', currentUserId],
    queryFn: () => getUserAnimals(currentUserId),
  });

  const userName = userProfile?.username || 'Guest';
  const userEmail = userProfile?.email || currentUser?.email || 'guest@example.com';
  const firstName = userName.split(' ')[0] || '';
  const lastName = userName.split(' ').slice(1).join(' ') || '';
  const mockPets = [
    { id: '1', name: 'Luna', species: 'Dog', breed: 'Golden Retriever', age: 3, img: '/statics/Si/IMG_9611.JPG' },
    { id: '2', name: 'Milo', species: 'Cat', breed: 'British Shorthair', age: 2, img: '/statics/Si/IMG_9595.JPG' },
  ];
  const animalsToDisplay = currentUser ? dbAnimals : mockPets;

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  const getDefaultImage = (espece) => {
    switch (espece?.toLowerCase()) {
      case 'cat': return 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=150&q=80';
      case 'bird': return 'https://images.unsplash.com/photo-1552728089-571eb144586f?auto=format&fit=crop&w=150&q=80';
      case 'rabbit': return 'https://images.unsplash.com/photo-1585110396000-c9fd7e4815b3?auto=format&fit=crop&w=150&q=80';
      default: return 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=150&q=80'; // Dog
    }
  };

  const sidebarItems = [
    { icon: User, label: 'Account', active: true },
    { icon: PawPrint, label: 'My Pets', active: false },
    { icon: Bell, label: 'Notifications', active: false },
    { icon: Shield, label: 'Security', active: false },
    { icon: Settings, label: 'Preferences', active: false },
  ];

  return (
    <div>

      {/* ====== HERO BANNER ====== */}
      <section style={{
        position: 'relative',
        paddingTop: 'calc(var(--nav-height) + var(--space-9))',
        paddingBottom: 'var(--space-9)',
        background: '#3a352a',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-80px', right: '15%', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(200,194,184,0.08)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '10%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(200,194,184,0.05)', filter: 'blur(60px)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
            {/* Avatar */}
            <div style={{
              width: '90px', height: '90px', borderRadius: 'var(--radius-full)',
              background: 'linear-gradient(135deg, #4A7C6F, #6B5BAE)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2.25rem', color: '#fff', fontFamily: 'var(--font-serif)',
              border: '3px solid rgba(255,255,255,0.2)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}>
              {userName.charAt(0).toUpperCase()}
            </div>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>
                MY ACCOUNT
              </p>
              <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3rem)', textShadow: '0 2px 20px rgba(0,0,0,0.3)', marginBottom: 'var(--space-1)' }}>
                {userName}
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9375rem' }}>{userEmail}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CONTENT ====== */}
      <div className="container" style={{ marginTop: 'calc(-1 * var(--space-5))', position: 'relative', zIndex: 2, paddingBottom: 'var(--space-10)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 'var(--space-6)' }}>

          {/* Sidebar */}
          <div style={{
            background: 'var(--color-warm-white)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-4)',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--color-sand)',
            height: 'fit-content',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
              {sidebarItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <button key={i} className="btn btn-ghost" style={{
                    justifyContent: 'flex-start',
                    width: '100%',
                    background: item.active ? 'var(--color-accent-soft)' : 'transparent',
                    color: item.active ? 'var(--color-accent)' : 'var(--color-body)',
                    fontWeight: item.active ? 600 : 400,
                    borderRadius: 'var(--radius-md)',
                    border: item.active ? '1px solid var(--color-accent)' : '1px solid transparent',
                    transition: 'all 0.2s var(--ease-out)',
                  }}>
                    <Icon size={16} /> {item.label}
                  </button>
                );
              })}
            </div>
            <div style={{ height: '1px', background: 'var(--color-sand)', margin: 'var(--space-4) 0' }} />
            <button onClick={handleSignOut} className="btn btn-ghost" style={{
              justifyContent: 'flex-start', width: '100%',
              color: 'var(--color-error)', borderRadius: 'var(--radius-md)',
            }}>
              <LogOut size={16} /> Sign Out
            </button>
          </div>

          {/* Main Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>

            {/* Account Card */}
            <div style={{
              background: 'var(--color-warm-white)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--color-sand)',
            }}>
              <div style={{
                padding: 'var(--space-5) var(--space-6)',
                borderBottom: '1px solid var(--color-sand)',
                background: 'var(--color-cream)',
                display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
              }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: 'var(--radius-md)',
                  background: '#FDF6EC', color: '#E8A849',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <User size={18} />
                </div>
                <h3 style={{ fontSize: '1.15rem' }}>Personal Information</h3>
              </div>
              <div style={{ padding: 'var(--space-6)' }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }} onSubmit={e => e.preventDefault()}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
                    <div className="input-group">
                      <label>First Name</label>
                      <input className="input" type="text" defaultValue={firstName} />
                    </div>
                    <div className="input-group">
                      <label>Last Name</label>
                      <input className="input" type="text" defaultValue={lastName} />
                    </div>
                  </div>
                  <div className="input-group">
                    <label>Email</label>
                    <input className="input" type="email" defaultValue={userEmail} disabled style={{ opacity: 0.6 }} />
                  </div>
                  <div className="input-group">
                    <label>Phone</label>
                    <input className="input" type="tel" defaultValue={userProfile?.phone || ''} placeholder="Add your phone number" />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-3)' }}>
                    <button className="btn btn-outline">Cancel</button>
                    <button className="btn btn-accent">Save Changes</button>
                  </div>
                </form>
              </div>
            </div>

            {/* Linked Pets */}
            <div style={{
              background: 'var(--color-warm-white)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--color-sand)',
            }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: 'var(--space-5) var(--space-6)',
                borderBottom: '1px solid var(--color-sand)',
                background: 'var(--color-cream)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: 'var(--radius-md)',
                    background: '#E8F0ED', color: '#4A7C6F',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <PawPrint size={18} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem' }}>Linked Pets</h3>
                </div>
                <button className="btn btn-outline btn-sm">+ Add Pet</button>
              </div>
              <div style={{ padding: 'var(--space-5) var(--space-6)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                  {animalsToDisplay.length === 0 ? (
                    <div style={{ padding: 'var(--space-4)', color: 'var(--color-body)' }}>No pets found.</div>
                  ) : (
                    animalsToDisplay.map((pet, i) => (
                      <div key={pet.id || i} style={{
                        display: 'flex', alignItems: 'center', gap: 'var(--space-4)',
                        padding: 'var(--space-4)',
                        background: 'var(--color-cream)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-sand)',
                        transition: 'all 0.2s var(--ease-out)',
                        cursor: 'pointer',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-sand)'; e.currentTarget.style.boxShadow = 'none'; }}
                      >
                        <img src={pet.img || getDefaultImage(pet.espece || pet.species)} alt={pet.name} style={{
                          width: '52px', height: '52px', borderRadius: 'var(--radius-full)',
                          objectFit: 'cover', border: '2px solid var(--color-accent-soft)',
                        }} />
                        <div style={{ flex: 1 }}>
                          <p style={{ fontWeight: 600, color: 'var(--color-dark)' }}>{pet.name}</p>
                          <p className="text-xs text-muted">{pet.race || pet.breed} {pet.age ? `· ${pet.age} yrs` : ''}</p>
                        </div>
                        <Link to={`/health-book/${pet.id}`} className="btn btn-outline btn-sm" style={{ padding: '6px 12px' }}>
                          Carnet de Santé
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
    </div>
  );
}
