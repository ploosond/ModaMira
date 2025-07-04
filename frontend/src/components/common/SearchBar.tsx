import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdCloseCircleOutline } from "react-icons/io";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const searchRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log("Search Term: ", searchTerm);
    setSearchTerm("");
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={searchRef}
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-26 z-50" : "w-auto"
      } `}
    >
      {isOpen ? (
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              onChange={({ target }) => setSearchTerm(target.value)}
              value={searchTerm}
              className="bg-gray-100 w-full px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none placeholder:text-gray-700"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 cursor-pointer"
            >
              <CiSearch className="w-6 h-6" />
            </button>
          </div>
          <button
            type="button"
            onClick={handleToggle}
            className="absolute right-75 transform rounded-full text-gray-600 hover:text-gray-500"
          >
            <IoMdCloseCircleOutline className="w-8 h-8" />
          </button>
        </form>
      ) : (
        <button onClick={handleToggle} className="cursor-pointer">
          <CiSearch className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
export default SearchBar;
