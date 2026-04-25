import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    }}>
      {/* Left — Image */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
      }}>
        <img
          src="/statics/Si/IMG_9588.JPG"
          alt="Woman laughing with her dog"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div style={{
          position: 'absolute',
          bottom: 'var(--space-8)',
          left: 'var(--space-8)',
          right: 'var(--space-8)',
          color: '#fff',
        }}>
          <h2 style={{ color: '#fff', marginBottom: 'var(--space-3)' }}>They rely on us.</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.0625rem' }}>
            Join thousands of pet parents who trust VetCare for their loved ones.
          </p>
        </div>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)',
        }} />
      </div>

      {/* Right — Form */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-cream)',
        padding: 'var(--space-8)',
      }}>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <Link to="/" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.5rem',
            color: 'var(--color-dark)',
            display: 'block',
            marginBottom: 'var(--space-8)',
          }}>
            VetCare
          </Link>

          <h2 style={{ marginBottom: 'var(--space-2)' }}>
            {isLogin ? 'Welcome back' : 'Create your account'}
          </h2>
          <p style={{ marginBottom: 'var(--space-7)' }}>
            {isLogin
              ? 'Sign in to manage your pets and appointments.'
              : 'Join VetCare Elite to book appointments online.'}
          </p>

          <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }} onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" className="input" placeholder="Jane Doe" />
              </div>
            )}
            <div className="input-group">
              <label>Email</label>
              <input type="email" className="input" placeholder="you@example.com" />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" className="input" placeholder="••••••••" />
            </div>

            <button className="btn btn-dark" style={{ width: '100%', marginTop: 'var(--space-2)' }}>
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <p style={{ marginTop: 'var(--space-6)', fontSize: '0.875rem', textAlign: 'center' }}>
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              style={{
                background: 'none', border: 'none', color: 'var(--color-accent)',
                fontWeight: 600, cursor: 'pointer', font: 'inherit',
              }}
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
