import { Clock, ArrowRight } from 'lucide-react';

const articles = [
  {
    cat: 'NUTRITION',
    title: 'Why Your Cat Needs a Different Diet Than Your Dog',
    excerpt: 'Cats are obligate carnivores with unique nutritional requirements. Learn why sharing food between species can lead to serious health issues.',
    img: '/statics/Si/IMG_9595.JPG',
    read: '4 min',
  },
  {
    cat: 'HYGIENE',
    title: 'Dental Care 101: Keeping Your Pet\'s Smile Healthy',
    excerpt: 'Dental disease affects over 80% of pets by age 3. Discover simple daily habits that can prevent painful infections.',
    img: '/statics/Si/IMG_9597.JPG',
    read: '5 min',
  },
  {
    cat: 'VACCINATION',
    title: 'The Complete Puppy Vaccination Schedule for 2026',
    excerpt: 'From distemper to rabies, understanding when and why each vaccine matters for your puppy\'s immune system.',
    img: '/statics/Si/IMG_9601.JPG',
    read: '6 min',
  },
  {
    cat: 'WELLNESS',
    title: 'Recognizing Signs of Pain in Your Pet',
    excerpt: 'Animals instinctively hide pain. Learn the subtle behavioral cues that indicate your pet might be suffering in silence.',
    img: '/statics/Si/IMG_9609.JPG',
    read: '3 min',
  },
  {
    cat: 'EXERCISE',
    title: 'How Much Exercise Does Your Dog Really Need?',
    excerpt: 'From high-energy breeds to senior dogs, tailoring your exercise routine to your pet\'s specific needs is crucial.',
    img: '/statics/Si/IMG_9611.JPG',
    read: '4 min',
  },
  {
    cat: 'SEASONAL',
    title: 'Summer Safety: Protecting Pets from Heat',
    excerpt: 'Heatstroke can be fatal in minutes. Essential tips for keeping your pets safe during hot weather months.',
    img: '/statics/Si/IMG_9604.JPG',
    read: '5 min',
  },
];

export default function HealthTipsPage() {
  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + var(--space-7))' }}>
      <div className="container" style={{ paddingBottom: 'var(--space-10)' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-9)', maxWidth: '600px', margin: '0 auto var(--space-9)' }}>
          <p className="label" style={{ marginBottom: 'var(--space-3)' }}>PET WELLNESS</p>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'var(--space-4)' }}>Health Tips & Guides</h1>
          <p>Expert advice from our veterinary team to help you provide the best care for your companion.</p>
        </div>

        {/* Featured Article */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: 'var(--space-6)',
          marginBottom: 'var(--space-9)',
          background: 'var(--color-warm-white)',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-sm)',
          cursor: 'pointer',
          transition: 'all 0.3s var(--ease-out)',
        }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          <img src={articles[0].img} alt={articles[0].title} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          <div style={{ padding: 'var(--space-7)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="label" style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-4)' }}>{articles[0].cat} · FEATURED</span>
            <h2 style={{ marginBottom: 'var(--space-4)' }}>{articles[0].title}</h2>
            <p style={{ lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>{articles[0].excerpt}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
              <span className="text-sm text-muted" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {articles[0].read}</span>
              <span className="btn btn-ghost btn-sm" style={{ color: 'var(--color-accent)' }}>Read More <ArrowRight size={14} /></span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
          {articles.slice(1).map((a, i) => (
            <div key={i} className="card" style={{ cursor: 'pointer' }}>
              <img src={a.img} alt={a.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: 'var(--space-5)' }}>
                <span className="label" style={{ color: 'var(--color-accent)', display: 'block', marginBottom: 'var(--space-3)' }}>{a.cat}</span>
                <h4 style={{ marginBottom: 'var(--space-3)', lineHeight: 1.35 }}>{a.title}</h4>
                <p className="text-sm" style={{ lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>{a.excerpt}</p>
                <span className="text-xs text-muted" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> {a.read}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
