import React, { createContext, useContext, useState } from 'react';

// Creamos el contexto del carrito
const CartContext = createContext();

// Hook personalizado para acceder al contexto del carrito
export const useCart = () => useContext(CartContext);

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        const itemIndex = cart.findIndex(item => item.product.id === product.id);

        if (itemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[itemIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart(prevCart => [...prevCart, { product, quantity }]);
        }
    };

    const removeFromCart = productId => {
        setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
