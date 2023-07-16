"use client";

import React from "react";
import Link from "next/link";

import {
  LuSprout,
  LuMenu,
  LuDroplet,
  LuPlug,
  LuBus,
  LuTrash2,
  LuHeart,
} from "react-icons/lu";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

import { pages } from "@/app/cal/utils";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  return (
    <nav
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        padding: "1rem 1.5rem 1rem 1.5rem",
      }}
    >
      <Link href="/">
        <LuSprout size={48} />
      </Link>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<LuMenu size={36} />}
          backgroundColor="transparent"
        />
        <MenuList rounded={10}>
          {pages.map((page, k) => (
            <MenuItem
              key={k}
              icon={<Icon as={page.icon} />}
              as="a"
              href={`/cal/${page.route}`}
            >
              {page.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </nav>
  );
};

export default Header;
