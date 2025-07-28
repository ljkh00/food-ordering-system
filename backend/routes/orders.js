const express = require('express'); 
const router = express.Router(); 
let orders = [];  // Temporary storage 

// POST /api/orders - Create new order 
router.post('/', (req, res) => { 
    const { items, totalAmount } = req.body; 
    const newOrder = { 
        id: orders.length + 1, 
        items, 
        totalAmount, 
        status: 'pending', 
        createdAt: new Date() 
    };
    orders.push(newOrder); 
    res.status(201).json({ success: true, data: newOrder }); 
}); 

// GET /api/orders - Get all orders 
router.get('/', (req, res) => { 
    res.json({ success: true, data: orders }); 
}); 

module.exports = router; 