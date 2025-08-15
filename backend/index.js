require('dotenv').config(); // Ensure this line is at the top of the file

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Changed from mysql2 to mongoose

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection failed:', err));

// Define a schema and model for foods
const foodSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  imageUrl: String
});

const Food = mongoose.model('Food', foodSchema);

// Routes
app.get('/foods', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = { app, Food }; // Export both app and Food model

if (require.main === module) {
  app.listen(process.env.PORT, () =>
    console.log(`Backend running on port ${process.env.PORT}`)
  );
}
