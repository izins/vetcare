import Card from '../ui/Card';
import { Calendar, Clock, Activity } from 'lucide-react';

export default function AppointmentCard({ appointment }) {
  const dateObj = new Date(appointment.date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('default', { month: 'short' });
  const time = dateObj.toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit' });

  const getStatusColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'confirmed': return 'var(--success)';
      case 'pending': return 'var(--warning)';
      case 'completed': return 'var(--text-tertiary)';
      default: return 'var(--text-primary)';
    }
  };

  return (
    <Card style={{ display: 'flex', gap: 'var(--gap-md)', alignItems: 'center' }}>
      {/* Date Block */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '80px',
        height: '80px',
        backgroundColor: 'var(--primary-50)',
        borderRadius: 'var(--radius-md)',
        color: 'var(--primary-700)'
      }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 700, lineHeight: 1 }}>{day}</span>
        <span style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase' }}>{month}</span>
      </div>

      {/* Info Block */}
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <h4 style={{ margin: '0 0 4px 0' }}>{appointment.animals?.name || 'Your Pet'}</h4>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            padding: '4px 12px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: `${getStatusColor(appointment.status)}20`,
            color: getStatusColor(appointment.status),
            textTransform: 'capitalize'
          }}>
            {appointment.status || 'Pending'}
          </span>
        </div>
        
        <div style={{ display: 'flex', gap: 'var(--gap-sm)', color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Activity size={14} /> {appointment.type}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={14} /> {time}
          </span>
        </div>
      </div>
    </Card>
  );
}
