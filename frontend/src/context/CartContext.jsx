import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const { user } = useAuth();

  const fetchCart = async () => {
    if (!user) {
      setCartItems([]);
      return;
    }
    try {
      const { data } = await axios.get('http://localhost:5000/api/cart');
      setCartItems(data.items);
    } catch (error) {
      console.error('Error fetching cart', error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [user]);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    setCartTotal(total);
  }, [cartItems]);

  const addToCart = async (productId, quantity = 1) => {
    if (!user) {
      // Logic for guest cart could go here. For now, prompt login.
      alert('Please login to add items to cart');
      return false;
    }
    try {
      const { data } = await axios.post('http://localhost:5000/api/cart', { productId, quantity });
      setCartItems(data.items);
      return true;
    } catch (error) {
      console.error('Error adding to cart', error);
      return false;
    }
  };

  const removeFromCart = async (productId) => {
    if (!user) return;
    try {
      const { data } = await axios.delete(`http://localhost:5000/api/cart/${productId}`);
      setCartItems(data.items);
    } catch (error) {
      console.error('Error removing from cart', error);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    if (!user || quantity < 1) return;
    try {
      const { data } = await axios.put(`http://localhost:5000/api/cart/${productId}`, { quantity });
      setCartItems(data.items);
    } catch (error) {
      console.error('Error updating quantity', error);
    }
  };

  const clearCart = async () => {
    if (!user) return;
    try {
      await axios.delete('http://localhost:5000/api/cart/clear');
      setCartItems([]);
    } catch (error) {
      console.error('Error clearing cart', error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, cartTotal, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
