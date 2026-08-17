// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
// import HomePage from './pages/Home/Home';
// // Import your other pages here...

// export default function App() {
//   return (
//     <div className="app-container">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         {/* Add Menu, Cart, Checkout routes here as you build them */}
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

import React from "react";
import MenuPage from "./pages/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <MenuPage />
      <Footer />
    </div>
  );
}