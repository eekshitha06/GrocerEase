const products = [
  // Fruits
  { name: 'Fresh Apples', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6faa6?auto=format&fit=crop&w=800&q=80', description: 'Crisp and sweet red apples.', categoryName: 'Fruits', price: 2.99, countInStock: 50 },
  { name: 'Organic Bananas', image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=800&q=80', description: 'Fresh organic bananas.', categoryName: 'Fruits', price: 1.49, countInStock: 100 },
  { name: 'Juicy Oranges', image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9db465f?auto=format&fit=crop&w=800&q=80', description: 'Freshly picked oranges.', categoryName: 'Fruits', price: 3.50, countInStock: 40 },
  { name: 'Watermelon', image: 'https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?auto=format&fit=crop&w=800&q=80', description: 'Sweet and refreshing watermelon.', categoryName: 'Fruits', price: 5.99, countInStock: 20 },
  
  // Vegetables
  { name: 'Carrots', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80', description: 'Crunchy orange carrots.', categoryName: 'Vegetables', price: 1.20, countInStock: 80 },
  { name: 'Broccoli', image: 'https://images.unsplash.com/photo-1512621843614-b3e18a20d772?auto=format&fit=crop&w=800&q=80', description: 'Green and healthy broccoli.', categoryName: 'Vegetables', price: 2.49, countInStock: 60 },
  { name: 'Red Tomatoes', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80', description: 'Ripe and juicy tomatoes.', categoryName: 'Vegetables', price: 1.99, countInStock: 90 },
  { name: 'Onions', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80', description: 'Fresh red onions.', categoryName: 'Vegetables', price: 0.99, countInStock: 120 },

  // Snacks
  { name: 'Potato Chips', image: 'https://images.unsplash.com/photo-1566478989037-eade3f7ceabe?auto=format&fit=crop&w=800&q=80', description: 'Salty and crunchy chips.', categoryName: 'Snacks', price: 3.50, countInStock: 30 },
  { name: 'Mixed Nuts', image: 'https://images.unsplash.com/photo-1599598425947-330d2fc431fa?auto=format&fit=crop&w=800&q=80', description: 'Healthy roasted mixed nuts.', categoryName: 'Snacks', price: 6.99, countInStock: 50 },
  { name: 'Popcorn', image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=800&q=80', description: 'Butter flavored popcorn.', categoryName: 'Snacks', price: 2.99, countInStock: 45 },

  // Sweets
  { name: 'Chocolate Bar', image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=800&q=80', description: 'Rich dark chocolate.', categoryName: 'Sweets', price: 2.00, countInStock: 40 },
  { name: 'Gummy Bears', image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=800&q=80', description: 'Fruity and chewy gummy bears.', categoryName: 'Sweets', price: 1.50, countInStock: 70 },
  { name: 'Cookies', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80', description: 'Delicious chocolate chip cookies.', categoryName: 'Sweets', price: 3.99, countInStock: 35 },

  // Ice Creams
  { name: 'Vanilla Ice Cream', image: 'https://images.unsplash.com/photo-1556525814-bfa11b1bfbc7?auto=format&fit=crop&w=800&q=80', description: 'Creamy vanilla flavor.', categoryName: 'Ice Creams', price: 4.99, countInStock: 20 },
  { name: 'Strawberry Ice Cream', image: 'https://images.unsplash.com/photo-1563805042-7684c8a9e9cf?auto=format&fit=crop&w=800&q=80', description: 'Sweet strawberry ice cream.', categoryName: 'Ice Creams', price: 4.99, countInStock: 25 },

  // Beverages
  { name: 'Orange Juice', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80', description: '100% pure orange juice.', categoryName: 'Beverages', price: 3.99, countInStock: 60 },
  { name: 'Green Tea', image: 'https://images.unsplash.com/photo-1627492275510-43285c5dc070?auto=format&fit=crop&w=800&q=80', description: 'Refreshing green tea bags.', categoryName: 'Beverages', price: 4.50, countInStock: 50 },
  { name: 'Cola Soda', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80', description: 'Chilled sparkling cola.', categoryName: 'Beverages', price: 1.99, countInStock: 80 },

  // Dairy Products
  { name: 'Whole Milk', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=800&q=80', description: 'Fresh whole milk.', categoryName: 'Dairy Products', price: 2.50, countInStock: 70 },
  { name: 'Cheddar Cheese', image: 'https://images.unsplash.com/photo-1618164435735-414dla4da24v?auto=format&fit=crop&w=800&q=80', description: 'Aged sharp cheddar cheese.', categoryName: 'Dairy Products', price: 4.50, countInStock: 40 },
  { name: 'Butter', image: 'https://images.unsplash.com/photo-1589139580447-b892da0e251a?auto=format&fit=crop&w=800&q=80', description: 'Unsalted pure butter.', categoryName: 'Dairy Products', price: 3.20, countInStock: 50 },

  // Rice & Grains
  { name: 'Basmati Rice', image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?auto=format&fit=crop&w=800&q=80', description: 'Premium long grain rice.', categoryName: 'Rice & Grains', price: 15.99, countInStock: 15 },
  { name: 'Quinoa', image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?auto=format&fit=crop&w=800&q=80', description: 'Organic quinoa grains.', categoryName: 'Rice & Grains', price: 8.99, countInStock: 30 },

  // Cooking Oils
  { name: 'Olive Oil', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80', description: 'Extra virgin olive oil.', categoryName: 'Cooking Oils', price: 9.99, countInStock: 25 },
  { name: 'Sunflower Oil', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80', description: 'Refined sunflower oil.', categoryName: 'Cooking Oils', price: 5.49, countInStock: 40 },

  // Spices
  { name: 'Turmeric Powder', image: 'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&w=800&q=80', description: 'Organic turmeric powder.', categoryName: 'Spices', price: 4.50, countInStock: 50 },
  { name: 'Black Pepper', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80', description: 'Ground black pepper.', categoryName: 'Spices', price: 3.99, countInStock: 60 },

  // Personal Care
  { name: 'Herbal Shampoo', image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80', description: 'Natural herbal shampoo.', categoryName: 'Personal Care', price: 6.99, countInStock: 35 },
  { name: 'Body Wash', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80', description: 'Refreshing body wash.', categoryName: 'Personal Care', price: 5.50, countInStock: 45 },

  // Household Items
  { name: 'Dish Wash Liquid', image: 'https://plus.unsplash.com/premium_photo-1678125553535-93df7af16fcd?auto=format&fit=crop&w=800&q=80', description: 'Tough on grease.', categoryName: 'Household Items', price: 3.49, countInStock: 80 },
  { name: 'Paper Towels', image: 'https://images.unsplash.com/photo-1584824388144-ca3878b273ca?auto=format&fit=crop&w=800&q=80', description: 'Extra absorbent paper towels.', categoryName: 'Household Items', price: 7.99, countInStock: 60 }
];

export default products;
