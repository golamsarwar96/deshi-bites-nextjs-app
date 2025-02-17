"use client";
import { motion } from "framer-motion";
import { Quicksand, Sour_Gummy } from "next/font/google";
import Image from "next/image";

const sourGummy = Sour_Gummy({
  subsets: ["latin"],
  weight: "500",
});

const quickSand = Quicksand({
  subsets: ["latin"],
  weight: "600",
});
const Banner = () => {
  return (
    <div className="flex justify-evenly items-center pt-20">
      <div className="w-[45%] font-bold">
        <motion.div
          initial={{ opacity: 0, y: -50 }} // Starts above
          animate={{ opacity: 1, y: 0 }} // Moves down
          transition={{
            duration: 0.8,
            ease: "easeOut",
            type: "spring", // Spring effect for bounce
            stiffness: 120, // Controls bounce intensity
          }}
          whileHover={{ scale: 1.1 }}
        >
          <h1 className="text-5xl">
            Order the{" "}
            <span
              className={`${sourGummy.className} text-5xl text-primaryColor`}
            >
              BEST
            </span>{" "}
            food without leaving{" "}
            <span
              className={`${sourGummy.className} text-5xl text-primaryColor`}
            >
              Home...
            </span>{" "}
          </h1>
          <p
            className={`${sourGummy.className} rounded-3xl text-lg bg-primaryColor text-secondaryColor px-2 mt-2 w-[50%]`}
          >
            Deshi bites is at your service.
          </p>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className={`${quickSand.className} px-5 py-2 bg-accentColor text-secondaryColor rounded-3xl mt-5`}
        >
          Order Now !
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <Image
          className="object-contain"
          src="/recipe1.png"
          width={450}
          height={400}
          alt={"recipe"}
        />
      </motion.div>
    </div>
  );
};

export default Banner;
