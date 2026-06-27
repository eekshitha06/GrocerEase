import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { t } = useLanguage();
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:5000/api/products');
      setFeaturedProducts(data.slice(0, 4)); // Show 4 products
    };
    fetchProducts();
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-primary) 100%)',
        borderRadius: 'var(--radius-lg)',
        padding: '4rem 2rem',
        textAlign: 'center',
        marginBottom: '4rem',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--primary-color)' }}>
          {t('welcome')}
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          {t('heroSubtitle')}
        </p>
        <Link to="/shop" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
          {t('shop')} <ArrowRight size={20} />
        </Link>
      </section>

      {/* Featured Products */}
      <section className="container mb-4">
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>{t('featuredProducts')}</h2>
        <div className="grid grid-cols-4" style={{ gap: '2rem' }}>
          {featuredProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
