import { Clock, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';

const articles = [
  {
    cat: 'NUTRITION',
    title: 'Why Your Cat Needs a Different Diet Than Your Dog',
    excerpt: 'Cats are obligate carnivores with unique nutritional requirements. Learn why sharing food between species can lead to serious health issues.',
    img: '/statics/Si/IMG_9595.JPG',
    read: '4 min',
    color: '#4A7C6F',
  },
  {
    cat: 'HYGIENE',
    title: 'Dental Care 101: Keeping Your Pet\'s Smile Healthy',
    excerpt: 'Dental disease affects over 80% of pets by age 3. Discover simple daily habits that can prevent painful infections.',
    img: '/statics/Si/IMG_9597.JPG',
    read: '5 min',
    color: '#6B5BAE',
  },
  {
    cat: 'VACCINATION',
    title: 'The Complete Puppy Vaccination Schedule for 2026',
    excerpt: 'From distemper to rabies, understanding when and why each vaccine matters for your puppy\'s immune system.',
    img: '/statics/Si/IMG_9601.JPG',
    read: '6 min',
    color: '#C45C5C',
  },
  {
    cat: 'WELLNESS',
    title: 'Recognizing Signs of Pain in Your Pet',
    excerpt: 'Animals instinctively hide pain. Learn the subtle behavioral cues that indicate your pet might be suffering in silence.',
    img: '/statics/Si/IMG_9609.JPG',
    read: '3 min',
    color: '#E8A849',
  },
  {
    cat: 'EXERCISE',
    title: 'How Much Exercise Does Your Dog Really Need?',
    excerpt: 'From high-energy breeds to senior dogs, tailoring your exercise routine to your pet\'s specific needs is crucial.',
    img: '/statics/Si/IMG_9611.JPG',
    read: '4 min',
    color: '#5B7BAE',
  },
  {
    cat: 'SEASONAL',
    title: 'Summer Safety: Protecting Pets from Heat',
    excerpt: 'Heatstroke can be fatal in minutes. Essential tips for keeping your pets safe during hot weather months.',
    img: '/statics/Si/IMG_9604.JPG',
    read: '5 min',
    color: '#AE5B7B',
  },
];

export default function HealthTipsPage() {
  return (
    <div>

      {/* ====== HERO BANNER ====== */}
      <section style={{
        position: 'relative',
        paddingTop: 'calc(var(--nav-height) + var(--space-9))',
        paddingBottom: 'var(--space-10)',
        background: '#1a3a2e',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', top: '-80px', right: '20%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(168,213,201,0.06)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '30%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(168,213,201,0.04)', filter: 'blur(60px)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 'var(--space-4)' }}>
            PET WELLNESS
          </p>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', textShadow: '0 2px 20px rgba(0,0,0,0.3)', marginBottom: 'var(--space-4)' }}>
            Health Tips & Guides
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.0625rem', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto' }}>
            Expert advice from our veterinary team to help you provide the best care for your companion.
          </p>
        </div>
      </section>

      {/* ====== CONTENT ====== */}
      <div className="container" style={{ marginTop: 'calc(-1 * var(--space-8))', position: 'relative', zIndex: 2, paddingBottom: 'var(--space-10)' }}>

        {/* Featured Article */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          marginBottom: 'var(--space-9)',
          background: 'var(--color-warm-white)',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--color-sand)',
          cursor: 'pointer',
          transition: 'all 0.3s var(--ease-out)',
        }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-xl)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img src={articles[0].img} alt={articles[0].title} style={{ width: '100%', height: '420px', objectFit: 'cover', transition: 'transform 0.5s var(--ease-out)' }} />
            <div style={{
              position: 'absolute', top: 'var(--space-4)', left: 'var(--space-4)',
              display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
              background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)',
              padding: '6px 16px', borderRadius: 'var(--radius-full)',
              color: '#fff', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em',
            }}>
              <TrendingUp size={12} /> FEATURED
            </div>
          </div>
          <div style={{ padding: 'var(--space-7)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="label" style={{ color: articles[0].color, marginBottom: 'var(--space-4)' }}>{articles[0].cat}</span>
            <h2 style={{ marginBottom: 'var(--space-4)', lineHeight: 1.2 }}>{articles[0].title}</h2>
            <p style={{ lineHeight: 1.7, marginBottom: 'var(--space-6)', color: 'var(--color-body)' }}>{articles[0].excerpt}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)' }}>
              <span className="text-sm text-muted" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={14} /> {articles[0].read}
              </span>
              <span className="btn btn-ghost btn-sm" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>
                Read Article <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>

        {/* Section title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: 'var(--radius-md)',
            background: '#E8F0ED', color: '#4A7C6F',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <BookOpen size={18} />
          </div>
          <h3 style={{ fontSize: '1.15rem' }}>All Articles</h3>
          <div style={{ flex: 1, height: '1px', background: 'var(--color-sand)', marginLeft: 'var(--space-3)' }} />
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
          {articles.slice(1).map((a, i) => (
            <div key={i} style={{
              background: 'var(--color-warm-white)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-xs)',
              border: '1px solid var(--color-sand)',
              transition: 'all 0.3s var(--ease-out)',
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = a.color + '40'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-xs)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--color-sand)'; }}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={a.img} alt={a.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', bottom: 'var(--space-3)', right: 'var(--space-3)',
                  background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
                  padding: '4px 12px', borderRadius: 'var(--radius-full)',
                  color: '#fff', fontSize: '0.6875rem', fontWeight: 500,
                  display: 'flex', alignItems: 'center', gap: '4px',
                }}>
                  <Clock size={10} /> {a.read}
                </div>
              </div>
              <div style={{ padding: 'var(--space-5)' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '2px 12px', borderRadius: 'var(--radius-full)',
                  background: a.color + '15', color: a.color,
                  fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em',
                  marginBottom: 'var(--space-3)',
                }}>
                  {a.cat}
                </span>
                <h4 style={{ marginBottom: 'var(--space-3)', lineHeight: 1.35 }}>{a.title}</h4>
                <p className="text-sm" style={{ lineHeight: 1.7, color: 'var(--color-body)' }}>{a.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
