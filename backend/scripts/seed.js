require('dotenv').config();
const mongoose = require('mongoose');
const Food = require('../index').Food; // Import the Food model

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB connected for seeding');

    // Sample data
    const sampleFoods = [
      { name: 'Pizza', price: 10, description: 'Delicious cheese pizza', imageUrl: 'https://watermark.lovepik.com/photo/50071/5098.jpg_wh1200.jpg' },
      { name: 'Burger', price: 8, description: 'Juicy beef burger', imageUrl: 'https://th.bing.com/th/id/OIP.gQcbYDtWPxumXbFt15EuwwHaEK?w=333&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
      { name: 'Sushi', price: 15, description: 'Fresh sushi rolls', imageUrl: 'https://th.bing.com/th/id/OIP.QYuZfq3RUgI2sMHQQD1uNwHaFE?w=249&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
      { name: 'Pasta', price: 12, description: 'Creamy Alfredo pasta', imageUrl: 'https://www.simplyrecipes.com/thmb/zndk8hnOZ15pA9rXtOaJt1J-2zw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Spaghetti-Aglio-e-Olio-LEAD-1-33e4ba9364ca4b828ad07fc1a489084a.jpg' },
      { name: 'Salad', price: 7, description: 'Healthy green salad', imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.S4UUGF22l7kWmmPEGP9sOwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
      { name: 'Steak', price: 20, description: 'Grilled beef steak', imageUrl: 'https://th.bing.com/th/id/R.11e54d6b8ecb0281bd6181599d5a2993?rik=ddmRUNOns5t2Pg&pid=ImgRaw&r=0' }
    ];

    // Clear existing data and insert sample data
    await Food.deleteMany({});
    await Food.insertMany(sampleFoods);

    console.log('Database seeded successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Database seeding failed:', err);
    mongoose.connection.close();
  });
