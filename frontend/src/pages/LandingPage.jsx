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
      <section style={{ background: '#59402F', padding: 'var(--space-11) 0' }}>
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
          SECTION 3: SERVICES — Vivid "justlittlethings" style cards
          ====================================================== */}
      <section id="services" style={{
        padding: 'var(--space-11) 0',
        background: '#FFFFFF',
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px', maxWidth: '600px', margin: '0 auto 56px' }}>
            <p className="label" style={{ marginBottom: '12px', color: '#1a1a1a', opacity: 0.5, letterSpacing: '0.15em', fontWeight: 700 }}>OUR SERVICES</p>
            <h2 style={{ marginBottom: '16px', color: '#1a1a1a', fontWeight: 900 }}>Comprehensive Care, Under One Roof</h2>
            <p style={{ color: '#333', fontSize: '1.0625rem' }}>From preventive wellness to urgent care, we're here for every stage of your pet's life.</p>
          </div>

          {/* BENTO GRID — row 1: big left + tall right */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gridTemplateRows: '320px', gap: '20px', marginBottom: '20px' }}>
            {/* Consultation — Pink */}
            <div style={{
              borderRadius: '32px',
              cursor: 'pointer',
              background: '#85E3FF',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease',
              boxShadow: '0 8px 30px rgba(255, 181, 232, 0.35)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px) rotate(-1deg)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(255, 181, 232, 0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) rotate(0deg)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 181, 232, 0.35)'; }}
            >
              <span style={{ fontSize: '3.5rem', fontWeight: 900, color: '#1a1a1a', lineHeight: 1.1, marginBottom: '16px' }}>Expert Wellness Exams.</span>
              <p style={{ color: '#1a1a1a', opacity: 0.7, fontSize: '1.1rem', lineHeight: 1.5, fontWeight: 600, maxWidth: '85%' }}>Thorough diagnostics and personalized care plans for every pet.</p>
            </div>
            {/* Vaccination — Purple */}
            <div style={{
              borderRadius: '32px',
              cursor: 'pointer',
              background: '#B28DFF',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease',
              boxShadow: '0 8px 30px rgba(178, 141, 255, 0.35)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px) rotate(1.5deg)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(178, 141, 255, 0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) rotate(0deg)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(178, 141, 255, 0.35)'; }}
            >
              <span style={{ fontSize: '3rem', fontWeight: 900, color: '#1a1a1a', lineHeight: 1.1, marginBottom: '16px' }}>Immunization & Vaccination.</span>
              <p style={{ color: '#1a1a1a', opacity: 0.7, fontSize: '1.05rem', lineHeight: 1.5, fontWeight: 600 }}>Tailored to your pet's age, breed, and lifestyle.</p>
            </div>
          </div>

          {/* BENTO GRID — row 2: 3 cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr 1fr', gridTemplateRows: '280px', gap: '20px' }}>
            {/* Emergency — Peach/Orange */}
            <div style={{
              borderRadius: '32px',
              cursor: 'pointer',
              background: '#FFC5A1',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease',
              boxShadow: '0 8px 30px rgba(255, 197, 161, 0.35)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px) rotate(1deg)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(255, 197, 161, 0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) rotate(0deg)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 197, 161, 0.35)'; }}
            >
              <span style={{ fontSize: '2.4rem', fontWeight: 900, color: '#1a1a1a', lineHeight: 1.1, marginBottom: '12px' }}>24/7 Emergency Care.</span>
              <p style={{ color: '#1a1a1a', opacity: 0.7, fontSize: '1rem', lineHeight: 1.5, fontWeight: 600 }}>Always here when you need us most.</p>
            </div>
            {/* Surgery — Cyan */}
            <div style={{
              borderRadius: '32px',
              cursor: 'pointer',
              background: '#FFB5E8',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease',
              boxShadow: '0 8px 30px rgba(133, 227, 255, 0.35)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px) rotate(-1.5deg)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(133, 227, 255, 0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) rotate(0deg)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(133, 227, 255, 0.35)'; }}
            >
              <span style={{ fontSize: '2.8rem', fontWeight: 900, color: '#1a1a1a', lineHeight: 1.1, marginBottom: '12px' }}>Board-Certified Surgeons.</span>
              <p style={{ color: '#1a1a1a', opacity: 0.7, fontSize: '1.05rem', lineHeight: 1.5, fontWeight: 600 }}>From routine spays to complex orthopedic procedures.</p>
            </div>
            {/* Nutrition — Mint */}
            <div style={{
              borderRadius: '32px',
              cursor: 'pointer',
              background: '#BFFCC6',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease',
              boxShadow: '0 8px 30px rgba(191, 252, 198, 0.35)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px) rotate(1deg)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(191, 252, 198, 0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) rotate(0deg)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(191, 252, 198, 0.5)'; }}
            >
              <span style={{ fontSize: '2.4rem', fontWeight: 900, color: '#1a1a1a', lineHeight: 1.1, marginBottom: '12px' }}>Custom Diets & Nutrition.</span>
              <p style={{ color: '#1a1a1a', opacity: 0.7, fontSize: '1rem', lineHeight: 1.5, fontWeight: 600 }}>Personalized meal plans for every pet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 4: EMOTIONAL BREAK — Full bleed image
          ====================================================== */}
      <section style={{
        position: 'relative',
        height: '60vh',
        minHeight: '450px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <img
          src="/statics/Si/IMG_9589.JPG"
          alt="Cat and dog together — because every pet is family"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 35%',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.15) 100%)',
        }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '700px', padding: '0 var(--space-5)' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.6)', marginBottom: '16px', textTransform: 'uppercase' }}>EVERY PET DESERVES THE BEST</p>
          <h2 style={{ color: '#fff', fontWeight: 900, fontSize: '2.8rem', lineHeight: 1.15, marginBottom: '16px', textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
            8 Years of Love, Trust & Expertise
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto' }}>
            Over 12,000 happy patients — from playful puppies to senior cats. Our board-certified team is here 24/7, because family doesn't wait.
          </p>
        </div>

      </section>

      {/* ======================================================
          SECTION 5: PREVENTIVE CARE — Warm cream storytelling
          ====================================================== */}
      <section style={{
        position: 'relative',
        padding: 'var(--space-11) 0',
        background: '#F3D571 ',
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
              { img: '/statics/Si/IMG_9597.JPG', cat: 'HYGIENE', catColor: '#6B5BAE', title: 'Dental Care 101: Keeping Your Pet\'s Smile Healthy', read: '5 min' },
              { img: '/statics/Si/IMG_9595.JPG', cat: 'NUTRITION', catColor: '#4A7C6F', title: 'Why Cats Need a Different Diet Than Dogs', read: '4 min' },
              { img: '/statics/Si/IMG_9601.JPG', cat: 'VACCINATION', catColor: '#C45C5C', title: 'The Complete Puppy Vaccination Schedule', read: '6 min' },
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
