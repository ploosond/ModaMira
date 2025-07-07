import { Link } from "react-router";
import type { Product } from "../../types/product.types";

interface ProductGridProps {
  products: Array<Product>;
}

function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols1 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <Link key={index} to={`/product/${product._id}`} className="block">
          <div className="bg-white p-4 rounded-lg">
            <div className="w-full h-96 mb-4">
              <img
                src={product.images[0].url}
                alt={product.images[0].altText}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-sm mb-2 ">{product.name}</h3>
            <p className="text-gray-500 font-medium text-sm tracking-tighter">
              € {product.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default ProductGrid;
