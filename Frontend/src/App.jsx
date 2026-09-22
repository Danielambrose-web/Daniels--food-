import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/Home/Home";
import MenuPage from "./pages/Menu/Menu";
import CartPage from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contact/Contact";
// import OrderConfirmationPage from "./pages/OderConfirmation/OrderConfirmation";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout/>} />
        {/*<Route path="/order-confirmation" element={<OrderConfirmationPage />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}