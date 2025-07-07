import { IoMdCloseCircleOutline } from "react-icons/io";
import CartContents from "../cart/CartContents";
import { useNavigate } from "react-router";

interface CartDrawerProps {
  drawerOpen: boolean;
  toggleCartDrawer: () => void;
}

function CartDrawer({ drawerOpen, toggleCartDrawer }: CartDrawerProps) {
  const navigation = useNavigate();

  const handleCheckout = () => {
    toggleCartDrawer();
    navigation("/checkout");
  };
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[25rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer} className="cursor-pointer">
          <IoMdCloseCircleOutline className="w-6 h-6 text-gray-800" />
        </button>
      </div>
      {/* Cart contents with scrollable area  */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <CartContents />
      </div>

      {/* Checkout button fixed at the bottom */}
      <div className="p-4 bg-white sticky bottom-0">
        <button
          onClick={handleCheckout}
          className=" w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}
export default CartDrawer;
