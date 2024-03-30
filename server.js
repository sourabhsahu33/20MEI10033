const express = require('express');
const app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// API endpoint for handling POST requests to '/numbers/e'
app.post('/numbers/e', (req, res) => {
  // Extract the numbers from the request body
  const numbers = req.body.numbers;

  // Check if numbers array is provided
  if (!numbers || !Array.isArray(numbers) || numbers.length === 0) {
    return res.status(400).json({ error: 'Numbers array is required and must not be empty' });
  }

  // Calculate the average
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;

  // Send back the response with the average
  res.json({
    numbers: numbers,
    avg: average
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
