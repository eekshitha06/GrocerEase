import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { Plus } from 'lucide-react';

const ProductCard = ({ product, showToast }) => {
  const { addToCart } = useCart();
  const { t } = useLanguage();

  const handleAddToCart = async () => {
    const success = await addToCart(product._id);
    if (success && showToast) {
        showToast(`${product.name} added to cart`);
    }
  };

  return (
    <div className="card animate-fade-in" style={{ display: 'flex', flexDirection: 'column' }}>
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{product.name}</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', flex: 1 }}>{product.description}</p>
        <div className="flex justify-between items-center" style={{ marginTop: 'auto' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
            ${product.price.toFixed(2)}
          </span>
          <button 
            className="btn btn-primary" 
            onClick={handleAddToCart}
            style={{ padding: '0.5rem 1rem' }}
          >
            <Plus size={18} /> {t('addToCart')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
