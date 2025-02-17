import { Quicksand, Sour_Gummy } from "next/font/google";
import Banner from "@/components/Banner";
import Category from "@/components/Category";
import FoodCards from "@/components/FoodCards";

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
    <div>
      <Banner></Banner>
      <Category></Category>
      <FoodCards></FoodCards>
    </div>
  );
}
