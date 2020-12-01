import React, { createContext } from "react";
import { theme } from "@theme";
import { Home } from "@components/Home";

const ThemeContext = createContext(null);

const HomePage = () => {
  return (
    <ThemeContext.Provider value={theme}>
      <Home />
    </ThemeContext.Provider>
  );
};

export default HomePage;
export { ThemeContext };
