import React from "react";
import { useStore } from "../store";

const Recomendec = () => {
  const { brands, selectedBrand, handleBrandChange } = useStore();

  return (
    <section className="ml-[240px] p-5">
      <div>
        <h2 className="text-xl font-bold mb-4">Recommended</h2>
        <div className="flex gap-4 flex-wrap">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => handleBrandChange(brand)}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedBrand === brand
                  ? "bg-black text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recomendec;
