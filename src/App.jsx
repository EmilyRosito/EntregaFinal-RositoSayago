import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './componentes/CartContext/CartContext'; // Importa el CartProvider
import ContactoComponente from './componentes/Contacto/ContactoComponente';
import BienvenidaComponente from './componentes/Bienvenida/BienvenidaComponente';
import ProductosComponentes from './componentes/Productos/ProductosComponentes';
import ProductoComponente from './componentes/Producto/ProductoComponente';
import CategoriaComponente from './componentes/Categorias/CategoriaComponente';
import NavBar from './componentes/Navegacion/NavBar';
import ProductsComponent from './componentes/ProductsComponent';
import Carrito from './componentes/Carrito/Carrito'

function App() {
  return (
    <CartProvider> {/* Envuelve tu aplicación con el CartProvider */}
      <BrowserRouter>
        <NavBar /> 
        <Routes>
          <Route exact path="/" element={<BienvenidaComponente />} />
          <Route exact path="/productos" element={<ProductosComponentes />} />
          <Route exact path="/categoria/:catName" element={<CategoriaComponente />} />
          <Route exact path="/producto/:productoid" element={<ProductoComponente />} />
          <Route exact path="/carrito" element={<Carrito />} /> {/* Agrega esta ruta para el carrito de compras */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
