import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-dark)',
      color: 'rgba(255,255,255,0.7)',
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-6)',
    }}>
      <div className="container">
        {/* Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 'var(--space-8)',
          paddingBottom: 'var(--space-8)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>
          {/* Brand */}
          <div>
            <h3 style={{ color: '#fff', marginBottom: 'var(--space-4)', fontFamily: 'var(--font-serif)' }}>VetCare</h3>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, maxWidth: '320px' }}>
              Where compassion meets expertise. Premium veterinary care for your beloved companions since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.8125rem', fontFamily: 'var(--font-sans)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--space-5)' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <Link to="/" style={{ fontSize: '0.9375rem', transition: 'color 0.2s' }}>Home</Link>
              <Link to="/vets" style={{ fontSize: '0.9375rem' }}>Our Veterinarians</Link>
              <Link to="/health-tips" style={{ fontSize: '0.9375rem' }}>Health Tips</Link>
              <Link to="/auth" style={{ fontSize: '0.9375rem' }}>Book Appointment</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.8125rem', fontFamily: 'var(--font-sans)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--space-5)' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', fontSize: '0.9375rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}><Phone size={14} /> +1 (555) 234-5678</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}><Mail size={14} /> hello@vetcare.com</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}><MapPin size={14} /> 42 Elm Street, NY</span>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.8125rem', fontFamily: 'var(--font-sans)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--space-5)' }}>Hours</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', fontSize: '0.9375rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}><Clock size={14} /> Mon–Fri: 8am–8pm</span>
              <span>Sat: 9am–5pm</span>
              <span>Sun: Emergency Only</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 'var(--space-6)',
          fontSize: '0.8125rem',
          color: 'rgba(255,255,255,0.4)',
        }}>
          <span>© 2026 VetCare Elite. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
          </div>
        </div>
      </div>
    </footer>
  );
}
