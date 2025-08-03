const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5500;

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Parse incoming JSON
app.use(bodyParser.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
  const input = req.body.input;

  console.log('Webhook called with:', input);

  // Sample response
  res.json({
    output: {
      generic: [{
        response_type: 'text',
        text: `Webhook triggered. You said: "${input.text}"`
      }]
    }
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
