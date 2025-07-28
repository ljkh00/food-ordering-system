const express = require('express'); 
const router = express.Router(); 

// Sample menu data (will connect to database later) 

const menuItems = [ 
    { id: 1, name: "Nasi Lemak", price: 5.50, category: "Malaysian", available: true }, 
    { id: 2, name: "Chicken Rice", price: 6.00, category: "Chinese", available: true }, 
    { id: 3, name: "Roti Canai", price: 3.50, category: "Indian", available: true } 
]; 

// GET /api/menu - Get all menu items from database 

router.get('/', async (req, res) => { 
    try { 
        const result = await pool.query('SELECT * FROM menu_items WHERE available = true'); 
        res.json({ success: true, data: result.rows }); 
    } catch (error) { 
        console.error('Database error:', error); 
        res.status(500).json({ success: false, message: 'Database error' }); 
    } 
}); 
 

// GET /api/menu/:id - Get specific menu item 
router.get('/:id', async (req, res) => { 
    try { 
        const result = await pool.query('SELECT * FROM menu_items WHERE id = $1', [req.params.id]); 
         
        if (result.rows.length === 0) { 
            return res.status(404).json({ success: false, message: 'Menu item not found' }); 
        } 
         
        res.json({ success: true, data: result.rows[0] }); 
    } catch (error) { 
        console.error('Database error:', error); 
        res.status(500).json({ success: false, message: 'Database error' }); 
    } 
}); 

module.exports = router; 