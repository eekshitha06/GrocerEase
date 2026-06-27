import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import User from '../models/User.js';
import Product from '../models/Product.js';
import Category from '../models/Category.js';
import Cart from '../models/Cart.js';
import categories from './categories.js';
import products from './products.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    if (mongoose.connection && mongoose.connection.db) {
       await mongoose.connection.db.dropDatabase();
    }
    await Cart.deleteMany();
    await Product.deleteMany();
    await Category.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany([
      { name: 'Admin User', email: 'admin@example.com', password: 'password', isAdmin: true },
      { name: 'John Doe', email: 'john@example.com', password: 'password' }
    ]);

    const createdCategories = await Category.insertMany(categories);

    const productsWithCategory = products.map(product => {
      const matchCat = createdCategories.find(c => c.name === product.categoryName);
      return {
        ...product,
        category: matchCat ? matchCat._id : createdCategories[0]._id
      }
    });

    await Product.insertMany(productsWithCategory);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Cart.deleteMany();
    await Product.deleteMany();
    await Category.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
