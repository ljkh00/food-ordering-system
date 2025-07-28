class ShoppingCart { 

    constructor() { 
        this.items = JSON.parse(localStorage.getItem('cart')) || []; 
        this.updateCartDisplay(); 
    } 

    addItem(menuItem) { 
        const existingItem = this.items.find(item => item.id === menuItem.id); 

        if (existingItem) { 
            existingItem.quantity += 1; 
        } else { 
            this.items.push({ ...menuItem, quantity: 1 }); 
        } 
        this.saveCart(); 
        this.updateCartDisplay(); 
    } 
    
    removeItem(itemId) { 
        this.items = this.items.filter(item => item.id !== itemId); 
        this.saveCart(); 
        this.updateCartDisplay(); 
    } 
    
    saveCart() { 
        localStorage.setItem('cart', JSON.stringify(this.items)); 
    } 
     
    updateCartDisplay() { 
        const cartCount = this.items.reduce((total, item) => total + item.quantity, 0); 
        document.getElementById('cart-count').textContent = cartCount; 
    } 
     
    getTotal() { 
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0); 
    } 
} 
