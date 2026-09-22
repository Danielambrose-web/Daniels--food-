import React, { useState } from "react";
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

  const formattedPrice =
    typeof price === "number"
      ? `₦${price.toLocaleString()}`
      : price?.toString().startsWith("₦") || price?.toString().startsWith("$")
      ? price
      : `₦${price}`;

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

        <Button
          label="+ Add to Cart"
          variant="secondary"
          className="food-card-btn"
          onClick={() => {
            if (onAddToCart) {
              onAddToCart({
                id,
                name,
                price,
                description,
                image,
              });
            }
          }}
        />
      </div>
    </div>
  );
};

export default FoodCard;