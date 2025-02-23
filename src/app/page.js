import { Quicksand, Sour_Gummy } from "next/font/google";
import Banner from "@/components/Banner";
import Category from "@/components/Category";
import FoodCards from "@/components/FoodCards";
import Deliver from "@/components/Deliver";
import Review from "@/components/Review";
import NewsLetter from "@/components/NewsLetter";

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
      <Deliver></Deliver>
      <Review></Review>
      <NewsLetter></NewsLetter>
    </div>
  );
}
