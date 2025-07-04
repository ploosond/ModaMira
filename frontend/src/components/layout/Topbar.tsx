import { SiMeta, SiInstagram, SiX } from "@icons-pack/react-simple-icons";

function Topbar() {
  return (
    <div className="bg-zalando text-white">
      <div className="container mx-auto flex justify-between py-3 ">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <SiMeta className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <SiInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <SiX className="w-5 h-5" />
          </a>
        </div>
        <div className="text-sm text-center grow">
          <span>
            Save even more: up to 70% off light summer styles for hot days
          </span>
        </div>
        <div className="hidden text-sm md:block">
          <a href="tel:+1234567890" className="hover:text-gray-300">
            +49 (123) 456-7890
          </a>
        </div>
      </div>
    </div>
  );
}
export default Topbar;
