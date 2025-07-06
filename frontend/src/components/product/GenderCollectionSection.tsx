import womanCollection from "../../assets/women_collection.jpg";
import manCollection from "../../assets/men_collection.jpg";
import { Link } from "react-router";

function GenderCollectionSection() {
  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Woman Collection */}
        <div className="relative flex-1">
          <img
            src={womanCollection}
            alt="woman collection"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white/90 p-4 ">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Woman Collection
            </h2>
            <Link
              to="/collection/all?gender=Women"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Man Collection */}
        <div className="relative flex-1">
          <img
            src={manCollection}
            alt="woman collection"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white/90 p-4 ">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Man Collection
            </h2>
            <Link
              to="/collection/all?gender=Men"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default GenderCollectionSection;
