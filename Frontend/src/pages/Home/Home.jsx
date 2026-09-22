import React from "react";
import { Link } from "react-router-dom";
import menuData from "../../data/menuData";
import { useCart } from "../../context/CartContext";
import FoodCard from "../../components/FoodCard/FoodCard";
import Button from "../../components/Button/Button";
import "./Home.css";

export default function HomePage() {
  const { addItem } = useCart();

  // Top items for "Popular This Week"
  const popularItems = menuData.slice(0, 4);

  return (
    <main className="homepage">
      {/* HP-02: Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Fresh, Local Food <br />
            <span className="text-green">Delivered To You</span>
          </h1>
          <p className="hero-subtext">
            Seasonal ingredients, delivered in under 30 minutes.
          </p>

          <div className="hero-actions desktop-hero-actions">
            <Link to="/menu">
              <Button label="Order Now" variant="secondary" className="hero-btn-primary" />
            </Link>
            <Link to="/menu">
              <Button label="View Menu" variant="primary" className="hero-btn-secondary" />
            </Link>
          </div>
        </div>

        <div className="hero-image-block">
          <img src="/images/menu_1.png" alt="Fresh food plate" className="hero-img" />
        </div>

        {/* Mobile-only Order Now Button (sits directly under image on mobile) */}
        <div className="mobile-hero-actions">
          <Link to="/menu" className="mobile-hero-link">
            <button type="button" className="mobile-order-btn">
              Order Now
            </button>
          </Link>
        </div>
      </section>

      {/* HP-03: Featured / Popular Menu Items */}
      <section className="featured-section">
        <div className="section-header-wrap">
          {/* <span className="section-eyebrow">FEATURED MENU ITEMS</span> */}
          <h2 className="section-title">Popular This Week</h2>
        </div>

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
          <img
            src="https://images.pexels.com/photos/8166269/pexels-photo-8166269.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Freshly prepared dishes"
            className="why-us-img"
          />
        </div>

        <div className="why-us-content">
          {/* <span className="section-eyebrow">WHY CHOOSE US</span> */}
          <h2 className="section-title">Why Choose Us</h2>
          <ul className="why-us-list">
            <li>
              <span className="dot"></span> Locally sourced
            </li>
            <li>
              <span className="dot"></span> Fresh, never frozen
            </li>
            <li>
              <span className="dot"></span> Fast delivery
            </li>
          </ul>
        </div>
      </section>

      {/* HP-05: Testimonials */}
      <section className="testimonials-section">
        <div className="section-header-wrap">
          {/* <span className="section-eyebrow">TESTIMONIALS</span> */}
          <h2 className="section-title">Customer Love</h2>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="rating">★★★★★</div>
            <p className="testimonial-quote">"Amazing food, every time."</p>
            <span className="customer-name">— Customer Name</span>
          </div>
          <div className="testimonial-card">
            <div className="rating">★★★★★</div>
            <p className="testimonial-quote">"Amazing food, every time."</p>
            <span className="customer-name">— Customer Name</span>
          </div>
          <div className="testimonial-card">
            <div className="rating">★★★★★</div>
            <p className="testimonial-quote">"Authentic flavors, prompt delivery. 10/10!"</p>
            <span className="customer-name">— Customer Name</span>
          </div>
        </div>
      </section>
    </main>
  );
}