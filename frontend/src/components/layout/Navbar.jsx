import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PawPrint, LogOut } from 'lucide-react';
import { useAuth, signOut } from '../../services/auth';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const isHome = location.pathname === '/';
  const { user } = useAuth();

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBg = scrolled || !isHome
    ? 'rgba(250, 248, 245, 0.92)'
    : 'transparent';
  const textColor = scrolled || !isHome ? 'var(--color-dark)' : '#fff';
  const borderColor = scrolled || !isHome ? 'var(--color-sand-dark)' : 'transparent';

  const linkStyle = (path) => ({
    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: '0.01em',
    color: location.pathname === path
      ? (scrolled || !isHome ? 'var(--color-accent)' : '#fff')
      : textColor,
    transition: 'color 0.2s',
    opacity: location.pathname === path ? 1 : 0.85,
  });

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      height: 'var(--nav-height)',
      display: 'flex',
      alignItems: 'center',
      zIndex: 100,
      background: navBg,
      backdropFilter: scrolled || !isHome ? 'blur(16px)' : 'none',
      borderBottom: `1px solid ${borderColor}`,
      transition: 'all 0.4s var(--ease-out)',
    }}>
      <div className="container" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'
      }}>
        {/* Logo */}
        <Link to="/" style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          color: textColor,
          transition: 'color 0.3s',
        }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: 'var(--radius-md)',
            background: scrolled || !isHome ? 'var(--color-accent-soft)' : 'rgba(255,255,255,0.12)',
            border: scrolled || !isHome ? 'none' : '1px solid rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.3s',
          }}>
            <PawPrint size={18} color={scrolled || !isHome ? 'var(--color-accent)' : '#fff'} />
          </div>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.35rem',
            letterSpacing: '-0.01em',
          }}>
            VetCare
          </span>
        </Link>

        {/* Center Links */}
        <div style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'center' }}>
          {[
            { path: '/', label: 'Home' },
            { path: '/dashboard', label: 'Dashboard' },
            { path: '/appointments', label: 'Appointments' },
            { path: '/vets', label: 'Our Team' },
            { path: '/health-tips', label: 'Health Tips' },
          ].map(link => (
            <Link key={link.path} to={link.path} style={linkStyle(link.path)}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => { if (location.pathname !== link.path) e.currentTarget.style.opacity = '0.7'; }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          {user && (
            <button onClick={handleSignOut} style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: '36px', height: '36px', borderRadius: '50%',
              background: scrolled || !isHome ? 'var(--color-cream)' : 'rgba(255,255,255,0.15)',
              border: scrolled || !isHome ? '1px solid var(--color-sand)' : '1px solid rgba(255,255,255,0.3)',
              color: textColor,
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
              title="Sign Out"
              onMouseEnter={e => e.currentTarget.style.background = scrolled || !isHome ? 'var(--color-sand)' : 'rgba(255,255,255,0.25)'}
              onMouseLeave={e => e.currentTarget.style.background = scrolled || !isHome ? 'var(--color-cream)' : 'rgba(255,255,255,0.15)'}
            >
              <LogOut size={16} />
            </button>
          )}

          <Link to={user ? "/book-appointment" : "/auth"} className="btn btn-sm" style={{
            background: scrolled || !isHome ? 'var(--color-dark)' : 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            color: '#fff',
            border: scrolled || !isHome ? 'none' : '1px solid rgba(255,255,255,0.3)',
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '10px 24px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.8125rem',
            fontWeight: 600,
            transition: 'all 0.3s var(--ease-out)',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            {user ? 'Book Now' : 'Sign In'}
          </Link>
        </div>
      </div>
    </nav>
  );
}
