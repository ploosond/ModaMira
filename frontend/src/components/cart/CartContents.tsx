import { RiDeleteBin2Line } from "react-icons/ri";
import type { CartContent } from "../../types/cartContent.types";

function CartContents() {
  const cartProducts: Array<CartContent> = [
    {
      productionId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productionId: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 40,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productionId: 3,
      name: "Sneakers",
      size: "S",
      color: "White",
      quantity: 1,
      price: 60,
      image: "https://picsum.photos/200?random=3",
    },
    {
      productionId: 4,
      name: "Jacket",
      size: "L",
      color: "Black",
      quantity: 1,
      price: 80,
      image: "https://picsum.photos/200?random=4",
    },
    {
      productionId: 5,
      name: "Hat",
      size: "L",
      color: "Green",
      quantity: 2,
      price: 20,
      image: "https://picsum.photos/200?random=5",
    },
    {
      productionId: 6,
      name: "Socks",
      size: "M",
      color: "Gray",
      quantity: 3,
      price: 10.15,
      image: "https://picsum.photos/200?random=6",
    },
    {
      productionId: 7,
      name: "Backpack",
      size: "S",
      color: "Navy",
      quantity: 1,
      price: 45,
      image: "https://picsum.photos/200?random=7",
    },
    {
      productionId: 8,
      name: "Watch",
      size: "S",
      color: "Silver",
      quantity: 1,
      price: 120,
      image: "https://picsum.photos/200?random=8",
    },
  ];

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-4 border-b "
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500 ">
                {product.size} | color: {product.color}
              </p>
              <div className=" flex items-center mt-2">
                <button className="border border-gray-500 rounded px-2 py-1 text-xl font-medium cursor-pointer">
                  -
                </button>
                <span className="mx-3">{product.quantity}</span>
                <button className="border border-gray-500 rounded px-2 py-1 text-xl font-medium cursor-pointer">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>€ {product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin2Line className="w-6 h-6 mt-10 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CartContents;
