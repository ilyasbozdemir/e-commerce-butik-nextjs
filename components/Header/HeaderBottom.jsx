'use client'

import { Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar";
import { MdOutlineFiberNew } from "react-icons/md";
import { GiClothes } from "react-icons/gi";



function HeaderBottom() {

  const linkItems = [
    {
      id: "yeni-gelenler",
      label: "Yeni Gelenler",
      icon: MdOutlineFiberNew,
      href: "kategori/yeni-gelenler",
      childrens: [],
      parent: null,
    },
    {
      id: "elbise",
      label: "Elbise",
      icon: GiClothes,
      href: "kategori/elbise",
      childrens: [],
      parent: null,
    },
    {
      id: "triko",
      label: "Triko",
      icon: GiClothes,
      href: "kategori/triko",
      childrens: [],
      parent: null,
    },
    {
      id: "ic-giyim",
      label: "İç Giyim",
      icon: GiClothes,
      href: "kategori/ic-giyim",
      childrens: [],
      parent: null,
    },
    {
      id: "ust-giyim",
      label: "Üst Giyim",
      icon: GiClothes,
      href: "kategori/ust-giyim",
      childrens: [
        {
          id: "sweatshirt",
          label: "Sweatshirt",
          icon: GiClothes,
          href: "kategori/sweatshirt",
          parent: "ust-giyim",
        },
        {
          id: "tisort",
          label: "Tişört",
          icon: GiClothes,
          href: "kategori/tisort",
          parent: "ust-giyim",
        },
        {
          id: "tunik",
          label: "Tunik",
          icon: GiClothes,
          href: "kategori/tunik",
          parent: "ust-giyim",
        },
        {
          id: "gomlek",
          label: "Gömlek",
          icon: GiClothes,
          href: "kategori/gomlek",
          parent: "ust-giyim",
        },
        {
          id: "bluz",
          label: "Bluz",
          icon: GiClothes,
          href: "kategori/bluz",
          parent: "ust-giyim",
        },
      ],
      parent:null,
    },
    {
      id: "alt-giyim",
      label: "Alt Giyim",
      icon: GiClothes,
      href: "kategori/alt-giyim",
      childrens: [
        {
          id: "etek",
          label: "Etek",
          icon: GiClothes,
          href: "kategori/etek",
          parent: "kategori/alt-giyim",
        },
        {
          id: "pantolon",
          label: "Pantolon",
          icon: GiClothes,
          href: "kategori/pantolon",
          parent: "kategori/alt-giyim",
        },
        {
          id: "pijama-takimi",
          label: "Pijama Takımı",
          icon: GiClothes,
          href: "kategori/pijama-takimi",
          parent: "kategori/alt-giyim",
        },
        {
          id: "etek-takimi",
          label: "Etek Takımı",
          icon: GiClothes,
          href: "kategori/etek-takimi",
          parent: "kategori/alt-giyim",
        },
      ],
      parent: null,
    },
    {
      id: "dis-giyim",
      label: "Dış Giyim",
      icon: GiClothes,
      href: "kategori/dis-giyim",
      childrens: [
        {
          id: "yelek",
          label: "Yelek",
          icon: GiClothes,
          href: "kategori/yelek",
          parent: "dis-giyim",
        },
        {
          id: "trenckot",
          label: "Trençkot",
          icon: GiClothes,
          href: "kategori/trenckot",
          parent: "dis-giyim",
        },
        {
          id: "kaban",
          label: "Kaban",
          icon: GiClothes,
          href: "kategori/kaban",
          parent: "dis-giyim",
        },
        {
          id: "kap",
          label: "Kap",
          icon: GiClothes,
          href: "kategori/kap",
          parent: "dis-giyim",
        },
        {
          id: "yagmurluk",
          label: "Yağmurluk",
          icon: GiClothes,
          href: "kategori/yagmurluk",
          parent: "dis-giyim",
        },
        {
          id: "kazak",
          label: "Kazak",
          icon: GiClothes,
          href: "kategori/kazak",
          parent: "dis-giyim",
        },
        {
          id: "takim",
          label: "Takım",
          icon: GiClothes,
          href: "kategori/takim",
          parent: "dis-giyim",
        },
        {
          id: "hırka",
          label: "Hırka",
          icon: GiClothes,
          href: "kategori/hirka",
          parent: "dis-giyim",
        },
        {
          id: "suveter",
          label: "Süveter",
          icon: GiClothes,
          href: "kategori/suveter",
          parent: "dis-giyim",
        },
        ],
      parent: null,
    },
    {
      id: "outlet",
      label: "Outlet",
      icon: GiClothes,
      href: "kategori/outlet",
      parent: "dis-giyim",
      childrens:[]
    },
    {
      id: "kombin",
      label: "Kombin",
      icon: GiClothes,
      href: "kategori/kombin",
      childrens: [
        {
          id: "etekli-kombin",
          label: "Etekli Kombin",
          icon: GiClothes,
          href: "kategori/etekli-kombin",
          parent: "kombin",
        },
        {
          id: "pantolonlu-kombin",
          label: "Pantolonlu Kombin",
          icon: GiClothes,
          href: "kategori/pantolonlu-kombin",
          parent: "kombin",
        },
      ],
      parent: null,
    },
  ];


  return (
    <Flex
      as={"nav"}
      justifyContent={"center"}
      my={1}
      bg={"#865DFF"}
      color={"#fff"}
      px={2}
      borderRadius={15}
      boxShadow={"0 0 8px rgba(0, 0, 0, 0.3)"}
      w={"100%"}
    >
      {linkItems.map((link, i) => (
        <>
          <Navbar key={"eb_" + i} link={link} />
        </>
      ))}
    </Flex>
  );
}

export default HeaderBottom;
