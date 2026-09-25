import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import Button from "../Button/Button";
import "./FoodCard.css";

const FoodCard = ({
  id,
  name,
  price,
  description,
  image,
  onAddToCart,
}) => {
  const [imageError, setImageError] = useState(false);
  const { cart = [], updateQuantity, removeItem, addItem } = useCart() || {};
  const quantity = cart?.find((item) => item.id === id)?.quantity ?? 0;

  const formattedPrice =
    typeof price === "number"
      ? `₦${price.toLocaleString()}`
      : price?.toString().startsWith("₦") || price?.toString().startsWith("$")
      ? price
      : `₦${price}`;

  const handleAdd = () => {
    if (onAddToCart) {
      onAddToCart({ id, name, price, description, image });
    } else if (addItem) {
      addItem({ id, name, price, description, image });
    }
  };

  return (
    <div className="food-card">
      <div className="food-card-image-wrapper">
        {image && !imageError ? (
          <img
            src={image}
            alt={name}
            className="food-card-image"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="food-card-image-placeholder">FOOD IMAGE</div>
        )}
      </div>

      <div className="food-card-info">
        <div className="food-header">
          <h3 className="food-title">{name}</h3>
          <span className="food-price">{formattedPrice}</span>
        </div>

        <p className="food-desc">
          {description}
        </p>

        {quantity > 0 ? (
          <div className="food-card-quantity" aria-label={`${name} quantity controls`}>
            <button
              type="button"
              className="food-quantity-button"
              aria-label={`Remove one ${name}`}
              onClick={() =>
                quantity === 1 ? removeItem(id) : updateQuantity(id, quantity - 1)
              }
            >
              -
            </button>
            <span className="food-quantity-count" aria-live="polite">{quantity}</span>
            <button
              type="button"
              className="food-quantity-button"
              aria-label={`Add one ${name}`}
              onClick={handleAdd}
            >
              +
            </button>
          </div>
        ) : (
          <Button
            label="+ Add to Cart"
            variant="secondary"
            className="food-card-btn"
            onClick={handleAdd}
          />
        )}
      </div>
    </div>
  );
};

export default FoodCard;