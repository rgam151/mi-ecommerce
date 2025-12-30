import { Link } from "react-router-dom";
import CartWidget from "./cart/CartWidget";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="logo">Mi comercio electrónico</h1>

        <nav className="navbar">
          <Link to="/">Inicio</Link>
          <Link to="/category/ropa">Ropa</Link>
          <Link to="/category/zapatillas">Zapatillas</Link>
          <Link to="/category/accesorios">Accesorios</Link>
          <CartWidget />
        </nav>
      </div>
    </header>
  );
}


