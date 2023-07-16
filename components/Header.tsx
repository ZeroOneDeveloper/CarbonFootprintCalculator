"use client";

import React from "react";
import Link from "next/link";

import { Sprout } from "lucide-react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  return (
    <nav className="flex w-full justify-between px-6 py-4">
      <Link href="/">
        <Sprout size={48} />
      </Link>
      <div>
        <Link href="/">
          <h1></h1>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
