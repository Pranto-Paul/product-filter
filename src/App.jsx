import React from "react";
import Nav from "./navigation/Nav";
import Product from "./products/Product";
import Recomendec from "./recomended/Recomendec";
import Sidebar from "./sidebar/Sidebar";
import { StoreProvider } from "./store";
const App = () => {
  return (
    <StoreProvider>
      <div className="bg-gray-100 min-h-screen">
        <Nav />
        <Sidebar />
        <main className="pl-[100px] pt-16">
          <Recomendec />
          <Product />
        </main>
      </div>
    </StoreProvider>
  );
};

export default App;
