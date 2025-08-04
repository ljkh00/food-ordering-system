const express = require('express'); 
const cors = require('cors'); 
require('dotenv').config(); 

const menuRoutes = require('./routes/menu'); 
const orderRoutes = require('./routes/orders'); 

const app = express(); 
const PORT = process.env.PORT || 3000; 
 
// Middleware 
app.use(cors()); 
app.use(express.json()); 
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);

// Routes 

app.get('/', (req, res) => { 
    res.json({  
        message: 'Food Ordering API is running!', 
        endpoints: [ 
            'GET /api/menu - Get menu items', 
            'POST /api/orders - Create order' 
        ] 
    }); 
}); 
  
app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
});