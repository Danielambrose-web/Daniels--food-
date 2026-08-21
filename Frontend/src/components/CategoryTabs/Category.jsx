import React from "react";
import "./Category.css";

export default function CategoryTabs({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="category-tabs-container">
      {categories.map((category) => (
        <button
          key={category}
          className={`tab-btn ${activeCategory === category ? "active" : ""}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}