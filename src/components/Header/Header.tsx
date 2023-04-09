/* eslint-disable @next/next/no-html-link-for-pages */
import { ProfileIcon, CartIcon } from "@/assets";
import { FC, useState } from "react";

export const Header: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const ListLinks = () => {
    return (
      <>
        <li className="border-gray-400 uppercase">
          <a href="/">Home</a>
        </li>
        <li className="border-gray-400  uppercase">
          <a href="/articles/clothing">Clothing</a>
        </li>
        <li className="border-gray-400 uppercase">
          <a href="/articles/electronics">Electronics</a>
        </li>
        <li className="border-gray-400 uppercase">
          <a href="/articles/furniture">Furniture</a>
        </li>
        <li className="border-gray-400  uppercase">
          <a href="/articles/furniture">Shoes</a>
        </li>
        <li className="border-gray-400  uppercase">
          <a href="/articles/others">Others</a>
        </li>
        <li className=" border-gray-400 uppercase">
          <a href="/login">Login</a>
        </li>
        <li className=" border-gray-400 uppercase">
          <a href="/cart">Cart</a>
        </li>
      </>
    );
  };

  return (
    <div className="flex items-center justify-between border-gray-400 ">
      <div className="text-yellow-300 bg-blue-900 p-4 m-4 text-lg">GU</div>
      <ul className=" MOBILE-MENU flex flex-row lg:hidden space-x-4">
        <li className="   border-gray-400 my-8 uppercase">
          <a href="/cart">
            <ProfileIcon />
          </a>
        </li>
        <li className="   border-gray-400 my-8 uppercase m-4">
          <a href="/cart">
            <CartIcon />
          </a>
        </li>
      </ul>
      <nav className="p-4">
        <section className="MOBILE-MENU flex flex-row lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 "
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div
            className={`${
              isNavOpen ? "block" : "hidden"
            } absolute top-4 right-4 w-full z-40 rounded-full`}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="relative flex flex-col items-center justify-between min-h-[250px] p-4 bg-white z-4">
              <ListLinks />
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden lg:flex space-x-8 ">
          <ListLinks />
        </ul>
      </nav>
    </div>
  );
};
