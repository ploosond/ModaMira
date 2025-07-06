import { Link } from "react-router";
import { SiMeta, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import { FiPhone } from "react-icons/fi";

function Footer() {
  return (
    <footer className="mx-4 md:ml-10 lg:ml-20 xl:ml-30 py-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 lg:px-4">
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            nesciunt quidem ex repellendus. Error, autem? Nostrum, dolorum.
          </p>
          <p className="font-medium text-sm text-gray-600 mb-2">
            Sign up and get 10% off on your first order
          </p>
          {/* Newsletter form */}
          <form className="flex">
            <input
              type="email"
              placeholder="Enter you email"
              className="p-3 w-full md:w-auto text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-zalando text-white px-6 py-3 text-sm rounded-r hover:bg-zalando/90 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="sapce-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men Bottom Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men Bottom Wear
              </Link>
            </li>
          </ul>
        </div>

        {/* Suppoer Links */}

        <div>
          <h3 className="text-lg text-gray-800 mb-4">Suport</h3>
          <ul className="sapce-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <SiMeta className="w-5 h-5 " />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-700"
            >
              <SiInstagram className="w-5 h-5 " />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-shadow-gray-300"
            >
              <SiX className="w-5 h-5 " />
            </a>
          </div>
          <p className="text-gray-800 mb-4">Call Us</p>
          <p>
            <FiPhone className="w-5 h-5" />
            <span className="mt-2 block">+49 (123) 456-7890</span>
          </p>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="container mx-auto mt-8 px-4 lg:px-0 border-gray-200 pt-6">
        <p className="text-gray-500 text-sm tracking-tighter text-center">
          Copyright 2024 © ModaMira. All Right Reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
