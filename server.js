const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Sample in-memory database (replace with actual database like MongoDB or MySQL)
let users = [];

// Endpoint to handle registration form submission
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    // Validate input (add your validation logic here)

    // Store user in database (for demo, we're just pushing to an array)
    users.push({ name, email, password });

    res.status(201).json({ message: 'User registered successfully' });
});

// Endpoint to handle login form submission
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Validate input and authenticate user (add your authentication logic here)

    // For demo, just check against the in-memory database
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
