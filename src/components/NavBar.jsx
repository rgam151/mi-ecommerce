import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/category/ropa">Ropa</Link>
      <Link to="/category/zapatillas">Zapatillas</Link>
      <Link to="/category/accesorios">Accesorios</Link>
    </nav>
  );
}