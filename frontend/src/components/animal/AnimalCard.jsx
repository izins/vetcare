import Card from '../ui/Card';

export default function AnimalCard({ animal, onClick }) {
  return (
    <Card 
      style={{ 
        cursor: 'pointer', 
        display: 'flex', 
        alignItems: 'center', 
        gap: 'var(--gap-sm)' 
      }} 
      className="animal-card"
    >
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        backgroundColor: 'var(--surface-300)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        overflow: 'hidden'
      }}>
        {animal.species === 'Dog' ? '🐶' : animal.species === 'Cat' ? '🐱' : '🐾'}
      </div>
      <div>
        <h4 style={{ margin: 0 }}>{animal.name}</h4>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>
          {animal.breed} • {animal.age} years
        </p>
      </div>
    </Card>
  );
}
