import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Sun, Moon, LogOut, User, Menu } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { lang, changeLanguage, t } = useLanguage();
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItemCount = cartItems?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      backgroundColor: 'var(--bg-secondary)',
      borderBottom: '1px solid var(--border-color)',
      padding: '1rem',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div className="container flex justify-between items-center">
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
          Grocery Ease
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" style={{ display: 'none' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu />
        </button>

        <div className="flex items-center" style={{ gap: '1.5rem' }}>
          <Link to="/" className="hover:text-primary">{t('home')}</Link>
          <Link to="/shop" className="hover:text-primary">{t('shop')}</Link>

          <select 
            value={lang} 
            onChange={(e) => changeLanguage(e.target.value)}
            style={{ 
              background: 'var(--bg-primary)', 
              color: 'var(--text-primary)', 
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '0.25rem'
            }}
          >
            <option value="en">EN</option>
            <option value="te">TE</option>
            <option value="hi">HI</option>
          </select>

          <button onClick={toggleTheme} title="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <Link to="/cart" style={{ position: 'relative' }}>
            <ShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span style={{
                position: 'absolute', top: '-8px', right: '-8px',
                backgroundColor: 'var(--danger-color)', color: 'white',
                borderRadius: '50%', padding: '0.1rem 0.4rem', fontSize: '0.75rem',
                fontWeight: 'bold'
              }}>
                {cartItemCount}
              </span>
            )}
          </Link>

          {user ? (
            <div className="flex items-center" style={{ gap: '1rem' }}>
              <Link to="/profile" title={t('profile')}><User size={20} /></Link>
              <button onClick={logout} title={t('logout')} style={{ color: 'var(--danger-color)' }}>
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
              {t('login')}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
