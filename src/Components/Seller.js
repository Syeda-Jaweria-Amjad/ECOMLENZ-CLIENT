import React, { useState, useEffect, useRef } from "react";
import { FiPlus, FiSearch, FiFilter, FiChevronDown } from "react-icons/fi";
import { FaRegBookmark, FaBookmark, FaRegSquare } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import SellersModal from "./Sellermodal";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector, useDispatch } from "react-redux";
import {
  addSellerAction,
  clearErrorsAction,
  loadUserAllSellersAction,
  pauseSellerAction,
  saveSellerAction,
} from "../Redux/Actions/loadCurrentUserAction";
import {
  handleShowFailureToast,
  handleShowSuccessToast,
} from "./ToastMessages/ToastMessage";
import { Toaster } from "react-hot-toast";
import Loader from "./Loader";
import { useSeller } from "./ContextAPIs/SellerProvider";
function Sellers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [addSellerDropdownOpen, setAddSellerDropdownOpen] = useState(false);

  const [bookmarked, setBookmarked] = useState({});
  const [activeCard, setActiveCard] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null); // For Material-UI dropdown
  const [menuDropdown, setMenuDropdown] = useState(null); // Track active menu dropdown index
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const { sellers } = useSelector((state) => state.loadUserAllSellersReducer);
  const { addSellerLoading, addSellerMessage, addSellerError } = useSelector(
    (state) => state.addSellerReducer
  );
  const { pauseSellerLoading, pauseSellerError, pauseSellerMessage } =
    useSelector((state) => state.pauseSellerReducer);
  const { setSelectedSellerId } = useSeller();
  // const sellers = [
  //   { name: "Automotive", id: "A22NDRL29NJ355", active: true },
  //   { name: "electronics", id: "A5W198TSQJIXA", active: true },
  //   { name: "Jalomane LLC", id: "A3UC9NK1EXG1OP", active: true },
  //   { name: "Equity With Vision", id: "AKGBUC00BLMHW", active: true },
  //   { name: "Northcoast Renaissance", id: "A3FWN2PWW18RS", active: true },
  //   { name: "Northcoast Renaissance", id: "A3FWN2PWW18RS", active: true },
  //   { name: "Northcoast Renaissance", id: "A3FWN2PWW18RS", active: true },
  //   { name: "Northcoast Renaissance", id: "A3FWN2PWW18RS", active: true },
  //   { name: "Northcoast Renaissance", id: "A3FWN2PWW18RS", active: true },
  //   { name: "Northcoast Renaissance", id: "A3FWN2PWW18RS", active: true },
  // ];

  const toggleBookmark = (index) => {
    setBookmarked((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleMenuDropdown = (index) => {
    setMenuDropdown((prevIndex) => (prevIndex === index ? null : index)); // Open or close the clicked menu
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuDropdown(null); // Close the menu dropdown
        setSortDropdownOpen(false); // Close sort dropdown as well
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuOpen = (event, index) => {
    setActiveCard(index);
    setMenuAnchorEl(event.currentTarget); // Set anchor element for dropdown
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null); // Close the dropdown
  };

  useEffect(() => {
    dispatch(clearErrorsAction());
    dispatch(loadUserAllSellersAction());
  }, [dispatch]);
  const [id, setId] = useState(null);
  const handleAddSeller = () => {
    if (!id) {
      alert("Please enter a seller ID");
      return;
    }
    dispatch(addSellerAction(id));
  };

  useEffect(() => {
    if (!addSellerLoading && addSellerMessage) {
      handleShowSuccessToast(addSellerMessage);
      setId("");
      dispatch(clearErrorsAction());
      dispatch(loadUserAllSellersAction());
    } else if (!addSellerLoading && addSellerError) {
      setId("");
      handleShowFailureToast(addSellerError);
      dispatch(clearErrorsAction());
    }
  }, [addSellerMessage, addSellerLoading, addSellerError, dispatch]);

  useEffect(() => {
    if (!pauseSellerLoading && pauseSellerMessage) {
      handleShowSuccessToast(pauseSellerMessage);
      dispatch(clearErrorsAction());
      dispatch(loadUserAllSellersAction());
    } else if (!pauseSellerLoading && pauseSellerError) {
      handleShowFailureToast(pauseSellerError);
      dispatch(clearErrorsAction());
    }
  }, [pauseSellerMessage, pauseSellerLoading, pauseSellerError, dispatch]);
  const handlePauseSeller = (id) => {
    dispatch(clearErrorsAction());
    dispatch(pauseSellerAction(id));
  };
  const { saveSellerLoading, saveSellerMessage, saveSellerError } = useSelector(
    (state) => state.saveSellerReducer
  );
  const handleSaveSeller = (id) => {
    if (id) {
      dispatch(clearErrorsAction());
      dispatch(saveSellerAction(id));
    } else {
      handleShowFailureToast("Id is missing");
    }
  };

  useEffect(() => {
    if (!saveSellerLoading && saveSellerMessage) {
      handleShowSuccessToast(saveSellerMessage);
      dispatch(clearErrorsAction());
      dispatch(loadUserAllSellersAction());
    } else if (!saveSellerLoading && saveSellerError) {
      handleShowFailureToast(saveSellerError);
      dispatch(clearErrorsAction());
    }
  }, [saveSellerLoading, saveSellerError, saveSellerMessage, dispatch]);

  const [isSavedShowing, setSavedShowing] = useState(false);
  const [filterSellersForBookmarks, setFilterSellersForBookmarks] =
    useState(sellers);
  useEffect(() => {
    if (isSavedShowing) {
      let temp = sellers.filter((s) => s.isSaved === true);
      setFilterSellersForBookmarks(temp);
      return;
    } else {
      setFilterSellersForBookmarks(sellers);
    }
  }, [setFilterSellersForBookmarks, isSavedShowing, sellers]);
  return (
    <div
      className="relative flex flex-col w-full h-full bg-gray-50"
      ref={dropdownRef}
    >
      <Toaster />
      {/* Modal Button for Mobile */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="md:hidden fixed  top-[65px]  bg-black rounded text-white px-1 shadow-lg z-50 w-52"
      >
        Sellers
      </button>

      {/* Modal */}
      <SellersModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sellers={sellers}
      />

      {/* Sellers Section for Larger Screens */}
      <div className="hidden md:flex flex-col w-full h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-800">Sellers</h2>
          <button className="flex items-center px-3 py-2 bg-gray-100 rounded-md text-gray-600 hover:bg-gray-200">
            Tags <FiFilter className="ml-2" />
          </button>
        </div>

        {/* Search, Add, and Sort Section */}
        <div className="relative flex items-center px-6 py-3 bg-gray-50 border-b border-gray-200 space-x-4">
          {/* add seller btn */}
          <button
            onClick={() => setAddSellerDropdownOpen(!addSellerDropdownOpen)}
            className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-md"
          >
            <FiPlus className="text-xl" />
          </button>
          {/* Add seller dialog box */}
          <div
            className={`absolute top-12 left-0 z-20 mt-3 origin-top-right rounded-md bg-white py-1 ring-1 ring-black ring-opacity-5 focus:outline-none shadow-xl ${
              !addSellerDropdownOpen ? "hidden" : ""
            }`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
          >
            <div className="py-1 px-2 flex gap-2 justify-between">
              <div>
                <div className="text-md">Seller ID*</div>
                <div>
                  <input
                    type="text"
                    className="mt-2 w-40 h-8 px-2 text-sm rounded-md border border-gray-500"
                    placeholder="Enter Seller ID"
                    onChange={(e) => setId(e.target.value)}
                    value={id} // Bind to state
                    // Update state
                  />
                </div>
              </div>
              <div className="flex flex-col justify-end items-end gap-2">
                <div>
                  <button className="bg-gray-200 text-black text-sm px-2 rounded">
                    2/200
                  </button>
                </div>
                <div className="flex flex-col justify-end items-end gap-2">
                  {addSellerLoading ? (
                    <div className="text-sm w-20 text-white h-8 px-2 rounded-md bg-black hover:bg-gray-800 flex justify-center items-center">
                      <Loader />
                    </div>
                  ) : (
                    <button
                      className="text-[0.65rem] w-20 text-white h-8 px-2 rounded-md bg-black hover:bg-gray-800"
                      onClick={handleAddSeller}
                    >
                      Add Seller
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 flex items-center bg-white border border-gray-300 rounded-md px-3">
            <FiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-full h-10 border-none outline-none px-2 text-sm"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
              className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-200"
            >
              Sort <FiChevronDown className="ml-2" />
            </button>
            {sortDropdownOpen && (
              <div className="absolute mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                <div className="py-2">
                  <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Name
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Active
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* All Sellers Section */}

        <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="text-lg font-semibold text-gray-800">
              All Sellers
            </div>
            <div className="text-white bg-black rounded-full px-3 py-1 text-sm font-medium">
              {sellers && sellers.length}
            </div>
          </div>
          <div>
            {isSavedShowing ? (
              <FaBookmark
                className="text-black cursor-pointer"
                onClick={() => setSavedShowing(false)}
              />
            ) : (
              <FaRegBookmark
                className="text-gray-500 cursor-pointer"
                onClick={() => setSavedShowing(true)}
              />
            )}
          </div>
        </div>

        {/* Sellers List */}
        <div className="flex flex-col flex-grow px-3 py-4 overflow-y-auto max-h-[calc(100vh-150px)] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thumb-rounded-md">
          {filterSellersForBookmarks?.map((seller, index) => (
            <div
              key={index}
              onClick={() => {
                setActiveCard(index);
                setSelectedSellerId(seller.sellerId);
              }}
              className={`relative flex items-center justify-between py-3 px-4 bg-white border rounded-md mt-3 hover:shadow-md ${
                activeCard === index ? "border-black" : "border-gray-300"
              }`}
            >
              <button
                onClick={(e) => handleMenuOpen(e, index)}
                className="absolute top-4 right-4 rounded-md px-1 py-1 border border-gray-200"
              >
                <CiMenuKebab />
              </button>
              <h1 className="absolute top-4 right-14 bg-black p-1 w-7 h-7 flex justify-center items-center rounded-full text-white">
                {seller?.newProductCount}
              </h1>
              {/* Material-UI Dropdown */}
              <Menu
                anchorEl={menuAnchorEl}
                open={Boolean(menuAnchorEl) && activeCard === index}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    handlePauseSeller(seller?.sellerId);
                  }}
                >
                  {seller.pauseStatus.status
                    ? "Resume Seller"
                    : "Pause Seller "}
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>About</MenuItem>
              </Menu>

              {/* Seller details */}
              <div>
                <div className="text-gray-800 font-semibold">
                  {seller.sellerName}
                </div>
                <div className="text-sm text-gray-500">{seller.sellerId}</div>
                <div className="mt-1 flex items-center">
                  <span
                    className="cursor-pointer text-lg px-1 py-1 border border-gray-300 rounded-md"
                    onClick={() => toggleBookmark(index)}
                  >
                    {seller?.isSaved ? (
                      <FaBookmark
                        className="text-black"
                        onClick={() => handleSaveSeller(seller?._id)}
                      />
                    ) : (
                      <FaRegBookmark
                        className="text-gray-500"
                        onClick={() => handleSaveSeller(seller?._id)}
                      />
                    )}
                  </span>
                  <div className="shadow px-3 py-1 ml-3 flex justify-center items-center border border-gray-300 rounded-lg">
                    <span>
                      <FaRegSquare className="text-xs rounded-md bg-[rgb(247,254,231)]" />
                    </span>
                    <span className="text-sm text-gray-700 ml-2">
                      {seller && seller.pauseStatus.status
                        ? "Paused"
                        : "Active"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sellers;
