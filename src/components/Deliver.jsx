"use client";
import Lottie from "lottie-react";
import deliverLottie from "../../public/deliver.json";
import { Sour_Gummy } from "next/font/google";
import Image from "next/image";

const sourGummy = Sour_Gummy({
  subsets: ["latin"],
  weight: "400",
});
const Deliver = () => {
  return (
    <div className="h-screen bg-bg3 bg-cover bg-center max-h-[550px]">
      <h1 className=" text-5xl text-center text-primaryColor font-bold bg-bgColor px-2 py-3">
        Serving You,{" "}
        <span className={`${sourGummy.className} text-accentColor`}>
          Our Way!
        </span>
      </h1>
      <div className="flex justify-center items-center gap-10 ">
        <div className="flex-1">
          <Lottie
            animationData={deliverLottie}
            className="w-[500px] h-[500px] pl-10"
            loop={true}
            autoplay={true}
          ></Lottie>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 pr-16 flex-1 ">
          <div className="bg-primaryColor col-span-4 px-6 py-3 shadow-lg">
            <h2
              className={`text-secondaryColor ${sourGummy.className} font-bold text-5xl flex items-center justify-center gap-3 pt-1`}
            >
              We Deliver
              <Image width={60} height={60} src="/deliver1.png"></Image>
            </h2>
            <p className="text-secondaryColor text-sm text-center mt-2 font-bold">
              We are OPEN whenever you are hungry!
            </p>
          </div>
          <div className="bg-secondaryColor text-primaryColor col-span-2 pb-3">
            <h2
              className={` ${sourGummy.className} font-bold text-3xl flex items-center justify-center gap-3 pt-4 px-12`}
            >
              Automated Packaging
              <Image width={60} height={60} src="/deliver2.png"></Image>
            </h2>
            <p className="text-accentColor text-xs text-center mt-2 font-bold">
              100% environment friendly packaging!
            </p>
          </div>
          <div className="bg-accentColor col-span-2">
            <h2
              className={`text-secondaryColor ${sourGummy.className} font-bold text-3xl flex items-center justify-center gap-3 pt-4 px-8`}
            >
              Serve Food Hot
              <Image width={60} height={60} src="/deliver3.png"></Image>
            </h2>
            <p className="text-primaryColor/70 text-xs text-center mt-2 font-bold">
              100% environment friendly packaging!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliver;
