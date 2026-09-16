import { Link } from "react-router-dom";
import "./About.css";

export function About() {
  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">About us</p>
          <h1>Food that feels like home</h1>
          <p>
            A small Lagos kitchen built around honest Nigerian cooking and
            stress-free ordering.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="gallery">
            <img
              src="https://images.pexels.com/photos/10135116/pexels-photo-10135116.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Warm dining space"
            />
            <img
              src="https://images.pexels.com/photos/8166269/pexels-photo-8166269.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Nigerian food platter"
            />
          </div>
          <div className="story">
            <p>
              ChopHouse Lagos started in a small Lekki kitchen with one simple idea:
              Nigerian food should be easy to order and worth every bite.
            </p>
            <p>
              We cook the meals people actually crave — smoky jollof, rich egusi,
              proper suya, soft swallows — using fresh ingredients and recipes that
              respect tradition without overcomplicating anything.
            </p>
            <p>
              No long queues. No confusion. Just good food, prepared with care,
              delivered to your door or ready for pickup.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white border-y">
        <div className="container philosophy">
          <div>
            <p className="eyebrow">Food philosophy</p>
            <h2 className="section-title">Honest food, cooked properly</h2>
            <p className="lead">
              We believe great Nigerian food does not need to be fancy. It needs to
              be honest, well-seasoned, and ready when you are hungry. Every plate
              leaving our kitchen is cooked to order — never sitting under a heat lamp.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/37923425/pexels-photo-37923425.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Chef preparing food"
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">What we stand for</p>
          <h2 className="section-title">Our values</h2>
          <div className="values">
            <article className="value-card">
              <div className="value-num">01</div>
              <h3>Freshly prepared</h3>
              <p>We cook when you order. No reheated trays, no shortcuts on flavour.</p>
            </article>
            <article className="value-card">
              <div className="value-num">02</div>
              <h3>Quality ingredients</h3>
              <p>From our rice to our proteins, we source carefully and season properly.</p>
            </article>
            <article className="value-card">
              <div className="value-num">03</div>
              <h3>Easy ordering</h3>
              <p>Browse, add to cart, send on WhatsApp. Your meal is on the way.</p>
            </article>
            <article className="value-card">
              <div className="value-num">04</div>
              <h3>Lagos-friendly service</h3>
              <p>Clear communication, fair prices, and food that shows up hot.</p>
            </article>
          </div>
        </div>
      </section>

      <div className="container wide-photo-wrap">
        <div className="wide-photo">
          <img
            src="https://images.pexels.com/photos/37708443/pexels-photo-37708443.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="ChopHouse kitchen at work"
          />
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Loved around Lagos</h2>
          <div className="reviews">
            <blockquote className="review plain">
              <p>
                “The jollof tastes like proper party jollof. I ordered on a busy
                Tuesday and everything still came hot and well packed. ChopHouse is
                my go-to now.”
              </p>
              <footer>
                <strong>Adaeze O.</strong> <span className="area">· Lekki</span>
              </footer>
            </blockquote>
            <blockquote className="review plain">
              <p>
                “Finally a place that makes ordering swallow and soup simple. Egusi
                was thick, pounded yam was smooth. WhatsApp checkout is genius.”
              </p>
              <footer>
                <strong>Tunde A.</strong> <span className="area">· Victoria Island</span>
              </footer>
            </blockquote>
            <blockquote className="review plain">
              <p>
                “I ordered suya and fried rice for the office. Everyone asked where
                it came from. Clean packaging, solid portions, no stress at all.”
              </p>
              <footer>
                <strong>Chioma E.</strong> <span className="area">· Ikoyi</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section bg-white border-y">
        <div className="container hours-grid">
          <div>
            <p className="eyebrow">Visit us</p>
            <h2 className="section-title">Location & hours</h2>
            <p className="address">
              14 Admiralty Way, Lekki Phase 1, Lagos
            </p>
            <p className="muted">
              Lekki Phase 1, Lagos, Nigeria
            </p>
            <ul className="hours-list">
              <li>
                <span>Monday – Friday</span>
                <span>10:00 AM – 9:00 PM</span>
              </li>
              <li>
                <span>Saturday</span>
                <span>11:00 AM – 10:00 PM</span>
              </li>
              <li>
                <span>Sunday</span>
                <span>12:00 PM – 8:00 PM</span>
              </li>
            </ul>
            <div className="inline-actions">
              <Link className="btn btn-primary" to="/menu">
                Order from menu
              </Link>
              <Link className="btn btn-outline-dark" to="/contact">
                Contact us
              </Link>
            </div>
          </div>
          <div className="map-card">
            <div>
              <div className="map-pin">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <p>
                <strong>Lekki Phase 1, Lagos</strong>
              </p>
              <p className="muted">
                14 Admiralty Way, Lekki Phase 1, Lagos
              </p>
              <p className="map-note">Map placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
