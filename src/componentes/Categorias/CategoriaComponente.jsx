import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../../../asyncMock";
import CardWidget from '../CardWidget/CardWidget'; 

export default function CategoriaComponente() {
    const { catName } = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos.then(data => {
            // Filtrar productos por categoría
            const productosFiltrados = data.filter(producto => producto.category === catName);
            setProductos(productosFiltrados);
        });
    }, [catName]); // Agregamos catName a las dependencias del useEffect

    return (
        <>
           
            {productos.map(producto => (
                <article key={producto.id}>
                    <h4>{producto.title}</h4>
                    <img src={producto.image} alt={producto.title} />
                    <p>Precio: ${producto.price}</p>
                    <p>Categoría: {producto.category}</p>
                <p>Stock disponible: {producto.stock}</p>


                </article>
            ))}
        </>
    )
}