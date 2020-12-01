import React from "react";
import { useBreakpoint } from "@hooks";

const Home = () => {
  const breakpoints = useBreakpoint("mobile");

  return <>{breakpoints}</>;
};

export default Home;
