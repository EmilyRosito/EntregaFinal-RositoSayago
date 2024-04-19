import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducto } from '../../../asyncMock';
import CardWidget from '../CardWidget/CardWidget'; 
import "./ProductoComponente.css";


export default function ProductoComponente() {
    const { productoid } = useParams();

    const [producto, setProducto] = useState({});

    useEffect(() => {
        setProducto(getProducto(productoid));
    }, [productoid]);

    const handleAgregarAlCarrito = (producto, cantidad) => {
        console.log(`Agregado al carrito: ${cantidad} unidades del producto ${producto.title}`);
    };

    return (
        <>
            <div>
                <h3>Nombre: {producto.title}</h3>
                <img src={producto.image} alt={producto.title} />
                <p>{producto.description}</p>
                <p>{producto.category}</p>
                <p>Precio: ${producto.price}</p>
                <p>Stock disponible: {producto.stock}</p>
                <CardWidget
                    producto={producto}
                    onAgregarAlCarrito={handleAgregarAlCarrito}
                />
            </div>
        </>
    );
}
