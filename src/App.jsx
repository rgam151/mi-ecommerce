import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./App.css"; 

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <div className="main-container">
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Todos los productos" />}
          />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;