import { Link } from 'react-router-dom';
import { ShieldCheck, HeartPulse, Stethoscope, Clock, Star, ArrowRight, ChevronRight, Zap } from 'lucide-react';
import { useAuth } from '../services/auth';

/*
  IMAGE MAP (carefully chosen after reviewing all 24 images):
  - Hero:          IMG_9608 (intimate close-up woman kissing spotted dog — emotional, trust)
  - About:         IMG_9592 (woman + dog close-up, eye-to-eye — bond, intimate)
  - Services bg:   IMG_9596 (vet vaccinating beagle — medical, professional)
  - Gallery 1:     IMG_9590 (man holding Boston Terrier — warmth)
  - Gallery 2:     IMG_9594 (woman with Dalmatian — joyful)
  - Gallery 3:     IMG_9589 (cat & dog together — cute, diversity)
  - Testimonials:  IMG_9607 (girl hugging Irish Setter — serene)
  - CTA:           IMG_9606 (woman nose-to-nose with dog — deep emotional)
  - Vet cards:     IMG_9598 (vet examining dog), IMG_9600 (vet holding puppy), IMG_9599 (vet examining Jack Russell)
*/

export default function LandingPage() {
  const { user } = useAuth();

  return (
    <div>

      {/* ======================================================
          SECTION 1: HERO — Full bleed, Figma style
          ====================================================== */}
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}>
        <img
          src="/statics/Si/IMG_9608.JPG"
          alt="Intimate moment between owner and dog"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.05) 100%)',
        }} />

        <div className="container" style={{
          position: 'relative',
          zIndex: 1,
          paddingBottom: 'var(--space-9)',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
        }}>
          <p className="label" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 'var(--space-4)' }}>
            VETERINARY CLINIC
          </p>
          <h1 style={{
            color: '#fff',
            marginBottom: 'var(--space-5)',
            textShadow: '0 2px 30px rgba(0,0,0,0.2)',
          }}>
            Where Comfort and Care Meet
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: '1.125rem',
            lineHeight: 1.7,
            maxWidth: '540px',
            margin: '0 auto var(--space-7) auto',
          }}>
            Premium veterinary care for your beloved companions — combining state‑of‑the‑art medicine with a gentle, loving touch.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
            <Link to={user ? "/book-appointment" : "/auth"} className="btn btn-lg" style={{
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(12px)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.3)',
            }}>
              Book Appointment
            </Link>
            <a href="#services" className="btn btn-lg btn-ghost" style={{ color: '#fff' }}>
              Learn More <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 2: ABOUT — Forest green storytelling block
          ====================================================== */}
      <section style={{ background: '#1a3a2e', padding: 'var(--space-11) 0' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-9)',
          alignItems: 'center',
        }}>
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
            <img
              src="/statics/Si/IMG_9592.JPG"
              alt="Close bond between human and dog"
              style={{ width: '100%', height: '560px', objectFit: 'cover', objectPosition: 'center 30%' }}
            />
          </div>
          <div style={{ paddingLeft: 'var(--space-5)' }}>
            <p className="label" style={{ marginBottom: 'var(--space-4)', color: 'rgba(255,255,255,0.4)' }}>ABOUT OUR CLINIC</p>
            <h2 style={{ marginBottom: 'var(--space-5)', color: '#fff' }}>A Place Built on Trust & Tenderness</h2>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.9, marginBottom: 'var(--space-5)', color: 'rgba(255,255,255,0.7)' }}>
              Founded in 2018, VetCare Elite has grown into a sanctuary for pets and their families.
              Our team of board‑certified veterinarians combines decades of experience with a
              deeply personal approach — because every animal deserves to be treated like family.
            </p>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.9, marginBottom: 'var(--space-7)', color: 'rgba(255,255,255,0.7)' }}>
              From routine check‑ups to complex surgical procedures, we provide comprehensive
              care in a calm, welcoming environment designed to put both pets and owners at ease.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-7)', borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 'var(--space-6)' }}>
              {[
                { val: '8+', label: 'Years of Care' },
                { val: '12k', label: 'Happy Patients' },
                { val: '6', label: 'Specialists' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: '#fff', lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)', marginTop: '4px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 3: SERVICES — Premium bento photo-cards
          ====================================================== */}
      <section id="services" style={{
        background: '#0d0d0d',
        padding: 'var(--space-10) 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-9)', maxWidth: '600px', margin: '0 auto var(--space-9)' }}>
            <p className="label" style={{ marginBottom: 'var(--space-3)', color: 'rgba(255,255,255,0.4)' }}>OUR SERVICES</p>
            <h2 style={{ marginBottom: 'var(--space-4)', color: '#fff' }}>Comprehensive Care, Under One Roof</h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.0625rem' }}>From preventive wellness to urgent care, we're here for every stage of your pet's life.</p>
          </div>

          {/* BENTO GRID — row 1: big left + tall right */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gridTemplateRows: '340px', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
            {/* Big card: Consultation */}
            <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.querySelector('img').style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.querySelector('img').style.transform = 'scale(1)'}
            >
              <img src="/statics/Si/IMG_9592.JPG" alt="Consultation" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%', transition: 'transform 0.6s var(--ease-out)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,60,50,0.92) 0%, rgba(26,60,50,0.3) 50%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'var(--space-6)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(74,124,111,0.35)', backdropFilter: 'blur(8px)', border: '1px solid rgba(74,124,111,0.5)', borderRadius: 'var(--radius-full)', padding: '5px 14px', marginBottom: 'var(--space-3)' }}>
                  <HeartPulse size={14} color="#a8d5c9" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', color: '#a8d5c9' }}>CONSULTATIONS</span>
                </div>
                <h3 style={{ color: '#fff', marginBottom: 'var(--space-2)', fontSize: '1.5rem' }}>Expert Wellness Exams</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.6 }}>Thorough diagnostics and personalized care plans for every pet.</p>
              </div>
            </div>
            {/* Vaccination */}
            <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.querySelector('img').style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.querySelector('img').style.transform = 'scale(1)'}
            >
              <img src="/statics/Si/IMG_9596.JPG" alt="Vaccination" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', transition: 'transform 0.6s var(--ease-out)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(60,40,100,0.9) 0%, rgba(60,40,100,0.2) 60%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'var(--space-6)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(107,91,174,0.35)', backdropFilter: 'blur(8px)', border: '1px solid rgba(107,91,174,0.5)', borderRadius: 'var(--radius-full)', padding: '5px 14px', marginBottom: 'var(--space-3)' }}>
                  <ShieldCheck size={14} color="#c4b8f0" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', color: '#c4b8f0' }}>VACCINATION</span>
                </div>
                <h3 style={{ color: '#fff', marginBottom: 'var(--space-2)', fontSize: '1.5rem' }}>Immunization Programs</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.6 }}>Tailored to your pet's age, breed, and lifestyle risks.</p>
              </div>
            </div>
          </div>

          {/* BENTO GRID — row 2: 3 cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr 1fr', gridTemplateRows: '280px', gap: 'var(--space-3)' }}>
            {/* Emergency */}
            <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.querySelector('img').style.transform = 'scale(1.06)'}
              onMouseLeave={e => e.currentTarget.querySelector('img').style.transform = 'scale(1)'}
            >
              <img src="/statics/Si/IMG_9603.JPG" alt="Emergency" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', transition: 'transform 0.6s var(--ease-out)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(140,40,40,0.9) 0%, rgba(100,20,20,0.3) 60%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, padding: 'var(--space-5)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(196,92,92,0.35)', backdropFilter: 'blur(8px)', border: '1px solid rgba(196,92,92,0.5)', borderRadius: 'var(--radius-full)', padding: '4px 12px', marginBottom: 'var(--space-2)' }}>
                  <Clock size={12} color="#f0b8b8" />
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', color: '#f0b8b8' }}>24/7 EMERGENCY</span>
                </div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>Always Here for You</h4>
              </div>
            </div>
            {/* Surgery — wide center */}
            <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.querySelector('img').style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.querySelector('img').style.transform = 'scale(1)'}
            >
              <img src="/statics/Si/IMG_9598.JPG" alt="Surgery" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', transition: 'transform 0.6s var(--ease-out)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,40,80,0.92) 0%, rgba(20,40,80,0.25) 55%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'var(--space-6)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(91,123,174,0.35)', backdropFilter: 'blur(8px)', border: '1px solid rgba(91,123,174,0.5)', borderRadius: 'var(--radius-full)', padding: '5px 14px', marginBottom: 'var(--space-3)' }}>
                  <Stethoscope size={14} color="#b8cff0" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', color: '#b8cff0' }}>ADVANCED SURGERY</span>
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: 'var(--space-2)' }}>Board-Certified Surgeons</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem', lineHeight: 1.6 }}>From routine spays to complex orthopedic procedures.</p>
              </div>
            </div>
            {/* Nutrition */}
            <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.querySelector('img').style.transform = 'scale(1.06)'}
              onMouseLeave={e => e.currentTarget.querySelector('img').style.transform = 'scale(1)'}
            >
              <img src="/statics/Si/IMG_9595.JPG" alt="Nutrition" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%', transition: 'transform 0.6s var(--ease-out)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(40,80,40,0.9) 0%, rgba(40,80,40,0.25) 60%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, padding: 'var(--space-5)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(123,174,91,0.35)', backdropFilter: 'blur(8px)', border: '1px solid rgba(123,174,91,0.5)', borderRadius: 'var(--radius-full)', padding: '4px 12px', marginBottom: 'var(--space-2)' }}>
                  <ShieldCheck size={12} color="#c8f0b8" />
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', color: '#c8f0b8' }}>NUTRITION</span>
                </div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>Custom Diet Plans</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 4: WHY VETCARE — Stats + split image
          ====================================================== */}
      <section style={{ background: 'linear-gradient(135deg,#faf8f5 0%,#e8f0ed 100%)', padding: 'var(--space-10) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-9)', alignItems: 'center' }}>
            {/* Left: stats */}
            <div>
              <p className="label" style={{ marginBottom: 'var(--space-3)' }}>WHY VETCARE</p>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Premium Care, Proven Results</h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: 'var(--space-8)', color: 'var(--color-body)' }}>
                For over 8 years, we've set the standard for veterinary excellence — blending advanced medicine with the warmth every pet deserves.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
                {[
                  { val: '12k+', label: 'Patients treated', color: '#4A7C6F', bg: '#e8f0ed' },
                  { val: '98%',  label: 'Satisfaction rate', color: '#6B5BAE', bg: '#ede8f5' },
                  { val: '24/7', label: 'Emergency care',   color: '#C45C5C', bg: '#fceaea' },
                  { val: '6',    label: 'Certified vets',   color: '#5B7BAE', bg: '#e8edf5' },
                ].map((s, i) => (
                  <div key={i} style={{
                    padding: 'var(--space-5)',
                    background: s.bg,
                    borderRadius: 'var(--radius-lg)',
                    border: `1px solid ${s.color}22`,
                    transition: 'transform 0.25s var(--ease-out)',
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', color: s.color, lineHeight: 1, marginBottom: '6px' }}>{s.val}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-body)', fontWeight: 500 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: photos collage */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '240px 240px', gap: 'var(--space-3)' }}>
              <div style={{ gridRow: '1/3', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
                <img src="/statics/Si/IMG_9590.JPG" alt="Pet care" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
                <img src="/statics/Si/IMG_9594.JPG" alt="Pet care" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
                <img src="/statics/Si/IMG_9611.JPG" alt="Pet care" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 5: PREVENTIVE CARE — Warm cream storytelling
          ====================================================== */}
      <section style={{
        position: 'relative',
        padding: 'var(--space-11) 0',
        background: '#faf8f5',
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-9)',
          alignItems: 'center',
        }}>
          <div>
            <p className="label" style={{ marginBottom: 'var(--space-4)' }}>PREVENTIVE CARE</p>
            <h2 style={{ marginBottom: 'var(--space-5)' }}>Prevention Is the Best Medicine</h2>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.9, color: 'var(--color-body)', marginBottom: 'var(--space-6)' }}>
              Our comprehensive vaccination and wellness programs are designed to catch issues early
              and keep your pets happy and healthy for years to come.
            </p>
            <Link to="/appointments" className="btn btn-dark">Schedule a Visit <ArrowRight size={16} /></Link>
          </div>
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
            <img src="/statics/Si/IMG_9596.JPG" alt="Vet vaccinating beagle" style={{ width: '100%', height: '480px', objectFit: 'cover', objectPosition: 'center 40%' }} />
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 6: TEAM — Forest green storytelling
          ====================================================== */}
      <section style={{ background: '#1a3a2e', padding: 'var(--space-11) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-9)' }}>
            <div style={{ maxWidth: '500px' }}>
              <p className="label" style={{ marginBottom: 'var(--space-3)', color: 'rgba(255,255,255,0.4)' }}>OUR TEAM</p>
              <h2 style={{ color: '#fff' }}>Meet Your Veterinarians</h2>
            </div>
            <Link to="/vets" className="btn btn-sm" style={{
              background: 'rgba(255,255,255,0.1)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 'var(--radius-full)',
            }}>
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
            {[
              { img: '/statics/Si/IMG_9600.JPG', name: 'Dr. James Whitmore', role: 'Chief Veterinarian', spec: 'Internal Medicine' },
              { img: '/statics/Si/IMG_9599.JPG', name: 'Dr. Sarah Chen', role: 'Senior Surgeon', spec: 'Orthopedics' },
              { img: '/statics/Si/IMG_9598.JPG', name: 'Dr. Maria Lopez', role: 'Emergency Specialist', spec: 'Critical Care' },
            ].map((vet, i) => (
              <div key={i} style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'all 0.35s var(--ease-out)',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <img src={vet.img} alt={vet.name} style={{ width: '100%', height: '360px', objectFit: 'cover', objectPosition: 'center 25%' }} />
                <div style={{ padding: 'var(--space-5)' }}>
                  <h4 style={{ marginBottom: '2px', color: '#fff' }}>{vet.name}</h4>
                  <p style={{ color: '#a8d5c9', fontSize: '0.875rem', fontWeight: 500, marginBottom: 'var(--space-2)' }}>{vet.role}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)' }}>{vet.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 7: TESTIMONIALS — Dark premium bg
          ====================================================== */}
      <section style={{
        background: 'linear-gradient(135deg, #13201c 0%, #0e1a16 60%, #111 100%)',
        padding: 'var(--space-10) 0',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', bottom: '-80px', right: '-60px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(74,124,111,0.08)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div className="container" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-9)', alignItems: 'center', position: 'relative', zIndex: 1,
        }}>
          <div style={{ paddingRight: 'var(--space-5)' }}>
            <p className="label" style={{ marginBottom: 'var(--space-4)', color: 'rgba(255,255,255,0.4)' }}>TESTIMONIALS</p>
            <h2 style={{ marginBottom: 'var(--space-7)', color: '#fff' }}>What Our Families Say</h2>
            {[
              { quote: '"VetCare transformed the way I think about pet healthcare. Their team is incredibly gentle and thorough."', author: 'Emma T.', pet: 'Luna\'s mom' },
              { quote: '"The emergency team saved my cat\'s life at 2 AM. I\'ll forever be grateful for their dedication."', author: 'Marcus R.', pet: 'Milo\'s dad' },
            ].map((t, i) => (
              <div key={i} style={{
                padding: 'var(--space-6)',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 'var(--radius-lg)',
                marginBottom: 'var(--space-4)',
                backdropFilter: 'blur(10px)',
              }}>
                <div style={{ display: 'flex', gap: '2px', marginBottom: 'var(--space-3)', color: '#E8A849' }}>
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p style={{ fontStyle: 'italic', lineHeight: 1.8, marginBottom: 'var(--space-4)', color: 'rgba(255,255,255,0.75)', fontSize: '1.0625rem' }}>{t.quote}</p>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff' }}>
                  {t.author} <span style={{ fontWeight: 400, color: 'rgba(255,255,255,0.45)' }}>— {t.pet}</span>
                </p>
              </div>
            ))}
          </div>
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.5)' }}>
            <img src="/statics/Si/IMG_9607.JPG" alt="Woman hugging her Irish Setter" style={{ width: '100%', height: '580px', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 8: HEALTH TIPS PREVIEW — accent bg
          ====================================================== */}
      <section style={{ background: '#faf8f5', padding: 'var(--space-11) 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-8)' }}>
            <div>
              <p className="label" style={{ marginBottom: 'var(--space-3)' }}>PET WELLNESS</p>
              <h2>Health Tips & Guides</h2>
            </div>
            <Link to="/health-tips" className="btn btn-outline btn-sm">View All <ArrowRight size={14} /></Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
            {[
              { img: '/statics/Si/IMG_9597.JPG', cat: 'HYGIENE',     catColor: '#6B5BAE', title: 'Dental Care 101: Keeping Your Pet\'s Smile Healthy', read: '5 min' },
              { img: '/statics/Si/IMG_9595.JPG', cat: 'NUTRITION',   catColor: '#4A7C6F', title: 'Why Cats Need a Different Diet Than Dogs',          read: '4 min' },
              { img: '/statics/Si/IMG_9601.JPG', cat: 'VACCINATION', catColor: '#C45C5C', title: 'The Complete Puppy Vaccination Schedule',            read: '6 min' },
            ].map((tip, i) => (
              <Link to="/health-tips" key={i} style={{
                display: 'block', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                background: '#fff', boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--color-sand)',
                transition: 'all 0.3s var(--ease-out)',
                textDecoration: 'none',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ position: 'relative' }}>
                  <img src={tip.img} alt={tip.title} style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }} />
                  <span style={{
                    position: 'absolute', top: '14px', left: '14px',
                    background: tip.catColor, color: '#fff',
                    padding: '3px 12px', borderRadius: '999px',
                    fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em',
                  }}>{tip.cat}</span>
                  <span style={{
                    position: 'absolute', bottom: '12px', right: '12px',
                    background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)', color: '#fff',
                    padding: '3px 10px', borderRadius: '999px', fontSize: '0.6875rem',
                  }}>{tip.read}</span>
                </div>
                <div style={{ padding: 'var(--space-5)' }}>
                  <h4 style={{ marginBottom: 'var(--space-2)', lineHeight: 1.35, color: 'var(--color-dark)' }}>{tip.title}</h4>
                  <span style={{ fontSize: '0.8125rem', color: tip.catColor, fontWeight: 600 }}>Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 9: CTA — Emotional full bleed
          ====================================================== */}
      <section style={{
        position: 'relative',
        height: '70vh',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <img
          src="/statics/Si/IMG_9606.JPG"
          alt="Woman touching noses with her dog"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)',
        }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '600px', padding: '0 var(--space-5)' }}>
          <h2 style={{ color: '#fff', marginBottom: 'var(--space-5)' }}>
            Ready to Give Your Pet the Care They Deserve?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: 'var(--space-7)' }}>
            Join thousands of loving pet owners who trust VetCare Elite for their companions' health and happiness.
          </p>
          <Link to={user ? "/book-appointment" : "/auth"} className="btn btn-lg btn-accent">
            Book Your First Visit <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ======================================================
          SECTION 10: MAP / LOCATION
          ====================================================== */}
      <section style={{ background: '#1a3a2e', padding: 'var(--space-11) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-9)', maxWidth: '500px', margin: '0 auto var(--space-9)' }}>
            <p className="label" style={{ marginBottom: 'var(--space-3)', color: 'rgba(255,255,255,0.4)' }}>FIND US</p>
            <h2 style={{ color: '#fff' }}>Visit Our Clinic</h2>
          </div>

          <div style={{
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            height: '400px',
            background: 'var(--color-sand)',
          }}>
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406081493!2d2.2922926!3d48.8583701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
