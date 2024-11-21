import React, { useState } from "react";

const ChangePassword = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [currentpassword, setCurrentPassword] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };

    const handleSaveChanges = () => {

    }

      return (
        <div>
          <div
            className="text-md font-semibold text-gray-700 hover:underline cursor-pointer"
            onClick={toggleModal}
          >
            Change Password
          </div>
    
          {/* Modal */}
          {isModalOpen && (
            <div
              id="authentication-modal"
              className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-screen bg-gray-900 bg-opacity-50"
            >
              <div className="relative w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-700">
                {/* Modal header */}
                <div className="flex items-center justify-between p-4 border-b dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Change Password
                  </h3>
                  <button
                    onClick={toggleModal}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg w-8 h-8 flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
    
                {/* Modal body */}
                <div className="p-4">
                  <form className="space-y-4" onSubmit={handleSaveChanges}>
                    <div>
                      <label
                        htmlFor="firstname"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Current Password
                      </label>
                      <input
                        type="input"
                        id="firstname"
                        value={currentpassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="First Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastname"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        New Password
                      </label>
                      <input
                        type="input"
                        id="lastname"
                        value={newpassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Last Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="text-white bg-gray-500 hover:bg-gray-600 font-medium rounded-lg px-5 py-2.5 w-30 ml-auto"
                      >
                        Change Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      );
}

export default ChangePassword
