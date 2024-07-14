// routes/api.js
const express = require('express');
const router = express.Router();

let orders = [];
let menu = [
  { id: 1, name: 'Chicken Biryani', priceFull: 300, priceHalf: 150, image: '/images/chicken-biryani.jpg', description: 'Delicious chicken biryani with aromatic spices' },
  { id: 2, name: 'Chicken Pilao', priceFull: 250, priceHalf: 125, image: '/images/chicken-pilao.jpg', description: 'Flavorful chicken pilao with basmati rice' },
  { id: 3, name: 'Zarda', priceFull: 200, priceHalf: 100, image: '/images/zarda.jpg', description: 'Sweet rice dessert with nuts and raisins' },
  { id: 4, name: 'Raita', priceFull: 50, priceHalf: 25, image: '/images/raita.jpg', description: 'Cool and refreshing yogurt raita' },
  { id: 5, name: 'Salad', priceFull: 50, priceHalf: 25, image: '/images/salad.jpg', description: 'Fresh garden salad with mixed vegetables' }
];

router.get('/menu', (req, res) => {
  res.json(menu);
});

router.post('/order', (req, res) => {
  const order = req.body;
  orders.push(order);
  res.status(201).json(order);
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Here you would typically handle the contact form submission,
  // e.g., send an email, save to a database, etc.
  console.log(`Message received from ${name} (${email}): ${message}`);
  res.status(201).json({ message: 'Message received successfully' });
});

module.exports = router;
// routes/api.js
const express = require('express');
const router = express.Router();

let orders = [];
let menu = [
  { id: 1, name: 'Chicken Biryani', priceFull: 300, priceHalf: 150, image: '/images/chicken-biryani.jpg', description: 'Delicious chicken biryani with aromatic spices' },
  { id: 2, name: 'Chicken Pilao', priceFull: 250, priceHalf: 125, image: '/images/chicken-pilao.jpg', description: 'Flavorful chicken pilao with basmati rice' },
  { id: 3, name: 'Zarda', priceFull: 200, priceHalf: 100, image: '/images/zarda.jpg', description: 'Sweet rice dessert with nuts and raisins' },
  { id: 4, name: 'Raita', priceFull: 50, priceHalf: 25, image: '/images/raita.jpg', description: 'Cool and refreshing yogurt raita' },
  { id: 5, name: 'Salad', priceFull: 50, priceHalf: 25, image: '/images/salad.jpg', description: 'Fresh garden salad with mixed vegetables' }
];

router.get('/menu', (req, res) => {
  res.json(menu);
});

router.post('/order', (req, res) => {
  const order = req.body;
  orders.push(order);
  res.status(201).json(order);
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Here you would typically handle the contact form submission,
  // e.g., send an email, save to a database, etc.
  console.log(`Message received from ${name} (${email}): ${message}`);
  res.status(201).json({ message: 'Message received successfully' });
});
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Here you would typically handle the contact form submission,
  // e.g., send an email, save to a database, etc.
  console.log(`Message received from ${name} (${email}): ${message}`);
  res.status(201).json({ message: 'Message received successfully' });
});
module.exports = router;
