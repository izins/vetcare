import { Link } from 'react-router-dom';
import { ShieldCheck, HeartPulse, Stethoscope, Clock, Star, ArrowRight, ChevronRight } from 'lucide-react';

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
            <Link to="/auth" className="btn btn-lg" style={{
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
          SECTION 2: ABOUT — Figma split layout (image left, text right)
          ====================================================== */}
      <section className="section" style={{ background: 'var(--color-warm-white)' }}>
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
              style={{ width: '100%', height: '560px', objectFit: 'cover' }}
            />
          </div>
          <div style={{ paddingLeft: 'var(--space-5)' }}>
            <p className="label" style={{ marginBottom: 'var(--space-4)' }}>ABOUT OUR CLINIC</p>
            <h2 style={{ marginBottom: 'var(--space-5)' }}>A Place Built on Trust & Tenderness</h2>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: 'var(--space-5)' }}>
              Founded in 2018, VetCare Elite has grown into a sanctuary for pets and their families.
              Our team of board‑certified veterinarians combines decades of experience with a
              deeply personal approach — because every animal deserves to be treated like family.
            </p>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: 'var(--space-7)' }}>
              From routine check‑ups to complex surgical procedures, we provide comprehensive
              care in a calm, welcoming environment designed to put both pets and owners at ease.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-7)' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--color-dark)' }}>8+</div>
                <div className="text-sm text-muted">Years of Care</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--color-dark)' }}>12k</div>
                <div className="text-sm text-muted">Happy Patients</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--color-dark)' }}>6</div>
                <div className="text-sm text-muted">Specialists</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 3: SERVICES — Icon cards grid
          ====================================================== */}
      <section id="services" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-9)', maxWidth: '600px', margin: '0 auto var(--space-9)' }}>
            <p className="label" style={{ marginBottom: 'var(--space-3)' }}>OUR SERVICES</p>
            <h2 style={{ marginBottom: 'var(--space-4)' }}>Comprehensive Care, Under One Roof</h2>
            <p>From preventive wellness to urgent care, we're here for every stage of your pet's life.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-5)',
          }}>
            {[
              { icon: HeartPulse, title: 'Consultations', desc: 'Thorough wellness exams, specialist diagnostics, and personalized care plans tailored to your pet.' },
              { icon: ShieldCheck, title: 'Vaccination', desc: 'Comprehensive immunization programs adapted to your pet\'s age, breed, and lifestyle risk factors.' },
              { icon: Clock, title: '24/7 Emergency', desc: 'Round‑the‑clock intensive care with state‑of‑the‑art equipment for critical situations.' },
              { icon: Stethoscope, title: 'Surgery', desc: 'From routine spays to complex orthopedic procedures performed by board‑certified surgeons.' },
              { icon: HeartPulse, title: 'Dental Care', desc: 'Professional cleanings, extractions, and oral health assessments to keep smiles healthy.' },
              { icon: ShieldCheck, title: 'Nutrition', desc: 'Custom dietary plans developed by our veterinary nutritionists for optimal health and vitality.' },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="card-flat" style={{ textAlign: 'center', padding: 'var(--space-7) var(--space-5)' }}>
                  <div style={{
                    width: '56px', height: '56px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--color-accent-soft)',
                    color: 'var(--color-accent)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-5)',
                  }}>
                    <Icon size={24} />
                  </div>
                  <h4 style={{ marginBottom: 'var(--space-3)' }}>{service.title}</h4>
                  <p className="text-sm" style={{ lineHeight: 1.7 }}>{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 4: IMAGE GALLERY — Figma-style asymmetric mosaic
          ====================================================== */}
      <section style={{ background: 'var(--color-warm-white)', padding: 'var(--space-10) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-9)', maxWidth: '500px', margin: '0 auto var(--space-9)' }}>
            <p className="label" style={{ marginBottom: 'var(--space-3)' }}>OUR FAMILY</p>
            <h2>Every Patient Has a Story</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gridTemplateRows: '300px 300px',
            gap: 'var(--space-4)',
          }}>
            <div style={{ gridRow: '1 / 3', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
              <img src="/statics/Si/IMG_9590.JPG" alt="Man with Boston Terrier" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
              <img src="/statics/Si/IMG_9594.JPG" alt="Woman with Dalmatian" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
              <img src="/statics/Si/IMG_9589.JPG" alt="Cat and dog together" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
              <img src="/statics/Si/IMG_9603.JPG" alt="Woman with Shiba Inu" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
              <img src="/statics/Si/IMG_9611.JPG" alt="Happy dog running" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 5: FULL BLEED IMAGE BREAK — Figma parallax feel
          ====================================================== */}
      <section style={{
        position: 'relative',
        height: '60vh',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <img
          src="/statics/Si/IMG_9596.JPG"
          alt="Veterinarian vaccinating a beagle"
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
          background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 100%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
          <p className="label" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 'var(--space-3)' }}>PREVENTIVE CARE</p>
          <h2 style={{ color: '#fff', marginBottom: 'var(--space-4)' }}>Prevention Is the Best Medicine</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.0625rem', lineHeight: 1.7 }}>
            Our comprehensive vaccination and wellness programs are designed to catch issues early
            and keep your pets happy and healthy for years to come.
          </p>
        </div>
      </section>

      {/* ======================================================
          SECTION 6: TEAM PREVIEW — Vet cards (Figma listing cards style)
          ====================================================== */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-8)' }}>
            <div>
              <p className="label" style={{ marginBottom: 'var(--space-3)' }}>OUR TEAM</p>
              <h2>Meet Your Veterinarians</h2>
            </div>
            <Link to="/vets" className="btn btn-outline btn-sm">
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
            {[
              { img: '/statics/Si/IMG_9600.JPG', name: 'Dr. James Whitmore', role: 'Chief Veterinarian', spec: 'Internal Medicine' },
              { img: '/statics/Si/IMG_9599.JPG', name: 'Dr. Sarah Chen', role: 'Senior Surgeon', spec: 'Orthopedics' },
              { img: '/statics/Si/IMG_9598.JPG', name: 'Dr. Maria Lopez', role: 'Emergency Specialist', spec: 'Critical Care' },
            ].map((vet, i) => (
              <div key={i} className="card">
                <img
                  src={vet.img}
                  alt={vet.name}
                  style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                />
                <div style={{ padding: 'var(--space-5)' }}>
                  <h4 style={{ marginBottom: '2px' }}>{vet.name}</h4>
                  <p style={{ color: 'var(--color-accent)', fontSize: '0.875rem', fontWeight: 500, marginBottom: 'var(--space-2)' }}>{vet.role}</p>
                  <p className="text-sm text-muted">{vet.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 7: TESTIMONIALS — Split layout (text right, image left)
          ====================================================== */}
      <section className="section" style={{ background: 'var(--color-warm-white)' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-9)',
          alignItems: 'center',
        }}>
          <div style={{ paddingRight: 'var(--space-5)' }}>
            <p className="label" style={{ marginBottom: 'var(--space-4)' }}>TESTIMONIALS</p>
            <h2 style={{ marginBottom: 'var(--space-7)' }}>What Our Families Say</h2>

            {[
              { quote: '"VetCare transformed the way I think about pet healthcare. Their team is incredibly gentle and thorough."', author: 'Emma T.', pet: 'Luna\'s mom' },
              { quote: '"The emergency team saved my cat\'s life at 2 AM. I\'ll forever be grateful for their dedication."', author: 'Marcus R.', pet: 'Milo\'s dad' },
            ].map((t, i) => (
              <div key={i} style={{
                padding: 'var(--space-5)',
                background: 'var(--color-cream)',
                borderRadius: 'var(--radius-lg)',
                marginBottom: 'var(--space-4)',
              }}>
                <div style={{ display: 'flex', gap: '2px', marginBottom: 'var(--space-3)', color: 'var(--color-warning)' }}>
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p style={{ fontStyle: 'italic', lineHeight: 1.7, marginBottom: 'var(--space-3)' }}>{t.quote}</p>
                <p className="text-sm" style={{ fontWeight: 600, color: 'var(--color-dark)' }}>
                  {t.author} <span style={{ fontWeight: 400, color: 'var(--color-muted)' }}>— {t.pet}</span>
                </p>
              </div>
            ))}
          </div>
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
            <img
              src="/statics/Si/IMG_9607.JPG"
              alt="Woman hugging her Irish Setter"
              style={{ width: '100%', height: '580px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 8: HEALTH TIPS PREVIEW
          ====================================================== */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-8)' }}>
            <div>
              <p className="label" style={{ marginBottom: 'var(--space-3)' }}>PET WELLNESS</p>
              <h2>Health Tips & Guides</h2>
            </div>
            <Link to="/health-tips" className="btn btn-outline btn-sm">
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
            {[
              { img: '/statics/Si/IMG_9597.JPG', cat: 'HYGIENE', title: 'Dental Care 101: Keeping Your Pet\'s Smile Healthy', read: '5 min read' },
              { img: '/statics/Si/IMG_9595.JPG', cat: 'NUTRITION', title: 'Why Cats Need a Different Diet Than Dogs', read: '4 min read' },
              { img: '/statics/Si/IMG_9601.JPG', cat: 'VACCINATION', title: 'The Complete Puppy Vaccination Schedule', read: '6 min read' },
            ].map((tip, i) => (
              <Link to="/health-tips" key={i} className="card" style={{ cursor: 'pointer' }}>
                <img src={tip.img} alt={tip.title} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                <div style={{ padding: 'var(--space-5)' }}>
                  <span className="label" style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-3)', display: 'block' }}>{tip.cat}</span>
                  <h4 style={{ marginBottom: 'var(--space-3)', lineHeight: 1.35 }}>{tip.title}</h4>
                  <span className="text-sm text-muted">{tip.read}</span>
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
          <Link to="/auth" className="btn btn-lg btn-accent">
            Book Your First Visit <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ======================================================
          SECTION 10: MAP / LOCATION
          ====================================================== */}
      <section className="section" style={{ background: 'var(--color-warm-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)', maxWidth: '500px', margin: '0 auto var(--space-8)' }}>
            <p className="label" style={{ marginBottom: 'var(--space-3)' }}>FIND US</p>
            <h2>Visit Our Clinic</h2>
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
