import React from "react";
import Category from "./category/Category";
import Colors from "./colors/Colors";
import Price from "./price/Price";

const Sidebar = () => {
  return (
    <section className="w-[240px] bg-white h-[calc(100vh-0px)] fixed left-0 top-0 shadow-sm">
      <div className="h-full overflow-y-auto">
        <div className="p-6 pt-24 space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Category</h3>
            <Category />
          </div>
          <hr />
          <div>
            <h3 className="text-lg font-semibold mb-4">Price</h3>
            <Price />
          </div>
          <hr />
          <div>
            <h3 className="text-lg font-semibold mb-4">Colors</h3>
            <Colors />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
