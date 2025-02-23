"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";
import { Sour_Gummy } from "next/font/google";

const sour_gummy = Sour_Gummy({
  subsets: ["latin"],
  weight: "400",
});
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="h-screen max-h-[1000px]">
      <h1
        className={`${sour_gummy.className} text-center font-bold text-5xl mb-6`}
      >
        <span className="text-primaryColor">Reviews</span> From{" "}
        <span className="text-accentColor">Customers</span>
      </h1>
      <div className="bg-bg3 grid grid-col md:grid-cols-2 lg:grid-cols-4 gap-5 p-12">
        {reviews.map((review, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-80 p-4"
          >
            <div className="card bg-bg4 shadow-xl border-r-8 border-b-8 border-accentColor">
              <div className="card-body items-center text-center">
                <div>
                  <Image
                    src={review?.reviewer_img}
                    width={100}
                    height={100}
                    alt="reviewer_img"
                    className="rounded-full border-2 border-secondaryColor"
                  ></Image>
                </div>
                <h3 className="card-title text-lg font-semibold text-white">
                  {review?.name}
                </h3>
                <div className="flex gap-1">
                  {review?.rating < 5 ? (
                    <div className="flex items-center justify-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStarHalfAlt className="text-yellow-500" />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                    </div>
                  )}
                </div>
                <p className="text-sm text-white">{review?.comment}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Review;
