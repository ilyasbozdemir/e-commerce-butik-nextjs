import React from "react";
import { AiOutlineHome, AiOutlineSearch,AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
function BottomNavigation() {
  const navs = [
    {
      to: "/",
      icon: AiOutlineHome,
      label: "anasayfa",
    },
    {
      to: "/sepetim",
      icon: AiOutlineShoppingCart,
      label: "sepetim",
    },
    {
      to: "/favorilerim",
      icon: MdOutlineFavoriteBorder,
      label: "favorilerim",
    },
    {
      label: "hesabım",
    },
  ];

  return <>BottomNavigation</>;
}

export default BottomNavigation;
