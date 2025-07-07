import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

interface Filter {
  category: string;
  gender: string;
  color: string;
  size: Array<string>;
  material: Array<string>;
  brand: Array<string>;
  minPrice: number;
  maxPrice: number;
}

type FilterKeys = keyof Filter;

function FilterSidebar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [filters, setFilters] = useState<Filter>({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = event.target as {
      name: FilterKeys;
      value: string;
      checked: boolean;
      type: string;
    };

    let updatedFilters: Filter = { ...filters };

    if (type === "checkbox") {
      if (["size", "material", "brand"].includes(name)) {
        const key = name as "size" | "material" | "brand";
        if (checked) {
          updatedFilters[key] = [...(updatedFilters[key] || []), value];
        } else {
          updatedFilters[key] = updatedFilters[key].filter(
            (item) => item !== value
          );
        }
      }
    } else {
      if (["category", "gender", "color"].includes(name)) {
        const key = name as "category" | "gender" | "color";
        updatedFilters[key] = value;
      }
    }
    setFilters(updatedFilters);
    updateUrlParams(updatedFilters);
  };

  const updateUrlParams = (newFilters: Filter) => {
    const params = new URLSearchParams();

    Object.keys(newFilters).forEach((key) => {
      const value = newFilters[key as keyof Filter];
      if (Array.isArray(value) && value.length > 0) {
        params.append(key, value.join(","));
      } else if (value !== "" && value !== 0) {
        params.append(key, String(value));
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  const categories = ["Top Wear", "Bottom Wear"];

  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyester",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];

  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChiStyle",
  ];

  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice ? Number(params.minPrice) : 0,
      maxPrice: params.maxPrice ? Number(params.maxPrice) : 100,
    });

    setPriceRange([0, Number(params.maxPrice) || 100]);
  }, [searchParams]);

  const priceRangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = event.target.value;
    setPriceRange([0, Number(newPrice)]);

    const updatedFilters = {
      ...filters,
      minPrice: 0,
      maxPrice: Number(newPrice),
    };

    setFilters(filters);
    updateUrlParams(updatedFilters);
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 m-4">Filter</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              checked={filters.category === category}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>

      {/* Gender Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              checked={filters.gender === gender}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>

      {/* Colors Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Colors</label>
        <div className="w-1/2 grid grid-cols-3 md:grid-cols-3 md:gap-x-10 space-y-2">
          {colors.map((color) => (
            <label key={color}>
              <input
                type="radio"
                name="color"
                value={color}
                onChange={handleFilterChange}
                className="sr-only"
                style={{ backgroundColor: color.toLocaleLowerCase() }}
              />
              <span
                className={`w-6 h-6 inline-block rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${
                  filters.color === color ? "ring-2 ring-blue-500" : ""
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
              ></span>
            </label>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Sizes</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-centermb-1">
            <input
              type="checkbox"
              name="size"
              value={size}
              onChange={handleFilterChange}
              checked={filters.size.includes(size)}
              className="mr-2 w-4 h-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* Material Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Materials
        </label>
        {materials.map((material) => (
          <div key={material} className="flex items-centermb-1">
            <input
              type="checkbox"
              name="material"
              value={material}
              onChange={handleFilterChange}
              checked={filters.material.includes(material)}
              className="mr-2 w-4 h-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brands</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-centermb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              onChange={handleFilterChange}
              checked={filters.brand.includes(brand)}
              className="mr-2 w-4 h-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>
        <input
          type="range"
          name="priceRange"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={priceRangeHandle}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>€0</span>
          <span>€{priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
}
export default FilterSidebar;
