"use client";
import { Quicksand, Sour_Gummy } from "next/font/google";
import Banner from "@/components/Banner";

const sourGummy = Sour_Gummy({
  subsets: ["latin"],
  weight: "500",
});

const quickSand = Quicksand({
  subsets: ["latin"],
  weight: "600",
});

export default function Home() {
  return (
    <div className={`h-screen bg-bg1 bg-cover bg-center max-h-[550px]`}>
      <Banner></Banner>
    </div>
  );
}
