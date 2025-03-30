import React from "react";
import Input from "../../components/Input";
import { useStore } from "../../store";

const Price = () => {
  const { prices, selectedPrice, handlePriceChange } = useStore();

  return (
    <div className="space-y-2">
      {prices.map((price) => (
        <Input
          key={price.range}
          name="price"
          value={price.range}
          label={price.label}
          checked={selectedPrice === price.range}
          onChange={() => handlePriceChange(price.range)}
        />
      ))}
    </div>
  );
};

export default Price;
