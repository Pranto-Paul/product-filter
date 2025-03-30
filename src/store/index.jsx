import { createContext, useContext, useState, useEffect } from "react";
import useCleanData from "../hook";
import data from "../db/data";

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const { products, colors, categories, prices, brands } = useCleanData(data);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All Products");
  const [search, setSearch] = useState("");

  // Apply all filters
  useEffect(() => {
    let filtered = [...products];

    // Apply search filter
    if (search) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory.toLowerCase() !== "All".toLowerCase()) {
      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Apply brand filter
    if (selectedBrand !== "All Products") {
      filtered = filtered.filter(
        (product) =>
          product.company.toLowerCase() === selectedBrand.toLowerCase()
      );
    }

    // Apply color filter
    if (selectedColor.toLowerCase() !== "All".toLowerCase()) {
      filtered = filtered.filter(
        (product) => product.color.toLowerCase() === selectedColor.toLowerCase()
      );
    }

    // Apply price filter
    if (selectedPrice.toLowerCase() !== "All".toLowerCase()) {
      const selectedPriceRange = prices.find(
        (price) => price.range === selectedPrice
      );
      if (selectedPriceRange) {
        filtered = filtered.filter((product) => {
          const price = parseFloat(product.newPrice);
          return (
            price >= selectedPriceRange.min && price <= selectedPriceRange.max
          );
        });
      }
    }

    setFilteredProducts(filtered);
  }, [
    products,
    search,
    selectedCategory,
    selectedPrice,
    selectedColor,
    selectedBrand,
    prices,
  ]);

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (priceRange) => {
    setSelectedPrice(priceRange);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  return (
    <StoreContext.Provider
      value={{
        filteredProducts,
        search,
        handleSearch,
        colors,
        categories,
        prices,
        brands,
        selectedCategory,
        selectedPrice,
        selectedColor,
        selectedBrand,
        handleCategoryChange,
        handlePriceChange,
        handleColorChange,
        handleBrandChange,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
