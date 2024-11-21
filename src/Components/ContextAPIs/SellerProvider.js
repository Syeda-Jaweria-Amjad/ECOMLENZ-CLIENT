import React, { createContext, useState, useContext } from "react";

const SellerContext = createContext();

export const SellerProvider = ({ children }) => {
  const [selectedSellerId, setSelectedSellerId] = useState(null);

  return (
    <SellerContext.Provider value={{ selectedSellerId, setSelectedSellerId }}>
      {children}
    </SellerContext.Provider>
  );
};

export const useSeller = () => useContext(SellerContext);
