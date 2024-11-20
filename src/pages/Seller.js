import React from "react";
import { FiSearch, FiFilter, FiTag, FiPlus } from "react-icons/fi";


const SellerTable = () => {
  const sellers = [
    {
      name: "Automotive",
      storeId: "A22NDRL29NJ355",
      addedOn: "Aug 18, 2024",
      status: "Active",
      tags: "Favorite",
    },
    {
      name: "Jalomane LLC",
      storeId: "A3UC9NKIEXG1OP",
      addedOn: "Oct 29, 2024",
      status: "Active",
      tags: "",
    },
    {
      name: "electronics",
      storeId: "A5W198TSQJXA",
      addedOn: "Aug 18, 2024",
      status: "Active",
      tags: "",
    },
    {
      name: "Equity With Vision",
      storeId: "AKGBUCO0BLMHW",
      addedOn: "Nov 05, 2024",
      status: "Active",
      tags: "Favorite",
    },
    {
      name: "Northcoast Renaissance",
      storeId: "A3FWN2PWW18RS",
      addedOn: "Nov 12, 2024",
      status: "Active",
      tags: "",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Upper Control Section */}
      
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 space-y-4 md:space-y-0">
        {/* Search Bar */}
        <div className="flex items-center w-full md:w-1/3 bg-gray-100 rounded-md px-4 py-2">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent focus:outline-none text-sm"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 bg-gray-100 text-gray-600 hover:text-gray-800 px-4 py-2 rounded-md text-sm">
            <FiTag />
            <span>Manage Tags</span>
          </button>
          <button className="flex items-center space-x-2 bg-gray-100 text-gray-600 hover:text-gray-800 px-4 py-2 rounded-md text-sm">
            <FiFilter />
            <span>Filters</span>
          </button>
          <button className="flex items-center space-x-2 bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-md text-sm">
            <FiPlus />
            <span>Add Seller</span>
          </button>
        </div>
      </div>

      {/* Table Section with Horizontal Scrolling */}
      <div className="overflow-x-auto max-sm:w-72">
        <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border-b">Name</th>
              <th className="text-left px-4 py-2 border-b">Store ID</th>
              <th className="text-left px-4 py-2 border-b">Added on</th>
              <th className="text-left px-4 py-2 border-b">Status</th>
              <th className="text-left px-4 py-2 border-b">Tags</th>
              <th className="text-center px-4 py-2 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{seller.name}</td>
                <td className="px-4 py-2 border-b">{seller.storeId}</td>
                <td className="px-4 py-2 border-b">{seller.addedOn}</td>
                <td className="px-4 py-2 border-b">
                  <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-sm">
                    {seller.status}
                  </span>
                </td>
                <td className="px-4 py-2 border-b">
                  {seller.tags && (
                    <span className="text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full text-sm">
                      {seller.tags}
                    </span>
                  )}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  <button className="text-gray-600 hover:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M6 10a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerTable;
