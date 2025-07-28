const express = require('express'); 
const router = express.Router(); 

// Sample menu data (will connect to database later) 

const menuItems = [ 
    { id: 1, name: "Nasi Lemak", price: 5.50, category: "Malaysian", available: true }, 
    { id: 2, name: "Chicken Rice", price: 6.00, category: "Chinese", available: true }, 
    { id: 3, name: "Roti Canai", price: 3.50, category: "Indian", available: true } 
]; 

// GET /api/menu - Get all menu items 
router.get('/', (req, res) => { 
    res.json({ success: true, data: menuItems }); 
}); 

// GET /api/menu/:id - Get specific menu item 

router.get('/:id', (req, res) => { 
    const item = menuItems.find(item => item.id === parseInt(req.params.id)); 
    if (!item) { 
        return res.status(404).json({ success: false, message: 'Menu item not found' }); 
    } 
    res.json({ success: true, data: item }); 
}); 

module.exports = router; 