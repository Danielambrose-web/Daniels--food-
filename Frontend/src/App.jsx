import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/Home/Home";
import MenuPage from "./pages/Menu/Menu";
// import CartPage from "./pages/Cart/Cart";
// import CheckoutPage from "./pages/Checkout/Checkout";
// import OrderConfirmationPage from "./pages/OderConfirmation/OrderConfirmation";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        {/* <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}