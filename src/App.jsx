import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Purchases from "./pages/Purchases";
import ProductDescription from "./pages/ProductDescription";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import "./App.css";
import Cart from "./pages/Cart";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDescription />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/Purchases" element={<Purchases />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
