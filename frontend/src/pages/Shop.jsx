import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import CategorySidebar from '../components/CategorySidebar';
import { Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Shop = ({ showToast }) => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let url = `http://localhost:5000/api/products?keyword=${keyword}`;
        if (selectedCategory) {
          url = `http://localhost:5000/api/products/category/${selectedCategory}`;
        }
        const { data } = await axios.get(url);
        
        // If keyword is set and category is also set, filter client side
        if (keyword && selectedCategory) {
           const filtered = data.filter(p => p.name.toLowerCase().includes(keyword.toLowerCase()));
           setProducts(filtered);
        } else {
           setProducts(data);
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    // Debounce search slightly
    const delayDebounceFn = setTimeout(() => {
      fetchProducts();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [keyword, selectedCategory]);

  return (
    <div className="container animate-fade-in flex flex-col-md" style={{ gap: '2rem' }}>
      <CategorySidebar 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
      
      <div style={{ flex: 1 }}>
        <div style={{ marginBottom: '2rem', position: 'relative' }}>
          <input 
            type="text" 
            className="input" 
            placeholder={t('search')} 
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            style={{ paddingLeft: '2.5rem' }}
          />
          <Search size={20} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        </div>

        {loading ? (
          <div className="spinner"></div>
        ) : products.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
            <h2>No products found</h2>
          </div>
        ) : (
          <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
            {products.map(product => (
              <ProductCard key={product._id} product={product} showToast={showToast} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
