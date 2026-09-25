import React, { useState } from "react";
import FreeMap from "../../components/FreeMap";
import "./Contact.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredTime: "",
    orderType: "Delivery",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrderTypeChange = (type) => {
    setFormData((prev) => ({ ...prev, orderType: type }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset after submission or display confirmation
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        preferredTime: "",
        orderType: "Delivery",
        message: "",
      });
    }, 4000);
  };

  const orderTypes = ["Delivery", "Pickup", "Catering"];

  return (
    <main className="contact-page">
      <div className="contact-container">
        {/* Page Header */}
        <header className="contact-header">
          <h1 className="contact-title">Contact & Order</h1>
          <p className="contact-subtitle desktop-sub">
            Questions, catering, or a custom order? Send us a message.
          </p>
          <p className="contact-subtitle mobile-sub">
            Questions or a custom order?
          </p>
        </header>

        {/* Content Layout: Form (Left) & Visit / Reach Us (Right) */}
        <div className="contact-layout">
          {/* Left Column: Form */}
          <section className="contact-form-section">
            {/* <span className="form-eyebrow">ORDER / CONTACT FORM</span> */}

            {submitted && (
              <div className="form-success-banner">
                Thank you! Your order request has been sent. We'll be in touch shortly.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Preferred Pickup / Delivery Time */}
                <div className="form-group">
                  <label htmlFor="preferredTime">
                    Preferred Pickup / Delivery Time
                  </label>
                  <input
                    type="text"
                    id="preferredTime"
                    name="preferredTime"
                    placeholder="e.g. Today at 2:00 PM"
                    value={formData.preferredTime}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Order Type Selector */}
              <div className="form-group order-type-group">
                <label>Order Type</label>
                <div className="order-type-pills">
                  {orderTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      className={`order-type-pill ${
                        formData.orderType === type ? "active" : ""
                      }`}
                      onClick={() => handleOrderTypeChange(type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message / Order Details */}
              <div className="form-group">
                <label htmlFor="message">Message / Order Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-order-btn">
                Submit Order
              </button>
            </form>
          </section>

          {/* Right Column: Visit / Reach Us */}
          <aside className="reach-us-card">
            <h2 className="reach-us-title">Visit / Reach Us</h2>

            <div className="reach-us-info">
              <p>
                <span className="info-label">Address:</span>{" "}
                <span className="info-val">123 Market Street, Food City</span>
              </p>
              <p>
                <span className="info-label">Phone:</span>{" "}
                <span className="info-val">(555) 123-4567</span>
              </p>
              <p>
                <span className="info-label">Email:</span>{" "}
                <span className="info-val">hello@foodbrand.com</span>
              </p>
              <p>
                <span className="info-label">Hours:</span>{" "}
                <span className="info-val">Mon-Sun: 9am - 10pm</span>
              </p>
            </div>

            {/* Embedded Map */}
            <div className="reach-us-map-box">
              <FreeMap title="Visit Our Location" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

