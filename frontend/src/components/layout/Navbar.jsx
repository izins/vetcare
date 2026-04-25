import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const isHome = location.pathname === '/';

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
          fontFamily: 'var(--font-serif)',
          fontSize: '1.5rem',
          color: textColor,
          transition: 'color 0.3s',
          display: 'flex', alignItems: 'center', gap: 'var(--space-2)'
        }}>
          VetCare
        </Link>

        {/* Center Links */}
        <div style={{ display: 'flex', gap: 'var(--space-7)', alignItems: 'center' }}>
          <Link to="/" style={linkStyle('/')}>Home</Link>
          <Link to="/dashboard" style={linkStyle('/dashboard')}>Dashboard</Link>
          <Link to="/appointments" style={linkStyle('/appointments')}>Appointments</Link>
          <Link to="/vets" style={linkStyle('/vets')}>Our Team</Link>
          <Link to="/health-tips" style={linkStyle('/health-tips')}>Health Tips</Link>
        </div>

        {/* Right */}
        <Link to="/auth" className="btn btn-dark btn-sm" style={{
          background: scrolled || !isHome ? 'var(--color-dark)' : 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(8px)',
          color: '#fff',
          border: scrolled || !isHome ? 'none' : '1px solid rgba(255,255,255,0.3)',
        }}>
          Book Now
        </Link>
      </div>
    </nav>
  );
}
