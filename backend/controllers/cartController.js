import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

// @desc    Get user cart
// @route   GET /api/cart
// @access  Private
const getCart = async (req, res) => {
  let cart = await Cart.findOne({ user: req.user._id }).populate('items.product');

  if (!cart) {
    cart = await Cart.create({ user: req.user._id, items: [] });
  }

  res.json(cart);
};

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  let cart = await Cart.findOne({ user: req.user._id });
  
  if (!cart) {
    cart = await Cart.create({ user: req.user._id, items: [] });
  }

  const itemIndex = cart.items.findIndex(p => p.product.toString() === productId);

  if (itemIndex > -1) {
    // Product exists in the cart, update the quantity
    cart.items[itemIndex].quantity += Number(quantity);
  } else {
    // Product does not exist in cart, add new item
    cart.items.push({ product: productId, quantity });
  }

  await cart.save();
  cart = await cart.populate('items.product');

  res.json(cart);
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/:productId
// @access  Private
const removeFromCart = async (req, res) => {
  const productId = req.params.productId;

  let cart = await Cart.findOne({ user: req.user._id });

  if (cart) {
    cart.items = cart.items.filter(item => item.product.toString() !== productId);
    await cart.save();
    cart = await cart.populate('items.product');
    res.json(cart);
  } else {
    res.status(404).json({ message: 'Cart not found' });
  }
};

// @desc    Update cart item quantity
// @route   PUT /api/cart/:productId
// @access  Private
const updateCartItemQuantity = async (req, res) => {
  const productId = req.params.productId;
  const { quantity } = req.body;

  let cart = await Cart.findOne({ user: req.user._id });

  if (cart) {
    const itemIndex = cart.items.findIndex(p => p.product.toString() === productId);
    if (itemIndex > -1) {
       cart.items[itemIndex].quantity = Number(quantity);
       await cart.save();
       cart = await cart.populate('items.product');
       res.json(cart);
    } else {
       res.status(404).json({ message: 'Item not found in cart' });
    }
  } else {
    res.status(404).json({ message: 'Cart not found' });
  }
};

// @desc    Clear cart (checkout)
// @route   DELETE /api/cart/clear
// @access  Private
const clearCart = async (req, res) => {
  let cart = await Cart.findOne({ user: req.user._id });
  if (cart) {
      cart.items = [];
      await cart.save();
      res.json({ message: 'Cart cleared' });
  } else {
      res.status(404).json({ message: 'Cart not found' });
  }
}

export { getCart, addToCart, removeFromCart, updateCartItemQuantity, clearCart };
