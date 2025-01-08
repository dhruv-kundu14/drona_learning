require('dotenv').config({ path: '../../../.env' });

const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Debug: Log the environment variables
console.log('Key ID:', process.env.RAZORPAY_KEY_ID);
console.log('Key Secret:', process.env.RAZORPAY_KEY_SECRET);

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // Load from environment variables
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.use(cors());
app.use(bodyParser.json());

app.post('/create-order', async (req, res) => {
  const { amount } = req.body;

  if (!amount || isNaN(amount) || amount <= 0) {
    return res.status(400).json({ message: 'Invalid amount provided' });
  }

  const options = {
    amount: amount * 100, // Convert to paise
    currency: 'INR',
    receipt: `receipt#${Math.floor(Math.random() * 100000)}`,
    payment_capture: 1,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error('Error creating order:', error.stack);
    res.status(500).json({ message: 'Error creating order', error });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
