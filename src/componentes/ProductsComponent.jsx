import React, { useEffect, useState } from "react";
import { getProducts } from "../firebase/firebase";

export default function ProductsComponent() {
    const [myProds, setMyProds] = useState([]);

    async function obtenerProductos() {
        const productos = await getProducts();
        setMyProds(productos);
    }

    useEffect(() => {
        obtenerProductos();
    }, []);

    return (
        <>
            {myProds.map((prod) => (
                <li key={prod.title}>{prod.title}</li>
            ))}
        </>
    );
}
