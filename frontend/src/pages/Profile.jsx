import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Profile = () => {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const { theme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 0' }}>
      <div className="card" style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          {t('profile')}
        </h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Name</label>
            <p style={{ fontSize: '1.25rem', fontWeight: '500' }}>{user.name}</p>
          </div>
          <div>
            <label style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Email</label>
            <p style={{ fontSize: '1.25rem', fontWeight: '500' }}>{user.email}</p>
          </div>
          <div>
            <label style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Role</label>
            <p style={{ fontSize: '1.25rem', fontWeight: '500', color: user.isAdmin ? 'var(--primary-color)' : 'var(--text-primary)' }}>
              {user.isAdmin ? 'Administrator' : 'Customer'}
            </p>
          </div>
          <div>
            <label style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Current Theme</label>
            <p style={{ fontSize: '1.25rem', fontWeight: '500', textTransform: 'capitalize' }}>{theme} Mode</p>
          </div>
          
          <button 
            className="btn btn-danger" 
            onClick={logout} 
            style={{ width: 'fit-content', marginTop: '1rem' }}
          >
            {t('logout')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
