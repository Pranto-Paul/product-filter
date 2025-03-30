import React from "react";
import Input from "../../components/Input";
import { useStore } from "../../store";

const Category = () => {
  //   const categories = ["All", "Sneakers", "Flats", "Sandals", "Heels"];
  const { categories, selectedCategory, handleCategoryChange } = useStore();

  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <Input
          key={category}
          name="category"
          value={category.toLowerCase()}
          label={category}
          checked={selectedCategory === category}
          onChange={() => handleCategoryChange(category)}
        />
      ))}
    </div>
  );
};

export default Category;
