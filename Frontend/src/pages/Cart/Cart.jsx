
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Button from "../../components/Button/Button";
import "./Cart.css";

function Cart() {
  const { cart, removeItem, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-page cart-page--empty">
        <h2>Your cart is empty</h2>
        <p className="text-body-sm">Looks like you haven't added anything yet.</p>
        <Link to="/menu">
          <Button label="Browse the Menu" variant="primary" />
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      <div className="cart-list">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item__image" />

            <div className="cart-item__details">
              <h4>{item.name}</h4>
              <p className="text-body-sm">₦{item.price.toLocaleString()}</p>
            </div>

            <div className="cart-item__quantity">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                −
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                +
              </button>
            </div>

            <p className="cart-item__subtotal">
              ₦{(item.price * item.quantity).toLocaleString()}
            </p>

            <button
              className="cart-item__remove"
              onClick={() => removeItem(item.id)}
              aria-label={`Remove ${item.name} from cart`}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <button className="cart-summary__clear" onClick={clearCart}>
          Clear Cart
        </button>
        <h3>Total: ₦{total.toLocaleString()}</h3>
        <Button
          label="Proceed to Checkout"
          variant="primary"
          onClick={() => navigate("/checkout")}
        />
      </div>
    </div>
  );
}

export default Cart;