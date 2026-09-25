
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Button from "../../components/Button/Button";
import "./Cart.css";

function Cart() {
  const { cart, removeItem, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-page cart-page--empty">
        <div className="cart-empty-mark" aria-hidden="true">0</div>
        <p className="cart-eyebrow">YOUR ORDER</p>
        <h1>Your cart is empty</h1>
        <p className="text-body-sm">Looks like you haven't added anything yet.</p>
        <Link to="/menu">
          <Button label="Browse the Menu" variant="primary" />
        </Link>
      </div>
    );
  }

  return (
    <main className="cart-page">
      <header className="cart-page__header">
        <div>
          <p className="cart-eyebrow">YOUR ORDER</p>
          <h1>Your Cart</h1>
        </div>
        <p className="cart-page__count">{itemCount} {itemCount === 1 ? "item" : "items"}</p>
      </header>

      <div className="cart-layout">
        <section className="cart-list" aria-label="Items in your cart">
          {cart.map((item) => (
            <article key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item__image" />

              <div className="cart-item__details">
                <h2>{item.name}</h2>
                <p className="cart-item__unit-price">₦{item.price.toLocaleString()} each</p>
              </div>

              <div className="cart-item__quantity" aria-label={`${item.name} quantity`}>
                <button
                  type="button"
                  aria-label={`Decrease ${item.name} quantity`}
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  −
                </button>
                <span aria-live="polite">{item.quantity}</span>
                <button
                  type="button"
                  aria-label={`Increase ${item.name} quantity`}
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              <p className="cart-item__subtotal">
                ₦{(item.price * item.quantity).toLocaleString()}
              </p>

              <button
                type="button"
                className="cart-item__remove"
                onClick={() => removeItem(item.id)}
                aria-label={`Remove ${item.name} from cart`}
              >
                ×
              </button>
            </article>
          ))}
        </section>

        <aside className="cart-summary" aria-label="Order summary">
          <div className="cart-summary__heading">
            <h2>Order summary</h2>
            <button className="cart-summary__clear" onClick={clearCart}>
              Clear cart
            </button>
          </div>
          <div className="cart-summary__line">
            <span>Subtotal</span>
            <span>₦{total.toLocaleString()}</span>
          </div>
          <p className="cart-summary__note">Delivery details are added at checkout.</p>
          <div className="cart-summary__total">
            <span>Total</span>
            <strong>₦{total.toLocaleString()}</strong>
          </div>
          <Button
            label="Proceed to Checkout"
            variant="secondary"
            className="cart-summary__checkout"
            onClick={() => navigate("/checkout")}
          />
          <Link className="cart-summary__continue" to="/menu">Continue browsing</Link>
        </aside>
      </div>
    </main>
  );
}

export default Cart;