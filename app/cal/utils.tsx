import React from "react";

import { IconType } from "react-icons";
import { LuDroplet, LuPlug, LuTrash2, LuBus, LuHeart } from "react-icons/lu";

const Water: React.FC = () => {
  return <div></div>;
};

const Electricity: React.FC = () => {
  return <div></div>;
};

const Trash: React.FC = () => {
  return <div></div>;
};

const Vehicle: React.FC = () => {
  return <div></div>;
};

const Life: React.FC = () => {
  return <div></div>;
};

export const pages: Array<{
  name: string;
  route: string;
  icon: IconType;
  children: React.FC;
}> = [
  { name: "수도", route: "water", icon: LuDroplet, children: Water },
  { name: "전기", route: "electricity", icon: LuPlug, children: Electricity },
  { name: "쓰레기", route: "trash", icon: LuTrash2, children: Trash },
  { name: "대중교통", route: "vehicle", icon: LuBus, children: Vehicle },
  { name: "일상생활", route: "life", icon: LuHeart, children: Life },
];
