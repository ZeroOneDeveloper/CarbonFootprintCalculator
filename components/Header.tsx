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
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";

const Header = () => {
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
          <MenuItem icon={<Icon as={LuDroplet} />} as="a" href="/water">
            수도
          </MenuItem>
          <MenuItem icon={<Icon as={LuPlug} />} as="a" href="/cal/electricity">
            전기
          </MenuItem>
          <MenuItem icon={<Icon as={LuTrash2} />} as="a" href="/cal/trash">
            쓰레기
          </MenuItem>
          <MenuItem icon={<Icon as={LuBus} />} as="a" href="/cal/vehicle">
            대중교통
          </MenuItem>
          <MenuItem icon={<Icon as={LuHeart} />} as="a" href="/cal/life">
            일상생활
          </MenuItem>
        </MenuList>
      </Menu>
    </nav>
  );
};

export default Header;
