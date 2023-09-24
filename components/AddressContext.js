// AddressContext.js
import React, { createContext, useContext, useState } from 'react';

const AddressContext = createContext();

export function useAddress() {
  return useContext(AddressContext);
}

export function AddressProvider({ children }) {
  const [userAddress, setUserAddress] = useState('');

  return (
    <AddressContext.Provider value={{ userAddress, setUserAddress }}>
      {children}
    </AddressContext.Provider>
  );
}

