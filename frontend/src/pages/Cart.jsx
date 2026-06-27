import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const { t } = useLanguage();

  if (cartItems.length === 0) {
    return (
      <div className="container animate-fade-in text-center" style={{ padding: '4rem 0' }}>
        <ShoppingCart size={64} style={{ margin: '0 auto 1rem', color: 'var(--text-muted)' }} />
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{t('emptyCart')}</h2>
        <Link to="/shop" className="btn btn-primary">{t('continueShopping')}</Link>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in">
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>{t('cart')}</h1>
      
      <div className="flex flex-col-md" style={{ gap: '2rem' }}>
        <div style={{ flex: 2 }}>
          {cartItems.map((item) => (
            <div key={item.product._id} className="card flex items-center justify-between" style={{ padding: '1rem', marginBottom: '1rem' }}>
              <div className="flex items-center" style={{ gap: '1rem' }}>
                <img src={item.product.image} alt={item.product.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
                <div>
                  <h3 style={{ fontWeight: 'bold' }}>{item.product.name}</h3>
                  <p style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>${item.product.price.toFixed(2)}</p>
                </div>
              </div>
              
              <div className="flex items-center" style={{ gap: '1rem' }}>
                <div className="flex items-center" style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                  <button onClick={() => updateQuantity(item.product._id, item.quantity - 1)} style={{ padding: '0.5rem' }}>
                    <Minus size={16} />
                  </button>
                  <span style={{ padding: '0 1rem', fontWeight: 'bold' }}>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product._id, item.quantity + 1)} style={{ padding: '0.5rem' }}>
                    <Plus size={16} />
                  </button>
                </div>
                
                <button onClick={() => removeFromCart(item.product._id)} style={{ color: 'var(--danger-color)', padding: '0.5rem' }}>
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ flex: 1 }}>
          <div className="card" style={{ padding: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
              Order Summary
            </h2>
            <div className="flex justify-between mb-4">
              <span style={{ color: 'var(--text-secondary)' }}>Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)} items)</span>
              <span style={{ fontWeight: 'bold' }}>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4" style={{ fontSize: '1.25rem', fontWeight: 'bold', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
              <span>{t('total')}</span>
              <span style={{ color: 'var(--primary-color)' }}>${cartTotal.toFixed(2)}</span>
            </div>
            <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={() => {
              alert('Checkout complete!');
              clearCart();
            }}>
              {t('checkout')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Forgot ShoppingCart import in this file so dummy declaring
import { ShoppingCart } from 'lucide-react';
export default Cart;
