import { useEffect, useRef, useState } from "react";
import type { Product } from "../types/product.types";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/product/FilterSidebar";
import SortOptions from "../components/product/SortOptions";
import ProductGrid from "../components/product/ProductGrid";

function Collection() {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

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
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" /> Filters
      </button>

      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50  left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>

        {/* Sort Options */}
        <SortOptions />

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
export default Collection;
