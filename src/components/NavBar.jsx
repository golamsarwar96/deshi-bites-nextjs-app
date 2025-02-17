import { Sour_Gummy } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const sourGummy = Sour_Gummy({
  subsets: ["latin"],
  weight: "500",
});

const NavBar = () => {
  //--text: #050315;
  //--background: #FFF5E1;
  //--primary: #E63946;
  //--secondary: #FFC107;
  //--accent: #4f006f;

  const links = (
    <div className="flex justify-center items-center gap-5">
      <Link href="/">Home</Link>
      <Link href="/menu">Menu</Link>
      <Link href="/deals">Best Deals</Link>
    </div>
  );
  return (
    <div className={`${sourGummy.className} max-h-screen`}>
      <div className="navbar flex justify-center items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div
            className={`flex items-center justify-center text-2xl font-bold gap-1`}
          >
            <span className="text-accentColor">Deshi</span>
            <Image width={30} height={20} alt="logo" src="/logoo.png"></Image>
            <span className="text-primaryColor">Bites</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end text-sm">
          <Link href="/login" className="px-3 py-2">
            Sign Up
          </Link>
          <Link href="/signin" className="px-3 py-2">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
