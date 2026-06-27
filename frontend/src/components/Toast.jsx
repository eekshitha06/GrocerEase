import { useEffect } from 'react';
import { X } from 'lucide-react';

const Toast = ({ message, onClose, type = 'success' }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'var(--primary-color)' : 'var(--danger-color)';

  return (
    <div className="animate-fade-in" style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: bgColor,
      color: 'white',
      padding: '1rem 1.5rem',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      zIndex: 1000
    }}>
      <span style={{ fontWeight: '600' }}>{message}</span>
      <button onClick={onClose} style={{ color: 'white' }}>
        <X size={18} />
      </button>
    </div>
  );
};

export default Toast;
