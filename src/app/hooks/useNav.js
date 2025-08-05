"use client";
import { useState } from "react";

const useNav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return { navOpen, setNavOpen };
};

export default useNav;
