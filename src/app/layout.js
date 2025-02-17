import { Quicksand } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const quickSand = Quicksand({
  subsets: ["latin"],
  weight: "400",
});

// const sourGummy = Sour_Gummy({
//   subsets: ["latin"],
//   weight: "500",
// });

export const metadata = {
  title: "Deshi Bites",
  description: "Order and enjoy delicious food from Deshi Bites",
};

export default function RootLayout({ children }) {
  // Mainlayout, top most component.
  return (
    <html lang="en">
      <body className={`${quickSand.className} bg-bgColor pl-5 pr-3`}>
        <NavBar></NavBar>
        {/* //outlet er moto. page.js is the children here(Home Page-) */}
        <main className="h-screen  max-h-[800px]">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
