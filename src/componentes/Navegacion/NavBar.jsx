// NavBar.jsx

import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
            <Link to={'/productos'}>
                <img src="https://i.ibb.co/XXg2nD0/Captura-de-pantalla-2024-04-15-234821.png" alt="Logo" />
            </Link>
            <button><Link to={'/productos'}>Inicio</Link></button>
            <button><Link to={'/categoria/Indumentaria'}>Indumentaria</Link></button>
            <button><Link to={'/categoria/Calzado'}>Calzado</Link></button>
        </div>
    );
}
