import React, { createContext, useContext, useState, ReactNode } from "react";

// Step 1: Define the TypeScript interface
interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Step 2: Create the context with default empty values (you can use `undefined` if you prefer strict checks)
const CountContext = createContext<CountContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

// Step 3: Create a provider component
export const CountProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

// Step 4: Custom hook to use the CountContext
export const useCount = () => useContext(CountContext);
