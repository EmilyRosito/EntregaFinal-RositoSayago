import { useNavigate } from "react-router-dom";
import { getProductos } from "../../../asyncMock";
import { useEffect, useState } from "react";
import "./ProductosComponentes.css";
import CardWidget from '../CardWidget/CardWidget'; 


export default function ProductosComponentes() {
    const navigate = useNavigate();
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]); // Estado para almacenar las categorías únicas

    useEffect(() => {
        getProductos.then(data => {
            setProductos(data);
            // Extraer categorías únicas de los productos
            const categoriasUnicas = [...new Set(data.map(producto => producto.category))];
            setCategorias(categoriasUnicas);
        });
    }, []);

    const handleClick = (id) => {
        navigate(`/producto/${id}`);
    };

    const filtrarPorCategoria = (categoria) => {
        navigate(`/categoria/${categoria}`);
    };

    const handleAgregarAlCarrito = (producto, cantidad) => {
        console.log(`Agregado al carrito: ${cantidad} unidades del producto ${producto.title}`);
    };

    return (
        <>
           

            {
                productos.map(producto => (
                    <article key={producto.id} >
                        <h4>{producto.title}</h4>
                        <img src={producto.image} alt={producto.title} />
                        <p>Precio: ${producto.price}</p>
                        <button onClick={() => handleClick(producto.id)}>Ver detalles</button>
                        <CardWidget
                    producto={producto}
                    onAgregarAlCarrito={handleAgregarAlCarrito}
                />
                    </article>
                ))
            }
        </>
    )
}
