-- Food Ordering System Database Schema 
 
CREATE TABLE users ( 
    id SERIAL PRIMARY KEY, 
    username VARCHAR(50) UNIQUE NOT NULL, 
    email VARCHAR(100) UNIQUE NOT NULL, 
    password_hash VARCHAR(255) NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
); 

CREATE TABLE menu_items ( 
    id SERIAL PRIMARY KEY, 
    name VARCHAR(100) NOT NULL, 
    description TEXT, 
    price DECIMAL(10,2) NOT NULL, 
    category VARCHAR(50), 
    available BOOLEAN DEFAULT true 
); 

  

CREATE TABLE orders ( 
    id SERIAL PRIMARY KEY, 
    user_id INTEGER REFERENCES users(id), 
    total_amount DECIMAL(10,2) NOT NULL, 
    status VARCHAR(20) DEFAULT 'pending', 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
); 