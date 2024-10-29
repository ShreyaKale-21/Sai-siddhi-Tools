const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2104',
  database: 'sst_tools'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

//order form
app.post('/orders', (req, res) => {  // note: route is now lowercase '/orders'
  const { name, email, phone } = req.body;
  const query = "INSERT INTO orders (name, email, phone, created_at) VALUES (?, ?, ?, NOW())";
  console.log("Request data:", req.body);

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "All fields are required" });
  }

  db.query(query, [name, email, phone], (err, result) => {
    if (err) {
      console.error("Error inserting order:", err.sqlMessage);
      return res.status(500).json({ error: "Failed to place order", details:err.sqlMessage });
    }
    res.status(201).json({ message: "Order placed successfully", orderId: result.insertId });
  });
});

//Login form


// contact form
// POST Route to handle form submission
app.post('/Contact', (req, res) => {
  const { name, email, query } = req.body;
  const sql = 'INSERT INTO user_queries (name, email, query, timestamp) VALUES (?, ?, ?, NOW())';

  db.query(sql, [name, email, query], (err, result) => {
    if (err) {
      console.error('Error saving to database', err);
      return res.status(500).json({ message: 'Error submitting query' });
    }
    res.status(200).json({ message: 'Query submitted successfully' });
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../cart/build','index.html'));
});
app.use(express.static(path.join(__dirname, '../cart/build')));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Server running on port ${port}');
});
