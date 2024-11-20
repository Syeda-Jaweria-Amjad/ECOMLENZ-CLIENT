import React, { useState } from "react";
import { FiSearch, FiFilter } from "react-icons/fi";

const SaveProducts = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const products = [
    {
      title:
        "FH Group Custom Fit Seat Covers for 2021-2024 Toyota Sienna, Seat Covers 2nd Row Set for Toyota Sienna 2021 2022 2023 2024, 7 Seater SUV Seat Covers, Solid Gray Neoprene, Toyota Accessories",
      category: "Automotive",
      rating: 5,
      storeId: "B0DFMW27H9",
      storefront: "FBM",
      price: "$139.99",
      offers: 0,
      salesRank: "2M (1%)",
      monthlySold: "<50",
      avgPrice: "$139.99",
      stockCount: 5,
      chart: "Chart Placeholder",
      daysAgo: "23 days ago",
    },
    {
      title:
        "Bella Vita Women's Hattie, Cognac Suede Leather, 6 X-Wide",
      category: "Clothing, Shoes & Jewelry",
      rating: 4.1,
      storeId: "B0B89NYJC2",
      storefront: "FBM",
      price: "$94.24",
      offers: 0,
      salesRank: "712K",
      monthlySold: "<30",
      avgPrice: "$94.24",
      stockCount: 3,
      chart: "Chart Placeholder",
      daysAgo: "23 days ago",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        {/* Search Bar */}
        <div className="flex items-center w-full md:w-1/3 bg-gray-100 rounded-md px-4 py-2">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent focus:outline-none text-sm"
          />
        </div>

        {/* Filters Button */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 bg-gray-100 text-gray-600 hover:text-gray-800 px-4 py-2 rounded-md text-sm mt-2 md:mt-0"
          >
            <FiFilter />
            <span>Filters</span>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Home</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">About</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Products List */}
      <div className="grid grid-cols-1 gap-4 ">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-md shadow-md overflow-hidden"
          >
            {/* Left Section (Image and Details) */}
            <div className="flex flex-col p-4 space-y-2 flex-1">
              <h2 className="text-sm font-semibold text-gray-800">
                {product.title}
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                  {product.category}
                </span>
                <span className="text-xs text-yellow-500">{product.rating} ★</span>
              </div>
              <span className="text-xs text-gray-500">{product.storeId}</span>
              <div className="flex items-center space-x-4 text-sm mt-2">
                <span className="text-gray-800 font-medium">{product.price}</span>
                <span className="text-gray-500">{product.storefront}</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>Offers: {product.offers}</span>
                <span>Sales Rank: {product.salesRank}</span>
                <span>Monthly Sold: {product.monthlySold}</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>Avg Price: {product.avgPrice}</span>
                <span>Stock Count: {product.stockCount}</span>
              </div>
            </div>

            {/* Right Section (Chart and Additional Info) */}
            <div className="flex flex-col items-center justify-between p-4 space-y-4 md:w-1/3 border-t md:border-t-0 md:border-l border-gray-200">
              <div className="h-24 w-full bg-gray-100 rounded-md flex items-center justify-center text-gray-500 text-sm">
                {product.chart}
              </div>
              <div className="text-xs text-gray-500">{product.daysAgo}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaveProducts;
