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
  return (
    <div className="food-card">
      <img
        src={image}
        alt={name}
        className="food-card-image"
      />

      <div className="food-card-info">
        <div className="food-header">
          <h3>{name}</h3>
          <p className="food-price">₦{price.toLocaleString()}</p>
        </div>

        <p className="food-disc">
          {description}
        </p>

        <Button
          label="Add To Cart"
          variant="primary"
          onClick={() =>
            onAddToCart({
              id,
              name,
              price,
              description,
              image,
            })
          }
        />
      </div>
    </div>
  );
};

export default FoodCard;