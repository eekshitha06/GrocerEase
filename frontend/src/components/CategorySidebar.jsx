import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLanguage } from '../context/LanguageContext';

const CategorySidebar = ({ onSelectCategory, selectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get('http://localhost:5000/api/products/categories');
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <div style={{ minWidth: '250px', backgroundColor: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>{t('categories')}</h3>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <li 
          onClick={() => onSelectCategory('')}
          style={{ 
            padding: '0.75rem', 
            borderRadius: 'var(--radius-md)', 
            cursor: 'pointer',
            backgroundColor: selectedCategory === '' ? 'var(--primary-color)' : 'transparent',
            color: selectedCategory === '' ? 'white' : 'var(--text-primary)',
            transition: 'var(--transition)'
          }}
        >
          All Products
        </li>
        {categories.map((category) => (
          <li 
            key={category._id}
            onClick={() => onSelectCategory(category._id)}
            style={{ 
              padding: '0.75rem', 
              borderRadius: 'var(--radius-md)', 
              cursor: 'pointer',
              backgroundColor: selectedCategory === category._id ? 'var(--primary-color)' : 'transparent',
              color: selectedCategory === category._id ? 'white' : 'var(--text-primary)',
              transition: 'var(--transition)'
            }}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
