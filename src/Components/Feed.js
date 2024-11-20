import React, { useState } from "react";
import { FiSearch, FiFilter, FiCheck } from "react-icons/fi";

function Feed() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const dropdownItems = ["Categories", "Buy Box", "Offers", "Sales Rank"];
  const totalResults = 40; // Total number of results
  const totalPages = Math.ceil(totalResults / rowsPerPage);

  const products = [
    {
      name: "We Are Young Life is Fun WYLF for Toyota Sienna 7 Passenger 2011-2020 - 3rd Row Set Seat Covers - Solid Gray Faux Leather",
      category: "Automotive",
      id: "B0DJG341BX",
      storefront: "FBM",
      buyBox: "$139.99",
      offers: 0,
      salesRank: "3M (1%)",
      monthlySold: "<50",
      avgPrice: "$139.99",
      stockCount: 200,
      daysAgo: 23,
      image: "https://via.placeholder.com/100",
    },
    {
      name: "FH Group Custom Fit Seat Covers for 2021-2024 Toyota Sienna, Seat Covers 2nd Row Set for Toyota Sienna 2021 2022 2023 2024, 7 Seater SUV Seat Covers, Solid Gray Neoprene, Toyota Accessories",
      category: "Automotive",
      id: "B0DFMW27H9",
      storefront: "FBM",
      buyBox: "$139.99",
      offers: 0,
      salesRank: "2M (1%)",
      monthlySold: "<50",
      avgPrice: "$139.99",
      stockCount: 5,
      daysAgo: 23,
      image: "https://via.placeholder.com/100",
    },
    {
      name: "FH Group Custom Fit Seat Covers for 2021-2024 Toyota Sienna, Seat Covers 2nd Row Set for Toyota Sienna 2021 2022 2023 2024, 7 Seater SUV Seat Covers, Solid Gray Neoprene, Toyota Accessories",
      category: "Automotive",
      id: "B0DFMW27H9",
      storefront: "FBM",
      buyBox: "$139.99",
      offers: 0,
      salesRank: "2M (1%)",
      monthlySold: "<50",
      avgPrice: "$139.99",
      stockCount: 5,
      daysAgo: 23,
      image: "https://via.placeholder.com/100",
    },
    {
      name: "FH Group Custom Fit Seat Covers for 2021-2024 Toyota Sienna, Seat Covers 2nd Row Set for Toyota Sienna 2021 2022 2023 2024, 7 Seater SUV Seat Covers, Solid Gray Neoprene, Toyota Accessories",
      category: "Automotive",
      id: "B0DFMW27H9",
      storefront: "FBM",
      buyBox: "$139.99",
      offers: 0,
      salesRank: "2M (1%)",
      monthlySold: "<50",
      avgPrice: "$139.99",
      stockCount: 5,
      daysAgo: 23,
      image: "https://via.placeholder.com/100",
    },
    {
      name: "FH Group Custom Fit Seat Covers for 2021-2024 Toyota Sienna, Seat Covers 2nd Row Set for Toyota Sienna 2021 2022 2023 2024, 7 Seater SUV Seat Covers, Solid Gray Neoprene, Toyota Accessories",
      category: "Automotive",
      id: "B0DFMW27H9",
      storefront: "FBM",
      buyBox: "$139.99",
      offers: 0,
      salesRank: "2M (1%)",
      monthlySold: "<50",
      avgPrice: "$139.99",
      stockCount: 5,
      daysAgo: 23,
      image: "https://via.placeholder.com/100",
    },
    {
      name: "FH Group Custom Fit Seat Covers for 2021-2024 Toyota Sienna, Seat Covers 2nd Row Set for Toyota Sienna 2021 2022 2023 2024, 7 Seater SUV Seat Covers, Solid Gray Neoprene, Toyota Accessories",
      category: "Automotive",
      id: "B0DFMW27H9",
      storefront: "FBM",
      buyBox: "$139.99",
      offers: 0,
      salesRank: "2M (1%)",
      monthlySold: "<50",
      avgPrice: "$139.99",
      stockCount: 5,
      daysAgo: 23,
      image: "https://via.placeholder.com/100",
    },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSelection = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item)
        ? prev.filter((selectedItem) => selectedItem !== item)
        : [...prev, item]
    );
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page on rows change
  };

  return (
    <div className="flex flex-col w-full h-full bg-gray-50">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between py-3 bg-white border-b border-gray-200 px-3">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-bold text-gray-800">Feed</h2>
          <div className="hidden sm:block bg-gray-100 px-3 py-1 rounded-md text-gray-600 text-sm">
            Automotive
          </div>
        </div>
        <button className="px-4 py-2 bg-gray-100 rounded-md text-gray-600 hover:bg-gray-200">
          Mark all as read
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-wrap items-center py-4 gap-2 bg-white px-3 relative">
        {/* Search Input */}
        <div className="flex items-center flex-grow bg-gray-100 rounded-md px-3">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent outline-none px-2 py-2 text-gray-700"
          />
        </div>

        {/* Selected Items */}
        <div className="flex items-center flex-wrap gap-2">
          {selectedItems.map((item) => (
            <span
              key={item}
              className="flex items-center border border-dotted border-black px-2 py-1 rounded-md text-sm text-gray-700"
            >
              {item}
              <button
                className="ml-1 text-gray-500 hover:text-gray-700"
                onClick={() => toggleSelection(item)}
              >
                ✕
              </button>
            </span>
          ))}
        </div>

        {/* Filters Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="px-4 py-2 bg-gray-100 rounded-md text-gray-600 hover:bg-gray-200 flex items-center"
          >
            <FiFilter className="mr-2" />
            Filters
          </button>
          {isDropdownOpen && (
            <div className="absolute top-12 md:right-5  bg-white border border-gray-200 shadow-md rounded-md w-40 z-10">
              <ul>
                {dropdownItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => toggleSelection(item)}
                  >
                    <span>{item}</span>
                    {selectedItems.includes(item) && (
                      <FiCheck className="text-green-500" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 gap-4 overflow-y-auto px-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col bg-white border rounded-md p-4 hover:shadow-md"
          >
            <div className="flex items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="ml-4">
                <h3 className="text-gray-800 font-semibold text-sm sm:text-base">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-xs text-gray-400">{product.id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div
        className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sticky bottom-0"
        style={{ zIndex: 10 }}
      >
        {/* Results info */}
        <span className="text-sm text-gray-600 mb-2 sm:mb-0">
          {rowsPerPage * (currentPage - 1) + 1} -{" "}
          {Math.min(rowsPerPage * currentPage, totalResults)} of {totalResults}{" "}
          result(s) shown
        </span>

        {/* Pagination controls */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
          {/* Rows per page dropdown */}
          <div className="flex items-center mb-2 sm:mb-0">
            <label htmlFor="rowsPerPage" className="text-sm text-gray-600">
              Rows per page:
            </label>
            <select
              id="rowsPerPage"
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
              className="ml-2 px-2 py-1 border border-gray-300 rounded-md text-sm"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>

          {/* Page info */}
          <span className="text-sm text-gray-600 mb-2 sm:mb-0">
            Page {currentPage} of {totalPages}
          </span>

          {/* Previous and Next buttons */}
          <div className="flex space-x-2">
            <button
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 disabled:bg-gray-200 disabled:text-gray-400"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 disabled:bg-gray-200 disabled:text-gray-400"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
