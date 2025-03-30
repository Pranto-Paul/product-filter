import { useState, useEffect } from "react";

function useCleanData(data) {
  const [products] = useState(data || []);
  const [categories, setCategories] = useState(["All"]);
  const [prices, setPrices] = useState([
    { label: "All", range: "All", min: 0, max: 999999 },
  ]);
  const [colors, setColors] = useState([
    {
      name: "All",
      class: "bg-gradient-to-r from-red-500 via-blue-500 to-green-500",
    },
  ]);
  const [brands, setBrands] = useState(["All Products"]);

  // Helper function to get the correct color class
  const getColorClass = (color) => {
    const colorMap = {
      black: "bg-black",
      white: "bg-gray-300",
      red: "bg-red-500",
      blue: "bg-blue-500",
      green: "bg-green-500",
      yellow: "bg-yellow-500",
      purple: "bg-purple-500",
      gray: "bg-gray-500",
    };
    return colorMap[color.toLowerCase()] || `bg-${color.toLowerCase()}-500`;
  };

  useEffect(() => {
    if (products.length > 0) {
      // Filter unique categories
      const uniqueCategories = [
        ...new Set(
          products.map(
            (item) =>
              item.category.charAt(0).toUpperCase() +
              item.category.slice(1).toLowerCase()
          )
        ),
      ];
      setCategories(["All", ...uniqueCategories]);

      //   filterout all unique brands
      const uniqueBrands = [
        ...new Set(
          products.map(
            (item) =>
              item.company.charAt(0).toUpperCase() +
              item.company.slice(1).toLowerCase()
          )
        ),
      ];

      setBrands(["All Products", ...uniqueBrands]);

      // Create price ranges
      const allPrices = products.map((item) => parseFloat(item.newPrice));
      const minPrice = Math.min(...allPrices);
      const maxPrice = Math.max(...allPrices);
      const priceRange = maxPrice - minPrice;
      const step = priceRange / 4;

      const priceRanges = [
        { label: "All", range: "All", min: 0, max: 999999 },
        {
          label: `$${Math.floor(minPrice)} - $${Math.floor(minPrice + step)}`,
          range: `${minPrice}-${minPrice + step}`,
          min: minPrice,
          max: minPrice + step,
        },
        {
          label: `$${Math.floor(minPrice + step)} - $${Math.floor(
            minPrice + 2 * step
          )}`,
          range: `${minPrice + step}-${minPrice + 2 * step}`,
          min: minPrice + step,
          max: minPrice + 2 * step,
        },
        {
          label: `$${Math.floor(minPrice + 2 * step)} - $${Math.floor(
            minPrice + 3 * step
          )}`,
          range: `${minPrice + 2 * step}-${minPrice + 3 * step}`,
          min: minPrice + 2 * step,
          max: minPrice + 3 * step,
        },
        {
          label: `Over $${Math.floor(minPrice + 3 * step)}`,
          range: `${minPrice + 3 * step}-${maxPrice}`,
          min: minPrice + 3 * step,
          max: maxPrice,
        },
      ];
      setPrices(priceRanges);

      // Filter unique colors and format them with proper color classes
      const uniqueColors = [
        ...new Set(products.map((item) => item.color.toLowerCase())),
      ];
      const formattedColors = uniqueColors.map((color) => ({
        name: color,
        class: getColorClass(color),
      }));
      setColors([colors[0], ...formattedColors]);
    }
  }, []);

  return { products, categories, prices, colors, brands };
}

export default useCleanData;
