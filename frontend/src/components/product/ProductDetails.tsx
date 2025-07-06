import { useEffect, useState } from "react";
import type { ProductDetails } from "../../types/product.types";
import { toast } from "sonner";
import FeaturesSection from "./FeaturesSection";

const selectedProduct: ProductDetails = {
  _id: 23132,
  name: "Lorem, ipsum.",
  price: 75,
  originalPrice: 100,
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, labore",
  brand: "Coolwears",
  materials: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Lorem, ipsum.",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Lorem, ipsum.",
    },
  ],
};

function ProductDetails() {
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  const handleQuantity = (action: string): void => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color before adding to cart!");
      return;
    }

    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Product added to cart!");
      setIsButtonDisabled(false);
    }, 500);
  };

  useEffect(() => {
    if (selectedProduct.images.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
    console.log("useEffect");
  }, []);

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                src={image.url}
                alt={image.altText}
                key={index}
                onClick={() => setMainImage(image.url)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage as string}
                alt={selectedProduct.images[0].altText}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Mobile thumbnails */}
          <div className="md:hidden flex overscroll-x-contain space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                src={image.url}
                alt={image.altText}
                key={index}
                onClick={() => setMainImage(image.url)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
              />
            ))}
          </div>
          {/* Right Side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {"€"}
              {selectedProduct.originalPrice && selectedProduct.originalPrice}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              {"€"}
              {selectedProduct.price}
            </p>
            <p className=" text-gray-600 mb-4">{selectedProduct.description}</p>

            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border ${
                      color === selectedColor
                        ? "border-4 border-black"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 ">Size:</p>
              <div className="flex gap-2 mt-2 ">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border ${
                      size === selectedSize ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantity("minus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg "
                >
                  -
                </button>
                <span className="text-lg ">{quantity}</span>
                <button
                  onClick={() => handleQuantity("plus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg "
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className={`bg-black text-white py-2 px-6  w-full mb-4 ${
                isButtonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-900"
              }`}
              disabled={isButtonDisabled}
            >
              {isButtonDisabled ? "Adding..." : "ADD TO CART"}
            </button>

            {/* <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.materials}</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
          </div>
        </div>
        <div className="mt-8 ">
          <FeaturesSection />
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
