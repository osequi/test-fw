import React, { createContext } from "react";
import { theme } from "../theme";

const ThemeContext = createContext(null);

const Home = () => {
  return <ThemeContext.Provider value={theme}>Home.</ThemeContext.Provider>;
};

export default Home;
