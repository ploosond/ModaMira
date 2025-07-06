import Hero from "../components/layout/Hero";
import GenderCollectionSection from "../components/product/GenderCollectionSection";
import ProductDetails from "../components/product/ProductDetails";

function Home() {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      {/* New Arrivals */}

      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4 ">Best Seller</h2>
      <ProductDetails />
    </div>
  );
}
export default Home;
