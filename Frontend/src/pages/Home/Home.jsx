import React from "react";
import { Link } from "react-router-dom";
import menuData from "../../data/menuData";
import { useCart } from "../../context/CartContext";
import FoodCard from "../../components/FoodCard/FoodCard";
import Button from "../../components/Button/Button";
import "./Home.css";

export default function HomePage() {
  const { addItem } = useCart();

  // Pick top 4 items for the "Popular This Week" section (HP-03)
  const popularItems = menuData.slice(0, 4);

  return (
    <main className="homepage">
      {/* HP-02: Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Fresh, Local Food <br />
            <span className="text-green">Delivered To Your Door</span>
          </h1>
          <p className="hero-subtext">
            Seasonal ingredients, chef-crafted meals, and delivery in under 30 minutes.
          </p>
          <div className="hero-actions">
            <Link to="/menu">
              <Button label="Order Now" variant="primary" />
            </Link>
            <Link to="/menu">
              <Button label="View Menu" variant="secondary" />
            </Link>
          </div>
        </div>
        <div className="hero-image-block">
          <span>HERO FOOD IMAGE</span>
        </div>
      </section>

      {/* HP-03: Featured / Popular Menu Items */}
      <section className="featured-section">
        <h2 className="section-title">Popular This Week</h2>
        <div className="featured-grid">
          {popularItems.map((item) => (
            <FoodCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
              onAddToCart={() => addItem(item)}
            />
          ))}
        </div>
      </section>

      {/* HP-04: About / Why Choose Us */}
      <section className="why-us-section">
        <div className="why-us-image-block">
          <span>ABOUT IMAGE</span>
        </div>
        <div className="why-us-content">
          <h2 className="section-title">Why Choose Us</h2>
          <ul className="why-us-list">
            <li>
              <span className="dot"></span> Locally sourced ingredients
            </li>
            <li>
              <span className="dot"></span> Fresh, never frozen
            </li>
            <li>
              <span className="dot"></span> 25-35 minute delivery
            </li>
            <li>
              <span className="dot"></span> Eco-friendly packaging
            </li>
          </ul>
        </div>
      </section>

      {/* HP-05: Testimonials */}
      <section className="testimonials-section">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="rating">★★★★★</div>
            <p>"Best food delivery experience I've had all year!"</p>
            <span className="customer-name">— Chidi O.</span>
          </div>
          <div className="testimonial-card">
            <div className="rating">★★★★★</div>
            <p>"Fast delivery and the Chapman drink was crisp and chilling."</p>
            <span className="customer-name">— Amina Y.</span>
          </div>
          <div className="testimonial-card">
            <div className="rating">★★★★★</div>
            <p>"Authentic flavors, prompt delivery. 10/10 recommendation!"</p>
            <span className="customer-name">— Emeka K.</span>
          </div>
        </div>
      </section>
    </main>
  );
}