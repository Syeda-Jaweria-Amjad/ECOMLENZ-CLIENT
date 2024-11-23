import React, { useEffect } from "react";
import Header from "../Components/Header";
import { PiGreaterThanLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import EditProfileModal from "./EditProfileModal";
import ChangePassword from "./ChangePassword";
import { useDispatch, useSelector } from "react-redux";
import {
  handleShowFailureToast,
  handleShowSuccessToast,
} from "../Components/ToastMessages/ToastMessage";
import { loadCurrentUserAction } from "../Redux/Actions/loadCurrentUserAction";
const Settings = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("user");
    try {
      const response = await fetch("http://localhost:8000/auth/logout", {
        credentials: "include",
      });
      if (response.status === 200) {
        handleShowSuccessToast("Logged out successfully");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (error) {
      console.error("Error:", error);
      handleShowFailureToast("Error:", error.message);
    }
  };

  const dispatch = useDispatch();
  const { loading, user } = useSelector(
    (state) => state.loadCurrentUserReducer
  );
  useEffect(() => {
    dispatch(loadCurrentUserAction());
  }, [dispatch]);
  return (
    <div className="flex flex-col">
      <div>
        <Header />
      </div>

      {/* Breadcrumbs */}
      <div className="flex flex-row items-center gap-2 p-4">
        <NavLink to="/dashboard/products-feed" className="opacity-60">
          Home
        </NavLink>
        <div className="">
          <PiGreaterThanLight />
        </div>
        <a href="/" className="opacity-60">
          Settings
        </a>
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        {/* profile */}
        <div className="w-full md:w-10/12 lg:w-7/12">
          <div className="my-3 font-semibold text-gray-800">PROFILE</div>
          <div className="flex flex-col md:flex-row gap-6 justify-between border border-gray-500 p-4 rounded-lg">
            <div className="flex flex-col">
              <div className="flex gap-2 mt-1 items-center">
                <CgProfile size={20} />
                <div className="text-xl font-medium text-gray-800">
                  {!loading && user?.firstName + " " + user?.lastName}
                </div>
              </div>
              <div className="flex gap-2 mt-1 items-center">
                <MdOutlineMail size={20} />
                <div className="text-lg font-medium text-gray-700">
                  {!loading && user?.email}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2 md:gap-1">
              {/* <EditProfileModal /> */}
              <EditProfileModal />

              <div className="text-md font-semibold text-gray-700 hover:underline cursor-pointer">
                {/* change password code her */}
                <ChangePassword />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 md:w-10/12 lg:w-8/12 xl:w-7/12 ">
          {/* EMAIL NOTIFICATIONS */}
          <div className="my-3 font-semibold text-gray-800">
            EMAIL NOTIFICATIONS
          </div>
          <div className="flex flex-col md:flex-row md:gap-20 lg:gap-36 justify-between border border-gray-500 p-4 rounded-lg">
            <div className="flex flex-col">
              <div className="text-xl font-bold text-gray-800">
                Email Notifications
              </div>
              <div className="mt-1">
                <div className="text-md font-medium text-gray-700">
                  Stay updated with important notifications sent directly to
                  your email inbox.
                </div>
              </div>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultValue className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:bg-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600" />
              </label>
            </div>
          </div>

          {/* AMAZON MARKETPLACE */}
          <div className="mt-5">
            <div className="my-3 font-semibold text-gray-800">
              AMAZON MARKETPLACE
            </div>
            <div className="flex flex-col md:flex-row gap-5 lg:gap-60 justify-between border border-gray-500 p-4 rounded-lg">
              <div className="py-2 px-2 bg-gray-100 flex gap-1 rounded-md border border-gray-200">
                <span className="text-xs flex items-center">US</span>
                <div>United States</div>
              </div>
              <div className="py-2 px-3 bg-gray-100 flex gap-1 rounded-md border border-gray-200">
                Edit
              </div>
            </div>
          </div>

          {/* Billing and Subscription */}
          <div className="my-5">
            <div className="my-3 font-semibold text-gray-800">
              Billing and Subscription
            </div>
            <div className="flex flex-col md:flex-row justify-between my-2">
              <div className="flex gap-2">
                <div className="text-gray-700">Current plan</div>
                <div className="border border-gray-400 bg-gray-100 flex gap-1 justify-center items-center text-sm text-black px-1 rounded-md">
                  <img className="w-4" src={""} alt="" />
                  Active
                </div>
              </div>
              <div className="text-sm mt-2 md:mt-0">
                Next billing on November 09th, 2024
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between border border-gray-500 p-4 rounded-lg">
              <div className="flex justify-start gap-2 items-center">
                <div className="text-md font-bold text-white py-2 px-3 bg-gray-900 rounded-md border border-gray-200">
                  ULTRA
                </div>
                <div>200 sellers/month</div>
              </div>
              <div className="flex justify-between gap-2 mt-4 md:mt-0">
                <div className="flex items-center text-black text-lg font-bold mx-3">
                  $230.00/m
                </div>
                <div className="py-2 px-3 bg-gray-100 flex gap-1 rounded-md border border-gray-200">
                  Edit billing
                </div>
                <div className="py-2 px-3 text-white bg-gray-900 flex gap-1 rounded-md border border-gray-200">
                  Upgrade
                </div>
              </div>
            </div>
          </div>

          <div
            className=" flex flex-col items-center justify-center my-5 text-md font-medium text-red-900 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
