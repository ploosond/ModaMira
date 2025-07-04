import { Link } from "react-router";
import { PiShoppingBagLight, PiUserCircleLight } from "react-icons/pi";
import { HiOutlineBars3 } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../layout/CartDrawer";
import { useState } from "react";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(true);

  const handleToggle = () => {
    setDrawerOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            ModaMira
          </Link>
        </div>
        {/* Nav Link */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <PiUserCircleLight className="w-7 h-7 text-gray-700" />
          </Link>
          <button
            onClick={handleToggle}
            className="relative cursor-pointer hover:text-black"
          >
            <PiShoppingBagLight className="w-7 h-7 text-gray-700" />
            <span className="absolute -bottom-2 bg-zalando text-white text-xs font-mono rounded-full h-5 w-5 p-0.5">
              4
            </span>
          </button>
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          <button className="cursor-pointer">
            <HiOutlineBars3 className="md:hidden w-7 h-7 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} handleToggle={handleToggle} />
    </>
  );
}
export default Navbar;
