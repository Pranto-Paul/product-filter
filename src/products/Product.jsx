import React from "react";
import Card from "../components/Card";
import { useStore } from "../store";

const Product = () => {
  const { filteredProducts } = useStore();

  return (
    <section className="ml-[240px] p-5">
      <div className="grid grid-cols-4 gap-4">
        {filteredProducts.map((product, index) => (
          <Card
            key={index}
            img={product.img}
            title={product.title}
            reviews={product.reviews}
            prevPrice={product.prevPrice}
            newPrice={product.newPrice}
            company={product.company}
          />
        ))}
      </div>
    </section>
  );
};

export default Product;
