"use client";

import React, { createContext, useState, ReactNode } from "react";

type LoadingContextType = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

// Create the context with default values
export const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => {},
});

type LoadingProviderProps = {
  children: ReactNode;
};

export const OverlayContextProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default OverlayContextProvider;
