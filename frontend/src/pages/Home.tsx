import Hero from "../components/layout/Hero";
import FeaturesSection from "../components/product/FeaturesSection";
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

      {/* Feature Section */}
      <FeaturesSection />
    </div>
  );
}
export default Home;
