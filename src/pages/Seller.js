import React, { useEffect } from "react";
import { FiSearch, FiFilter, FiTag, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { loadUserSavedSellersAction } from "../Redux/Actions/loadCurrentUserAction";
import Loader from "../Components/Loader";

const SellerTable = () => {
  const dispatch = useDispatch();
  const { userSavedSellerLoading, userSavedSellers } = useSelector(
    (state) => state.loadUserSavedSellersReducer
  );

  useEffect(() => {
    dispatch(loadUserSavedSellersAction());
  }, [dispatch]);

  const dateConverter = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  };
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
            {userSavedSellerLoading ? (
              <div className="flex justify-center">
                <Loader />
              </div>
            ) : userSavedSellers && userSavedSellers.length > 0 ? (
              userSavedSellers.map((seller, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{seller?.sellerName}</td>
                  <td className="px-4 py-2 border-b">{seller?.sellerId}</td>
                  <td className="px-4 py-2 border-b">
                    {dateConverter(seller.date)}
                  </td>
                  <td className="px-4 py-2 border-b">
                    <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-sm">
                      {seller?.sellerStatus?.status ? "Paused" : "Active"}
                    </span>
                  </td>
                  <td className="px-4 py-2 border-b">
                    {seller?.isSaved && (
                      <span className="text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full text-sm">
                        {seller?.isSaved ? "Favourite" : ""}
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
              ))
            ) : (
              <h1 className=" font-bold text-center">No Seller found</h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerTable;
