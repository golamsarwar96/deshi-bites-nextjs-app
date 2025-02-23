"use client";
import Lottie from "lottie-react";
import newsletter from "../../public/newsletterJson.json";

const NewsLetter = () => {
  return (
    <div className="flex justify-center items-center gap-20 bg-bg4 bg-cover mb-10">
      <h1 className="text-center font-bold text-5xl text-secondaryColor">
        Keep <span className="text-white">Track</span> of all the
        <br />
        new <span className="text-white">updates</span>
      </h1>
      <Lottie
        animationData={newsletter}
        className="w-[500px] h-[500px] pl-10"
        loop={true}
        autoplay={true}
      ></Lottie>
    </div>
  );
};

export default NewsLetter;
