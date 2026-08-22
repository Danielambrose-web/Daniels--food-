import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Button from "../../components/Button/Button";
import "./Checkout.css";

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredTime: "",
    orderType: "Delivery",
    message: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // For now, we're only handling the frontend flow.
    console.log("Order submitted:", {
      customer: formData,
      items: cart,
      total,
    });

    clearCart();
    navigate("/order-confirmation");
  }

  if (cart.length === 0) {
    return (
      <main className="checkout-page checkout-page--empty">
        <h1>Your cart is empty</h1>
        <p>
          Add some delicious food to your cart before checking out.
        </p>

        <Button
          label="Browse the Menu"
          variant="primary"
          onClick={() => navigate("/menu")}
        />
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="checkout-header">
        <h1>Checkout</h1>
        <p>
          Complete your details and review your order before submitting.
        </p>
      </div>

      <div className="checkout-layout">
        {/* ORDER FORM */}
        <section className="checkout-form-section">
          <h2>Contact & Order Details</h2>

          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="preferredTime">Preferred Time</label>
                <input
                  id="preferredTime"
                  type="time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Order Type</label>

              <div className="order-type-options">
                <label
                  className={`order-type-option ${
                    formData.orderType === "Delivery" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="orderType"
                    value="Delivery"
                    checked={formData.orderType === "Delivery"}
                    onChange={handleChange}
                  />
                  Delivery
                </label>

                <label
                  className={`order-type-option ${
                    formData.orderType === "Pickup" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="orderType"
                    value="Pickup"
                    checked={formData.orderType === "Pickup"}
                    onChange={handleChange}
                  />
                  Pickup
                </label>

                <label
                  className={`order-type-option ${
                    formData.orderType === "Catering" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="orderType"
                    value="Catering"
                    checked={formData.orderType === "Catering"}
                    onChange={handleChange}
                  />
                  Catering
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any special instructions?"
                rows="5"
              />
            </div>

            <Button
              label="Submit Order"
              variant="primary"
              onClick={() => {}}
            />
          </form>
        </section>

        {/* ORDER SUMMARY */}
        <aside className="order-summary">
          <h2>Order Summary</h2>

          <div className="summary-items">
            {cart.map((item) => (
              <div className="summary-item" key={item.id}>
                <div className="summary-item-info">
                  <h4>{item.name}</h4>
                  <p>
                    {item.quantity} × ₦{item.price.toLocaleString()}
                  </p>
                </div>

                <strong>
                  ₦{(item.price * item.quantity).toLocaleString()}
                </strong>
              </div>
            ))}
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">
            <span>Total</span>
            <strong>₦{total.toLocaleString()}</strong>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Checkout;