"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quicksand, Sour_Gummy } from "next/font/google";

const sourGummy = Sour_Gummy({
  subsets: ["latin"],
  weight: "300",
});

const quickSand = Quicksand({
  subsets: ["latin"],
  weight: "700",
});
const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="bg-primaryColor">
      <h1 className="text-center font-bold text-3xl text-secondaryColor mb-5">
        <motion.span className="bg-secondaryColor text-accentColor p-2">
          Choose
        </motion.span>{" "}
        how do you want to feast today?
      </h1>
      <div
        className={`${sourGummy.className} px-5 pt-2 pb-5 space-x-5 flex justify-center items-center`}
      >
        {categories.map((category) => (
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="px-10 py-2 bg-secondaryColor text-accentColor font-bold rounded-full"
            key={category.id}
          >
            {category.category}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Category;
