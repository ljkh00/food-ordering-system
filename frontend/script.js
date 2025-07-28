async function loadMenuFromAPI() { 
    try { 
        const response = await fetch('http://localhost:3000/api/menu'); 
        const result = await response.json(); 

        if (result.success) { 
            displayMenu(result.data); 
        } 
    } catch (error) { 
        console.error('Error loading menu:', error); 
        // Fallback to sample data 
        displayMenu(sampleMenuItems); 
    } 
} 

// Sample menu items 
const menuItems = [ 
    { id: 1, name: "Nasi Lemak", price: 5.50, category: "Malaysian" }, 
    { id: 2, name: "Chicken Rice", price: 6.00, category: "Chinese" }, 
    { id: 3, name: "Roti Canai", price: 3.50, category: "Indian" } 
]; 
 
// Display menu items 
function displayMenu() { 
    const menuContainer = document.getElementById('menu'); 
    menuItems.forEach(item => { 
        const itemDiv = document.createElement('div'); 
        itemDiv.className = 'menu-item'; 
        itemDiv.innerHTML = ` 
            <h3>${item.name}</h3> 
            <p>RM ${item.price.toFixed(2)}</p> 
            <button class="order-button" onclick="addToCart(${item.id})">Add to Cart</button> 
        `; 
        menuContainer.appendChild(itemDiv); 
    }); 
} 
 
function addToCart(itemId) { 
    alert('Added to cart! (Feature coming soon)'); 
} 
// Load menu when page loads 
document.addEventListener('DOMContentLoaded', displayMenu); 
