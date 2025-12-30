import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import CheckoutForm from "./components/cart/CheckoutForm";
import "./App.css";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      
     <NavBar />

      {/* CONTENIDO */}
      <main className="main-container">
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Todos los productos" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;
