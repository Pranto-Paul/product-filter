import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { useStore } from "../store";
const Nav = () => {
  const { search, handleSearch } = useStore();

  const handleSearchResult = (val) => {
    handleSearch(val);
  };
  return (
    <nav className="fixed w-full top-0 left-0 flex items-center justify-between px-5 py-4 bg-white bg-opacity-70 backdrop-blur-md shadow-sm z-50">
      <div className="flex items-center gap-2 cursor-pointer">
        <h1 className="text-2xl">🛒</h1>
        <span className="text-xl font-semibold">ShopCart</span>
      </div>
      <div className="flex-1 max-w-xl mx-8">
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearchResult(e.target.value)}
          placeholder="Enter your search shoes"
          className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none border border-gray-200"
        />
      </div>
      <div className="flex items-center gap-6 text-xl">
        <a href="" className="hover:text-gray-500 transition-colors">
          <FiHeart className="text-gray-600" />
        </a>
        <a href="" className="hover:text-gray-500 transition-colors">
          <AiOutlineShoppingCart className="text-gray-600" />
        </a>
        <a href="" className="hover:text-gray-500 transition-colors">
          <AiOutlineUserAdd className="text-gray-600" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
