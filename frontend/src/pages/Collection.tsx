import { useEffect, useRef, useState } from "react";
import type { Product } from "../types/product.types";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/product/FilterSidebar";

function Collection() {
  const [products, setProducts] = useState<Array<Product>>([]);

  const sidebarRef = useRef(null);

  const fetchProducts = () => {
    setTimeout(() => {
      const fetchedProducts: Array<Product> = [
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=1",
              altText: "Lorem, ipsum.",
            },
          ],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=2",
              altText: "Lorem, ipsum.",
            },
          ],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=3",
              altText: "Lorem, ipsum.",
            },
          ],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=4",
              altText: "Lorem, ipsum.",
            },
          ],
        },
        {
          _id: 5,
          name: "Product 5",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=5",
              altText: "Lorem, ipsum.",
            },
          ],
        },
        {
          _id: 6,
          name: "Product 6",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=6",
              altText: "Lorem, ipsum.",
            },
          ],
        },
        {
          _id: 7,
          name: "Product 7",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=7",
              altText: "Lorem, ipsum.",
            },
          ],
        },
        {
          _id: 8,
          name: "Product 8",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=8",
              altText: "Lorem, ipsum.",
            },
          ],
        },
        {
          _id: 9,
          name: "Product 9",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=9",
              altText: "Lorem, ipsum.",
            },
          ],
        },
        {
          _id: 10,
          name: "Product 10",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=10",
              altText: "Lorem, ipsum.",
            },
          ],
        },
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=11",
              altText: "Lorem, ipsum.",
            },
          ],
        },
      ];
      setProducts(fetchedProducts);
    }, 500);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter button */}
      <button className="lg:hidden border p-2 flex justify-center items-center">
        <FaFilter className="mr-2" />
      </button>

      {/* Filter Sidebar */}
      <div>
        <FilterSidebar />
      </div>
    </div>
  );
}
export default Collection;
