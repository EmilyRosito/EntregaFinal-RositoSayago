import React from 'react';
import { useCart } from '../CartContext/CartContext';

export default function ContadorDeUnidades({ producto }) {
    const { addToCart } = useCart();
    const [cantidad, setCantidad] = React.useState(1);

    const incrementarCantidad = () => {
        if (cantidad < producto.stock) {
            setCantidad(prevCantidad => prevCantidad + 1);
        }
    };

    const decrementarCantidad = () => {
        if (cantidad > 1) {
            setCantidad(prevCantidad => prevCantidad - 1);
        }
    };

    const handleAgregarCarrito = () => {
        addToCart(producto, cantidad);
    };

    return (
        <div>
            <button onClick={incrementarCantidad}>+</button>
            <span>{cantidad}</span>
            <button onClick={decrementarCantidad}>-</button>
            <button onClick={handleAgregarCarrito}>Agregar al carrito</button>
        </div>
    );
}
