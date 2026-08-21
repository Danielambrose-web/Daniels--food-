import React, { useState } from "react";
import menuData from "../../data/menuData";
import { useCart } from "../../context/CartContext";
import FoodCard from "../../components/FoodCard/FoodCard";
import CategoryTabs from "../../components/CategoryTabs/Category";
import "./Menu.css";

export default function MenuPage() {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories dynamically from menuData + include 'All'
  const categories = ["All", ...new Set(menuData.map((item) => item.category))];

  // Filter items based on active tab selection
  const filteredMenu =
    selectedCategory === "All"
      ? menuData
      : menuData.filter((item) => item.category === selectedCategory);

  return (
    <main className="menu-page">
      <header className="menu-header">
        <h1 className="menu-title">Explore Our Menu</h1>
        <p className="menu-subtitle">
          Fresh ingredients, chef-crafted recipes, delivered right to you.
        </p>
      </header>

      {/* Category Tabs */}
      <CategoryTabs
        categories={categories}
        activeCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Food Cards Grid */}
      <div className="menu-grid">
        {filteredMenu.map((item) => (
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
    </main>
  );
}