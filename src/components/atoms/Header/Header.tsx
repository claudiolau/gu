/* eslint-disable @next/next/no-html-link-for-pages */
import { ProfileIcon, CartIcon } from "@/assets";
import { HamburgerIcon } from "@/assets/HamburgerIcon";
import { LogoIcon } from "@/assets/LogoIcon";
import { FC, useState } from "react";
import { ListLinks, links } from "./ListofLinks";
import router, { useRouter } from "next/router";
import Link from "next/link";

export const Header: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { asPath } = useRouter();
  return (
    <div className="flex items-center justify-between border-gray-400 ">
      <LogoIcon />
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
      <nav className="bg-white">
        <section className="MOBILE-MENU flex flex-row lg:hidden p-4">
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
              className="absolute top-0 right-0 z-[4]"
              onClick={() => setIsNavOpen(false)}
            >
              <HamburgerIcon />
            </div>
            <ul className="relative flex flex-col items-center justify-between bg-white w-full left-0 right-0 z-[4]">
              {links.map(({ href, label }) => (
                <li
                  key={href}
                  className={`mr-4 uppercase border-gray-400 ${
                    asPath === href ? "underline" : ""
                  }`}
                >
                  <Link
                    href={href}
                    className="text-gray-800 hover:text-gray-600"
                  >
                    {label}
                  </Link>
                </li>
              ))}
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
