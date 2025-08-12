const express = require('express'); 
const cors = require('cors'); 
const path = require('path');
require('dotenv').config(); 

const menuRoutes = require('./routes/menu'); 
const orderRoutes = require('./routes/orders'); 

const app = express(); 
const PORT = process.env.PORT || 3000; 
 
// Middleware 
app.use(cors()); 
app.use(express.json()); 

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);

// Routes 
// Health check endpoint for Docker
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
});

// API info endpoint
app.get('/api', (req, res) => { 
    res.json({  
        message: 'Food Ordering API is running!', 
        endpoints: [ 
            'GET /api/menu - Get menu items', 
            'POST /api/orders - Create order' 
        ] 
    }); 
});

// Serve frontend for root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); 
  
app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
});