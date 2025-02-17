"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const FoodCards = () => {
  const [foodMenu, setFoodMenu] = useState([]);
  useEffect(() => {
    fetch("/foodmenu.json")
      .then((res) => res.json())
      .then((data) => setFoodMenu(data));
  }, []);
  return (
    <div
      className={` h-screen bg-bg2 bg-cover bg-center max-h-[600px] mt-[2px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5 px-16 py-7 border-2`}
    >
      {foodMenu.map((menu) => (
        <div
          key={menu.id}
          className="bg-white/50 rounded-2xl flex justify-center flex-col items-center py-6"
        >
          <Image
            width={130}
            height={130}
            className="rounded-full"
            src={menu.food_img}
          ></Image>
          <h1 className="text-base font-bold mt-3">{menu.food_name}</h1>
          <p className="text-sm">{menu.category}</p>
          <p className="text-sm font-bold">${menu.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodCards;
