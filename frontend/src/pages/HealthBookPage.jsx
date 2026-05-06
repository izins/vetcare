import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Syringe, Stethoscope, Info, Calendar, Activity, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getUserAnimals } from '../services/animals';
import { useAuth } from '../services/auth';

export default function HealthBookPage() {
  const { id } = useParams();
  const [activePage, setActivePage] = useState(0);

  const { user: currentUser } = useAuth();
  const currentUserId = currentUser?.id || '98681655-9f0b-4f6d-9dbb-0c90aa80e1fc';

  const { data: dbAnimals = [] } = useQuery({
    queryKey: ['animals', currentUserId],
    queryFn: () => getUserAnimals(currentUserId),
  });

  // Find the real animal or fallback to mock if not found
  const realAnimal = dbAnimals.find(a => String(a.id) === String(id));

  const getDefaultImage = (espece) => {
    switch (espece?.toLowerCase()) {
      case 'cat': return 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=150&q=80';
      case 'bird': return 'https://images.unsplash.com/photo-1552728089-571eb144586f?auto=format&fit=crop&w=150&q=80';
      case 'rabbit': return 'https://images.unsplash.com/photo-1585110396000-c9fd7e4815b3?auto=format&fit=crop&w=150&q=80';
      default: return 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=150&q=80';
    }
  };

  const pet = realAnimal ? {
    id: realAnimal.id,
    name: realAnimal.name,
    species: realAnimal.espece || realAnimal.species || 'Unknown',
    breed: realAnimal.race || realAnimal.breed || 'Unknown',
    age: realAnimal.age || 'Unknown',
    weight: 'Unknown',
    gender: 'Unknown',
    chipNumber: 'Not Registered',
    birthDate: 'Unknown',
    img: realAnimal.img || getDefaultImage(realAnimal.espece || realAnimal.species),
  } : {
    id,
    name: id === '2' ? 'Milo' : 'Luna',
    species: id === '2' ? 'Cat' : 'Dog',
    breed: id === '2' ? 'British Shorthair' : 'Golden Retriever',
    age: id === '2' ? 2 : 3,
    weight: id === '2' ? '4.5 kg' : '28 kg',
    gender: id === '2' ? 'Male' : 'Female',
    chipNumber: id === '2' ? '250269600123456' : '250269600789012',
    birthDate: id === '2' ? '12 May 2024' : '04 Aug 2023',
    img: id === '2' ? '/statics/Si/IMG_9595.JPG' : '/statics/Si/IMG_9611.JPG',
  };

  const pages = [
    { id: 'general', label: 'General Info', icon: Info },
    { id: 'vaccines', label: 'Vaccinations', icon: Syringe },
    { id: 'consultations', label: 'Consultations', icon: Stethoscope },
  ];

  const vaccinations = [
    { name: 'Rabies', date: '10 Jan 2026', nextDue: '10 Jan 2027', status: 'valid', vet: 'Dr. James Whitmore' },
    { name: 'DHPP', date: '15 Mar 2026', nextDue: '15 Mar 2027', status: 'valid', vet: 'Dr. Sarah Chen' },
    { name: 'Bordetella', date: '05 May 2025', nextDue: '05 May 2026', status: 'expiring', vet: 'Dr. Maria Lopez' },
  ];

  const consultations = [
    { date: '15 Mar 2026', reason: 'Annual Checkup', notes: 'Healthy. Weight is stable. Teeth are clean.', vet: 'Dr. Sarah Chen' },
    { date: '20 Nov 2025', reason: 'Upset Stomach', notes: 'Prescribed probiotics. Recommended bland diet for 3 days.', vet: 'Dr. James Whitmore' },
    { date: '04 Aug 2025', reason: 'Vaccination Booster', notes: 'Administered core vaccines. No adverse reactions.', vet: 'Dr. Maria Lopez' },
  ];

  return (
    <div style={{ background: 'var(--color-cream)', minHeight: '100vh', paddingBottom: 'var(--space-11)' }}>
      
      {/* HEADER */}
      <section style={{ 
        background: '#1a3a2e', 
        paddingTop: 'calc(var(--nav-height) + var(--space-6))', 
        paddingBottom: 'var(--space-9)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, opacity: 0.1, background: 'url(/statics/Si/IMG_9589.JPG) center/cover' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link to="/dashboard" className="btn btn-ghost" style={{ color: '#fff', padding: 0, marginBottom: 'var(--space-5)' }}>
            <ChevronLeft size={20} /> Back to Dashboard
          </Link>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
            <img src={pet.img} alt={pet.name} style={{ 
              width: '120px', height: '120px', borderRadius: 'var(--radius-full)', 
              objectFit: 'cover', border: '4px solid rgba(255,255,255,0.2)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
            }} />
            <div>
              <p style={{ color: '#a8d5c9', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>
                CARNET DE SANTÉ
              </p>
              <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'var(--space-2)' }}>
                {pet.name}
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.0625rem' }}>
                {pet.breed} · {pet.age} years old · ID: {pet.chipNumber}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOOK LAYOUT */}
      <div className="container" style={{ marginTop: 'calc(-1 * var(--space-6))', position: 'relative', zIndex: 2 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '240px 1fr', 
          background: 'var(--color-warm-white)',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--color-sand)',
          minHeight: '600px'
        }}>
          
          {/* LEFT: Book Navigation (Tabs) */}
          <div style={{ 
            background: '#FAF8F5', 
            borderRight: '1px solid var(--color-sand)',
            padding: 'var(--space-6) 0'
          }}>
            <h3 style={{ padding: '0 var(--space-5)', marginBottom: 'var(--space-5)', fontSize: '1.25rem' }}>Index</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {pages.map((page, idx) => {
                const Icon = page.icon;
                const isActive = activePage === idx;
                return (
                  <button key={page.id} onClick={() => setActivePage(idx)} style={{
                    display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
                    padding: '16px var(--space-5)',
                    background: isActive ? '#fff' : 'transparent',
                    border: 'none',
                    borderRight: isActive ? '3px solid var(--color-accent)' : '3px solid transparent',
                    color: isActive ? 'var(--color-accent)' : 'var(--color-body)',
                    fontWeight: isActive ? 600 : 500,
                    fontSize: '1rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}>
                    <Icon size={20} />
                    {page.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* RIGHT: Page Content */}
          <div style={{ padding: 'var(--space-8)', position: 'relative', background: '#fff' }}>
            
            {/* Page 1: General Info */}
            <div style={{ display: activePage === 0 ? 'block' : 'none', animation: 'fadeInUp 0.4s ease-out' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '2px solid var(--color-sand)', paddingBottom: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
                <h2>General Information</h2>
                <ShieldCheck size={32} color="var(--color-accent)" opacity={0.3} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
                {[
                  { label: 'Species', value: pet.species },
                  { label: 'Breed', value: pet.breed },
                  { label: 'Gender', value: pet.gender },
                  { label: 'Age', value: `${pet.age} years` },
                  { label: 'Date of Birth', value: pet.birthDate },
                  { label: 'Weight', value: pet.weight },
                  { label: 'Microchip ID', value: pet.chipNumber },
                  { label: 'Blood Type', value: 'DEA 1.1 Positive' },
                ].map((item, i) => (
                  <div key={i} style={{ 
                    padding: 'var(--space-4)', 
                    background: 'var(--color-cream)', 
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-sand-dark)'
                  }}>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{item.label}</p>
                    <p style={{ fontSize: '1.125rem', color: 'var(--color-dark)', fontWeight: 500 }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Page 2: Vaccinations */}
            <div style={{ display: activePage === 1 ? 'block' : 'none', animation: 'fadeInUp 0.4s ease-out' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '2px solid var(--color-sand)', paddingBottom: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
                <h2>Vaccination Record</h2>
                <Syringe size={32} color="var(--color-error)" opacity={0.3} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {vaccinations.map((vac, i) => (
                  <div key={i} style={{ 
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: 'var(--space-5)', 
                    background: vac.status === 'expiring' ? '#FDF6EC' : 'var(--color-cream)', 
                    borderRadius: 'var(--radius-lg)',
                    border: `1px solid ${vac.status === 'expiring' ? '#E8A849' : 'var(--color-sand-dark)'}`
                  }}>
                    <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
                      <div style={{ 
                        width: '48px', height: '48px', borderRadius: 'var(--radius-md)', 
                        background: vac.status === 'expiring' ? '#FAD5A5' : '#D1E8E2',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: vac.status === 'expiring' ? '#C27A12' : 'var(--color-accent)'
                      }}>
                        <ShieldCheck size={24} />
                      </div>
                      <div>
                        <h4 style={{ marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {vac.name}
                          {vac.status === 'expiring' && <span style={{ fontSize: '0.65rem', background: '#E8A849', color: '#fff', padding: '2px 8px', borderRadius: '999px', textTransform: 'uppercase', fontWeight: 700 }}>Due Soon</span>}
                        </h4>
                        <p style={{ fontSize: '0.875rem', color: 'var(--color-body)' }}>Administered: {vac.date} · By {vac.vet}</p>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Next Due</p>
                      <p style={{ fontSize: '1.0625rem', color: vac.status === 'expiring' ? '#E8A849' : 'var(--color-dark)', fontWeight: 700 }}>{vac.nextDue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Page 3: Consultations */}
            <div style={{ display: activePage === 2 ? 'block' : 'none', animation: 'fadeInUp 0.4s ease-out' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '2px solid var(--color-sand)', paddingBottom: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
                <h2>Medical History</h2>
                <Stethoscope size={32} color="var(--color-accent)" opacity={0.3} />
              </div>

              <div style={{ position: 'relative', paddingLeft: 'var(--space-4)' }}>
                {/* Timeline line */}
                <div style={{ position: 'absolute', top: '10px', bottom: '10px', left: '7px', width: '2px', background: 'var(--color-sand)' }} />
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                  {consultations.map((visit, i) => (
                    <div key={i} style={{ position: 'relative', paddingLeft: 'var(--space-5)' }}>
                      {/* Timeline dot */}
                      <div style={{ position: 'absolute', top: '6px', left: '-21px', width: '14px', height: '14px', borderRadius: '50%', background: 'var(--color-accent)', border: '3px solid #fff', boxShadow: '0 0 0 1px var(--color-sand)' }} />
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-2)' }}>
                        <div>
                          <h4 style={{ color: 'var(--color-dark)', marginBottom: '2px' }}>{visit.reason}</h4>
                          <p style={{ fontSize: '0.875rem', color: 'var(--color-accent)', fontWeight: 500 }}>{visit.vet}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-muted)', fontSize: '0.875rem', fontWeight: 500 }}>
                          <Calendar size={14} /> {visit.date}
                        </div>
                      </div>
                      <div style={{ 
                        padding: 'var(--space-4)', 
                        background: 'var(--color-cream)', 
                        borderRadius: 'var(--radius-lg)', 
                        border: '1px solid var(--color-sand-dark)',
                        fontSize: '0.9375rem',
                        lineHeight: 1.6,
                        color: 'var(--color-body)'
                      }}>
                        {visit.notes}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pagination Controls */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'var(--space-8)', paddingTop: 'var(--space-5)', borderTop: '1px solid var(--color-sand)' }}>
              <button 
                onClick={() => setActivePage(Math.max(0, activePage - 1))}
                disabled={activePage === 0}
                className="btn btn-ghost" 
                style={{ opacity: activePage === 0 ? 0.3 : 1, cursor: activePage === 0 ? 'not-allowed' : 'pointer' }}
              >
                <ChevronLeft size={18} /> Previous Page
              </button>
              <button 
                onClick={() => setActivePage(Math.min(pages.length - 1, activePage + 1))}
                disabled={activePage === pages.length - 1}
                className="btn btn-ghost" 
                style={{ opacity: activePage === pages.length - 1 ? 0.3 : 1, cursor: activePage === pages.length - 1 ? 'not-allowed' : 'pointer' }}
              >
                Next Page <ArrowRight size={18} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
