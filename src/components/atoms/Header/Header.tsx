/* eslint-disable @next/next/no-html-link-for-pages */
import { ProfileIcon, CartIcon } from "@/assets";
import { HamburgerIcon } from "@/assets/HamburgerIcon";
import { LogoIcon } from "@/assets/LogoIcon";
import { FC, useState } from "react";
import { ListLinks, links } from "./ListofLinks";
import { useRouter } from "next/router";
import Link from "next/link";

export const Header: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { asPath } = useRouter();
  return (
    <div className="flex items-center justify-between border-gray-400  bg-[#FDFBF3]">
      <LogoIcon />
      <ul className=" MOBILE-MENU flex flex-row space-x-4 lg:hidden">
        <li className="   my-8 border-gray-400 uppercase">
          <a href="/cart">
            <ProfileIcon />
          </a>
        </li>
        <li className="   m-4 my-8 border-gray-400 uppercase">
          <a href="/cart">
            <CartIcon />
          </a>
        </li>
      </ul>
      <nav>
        <section className="MOBILE-MENU flex flex-row p-4 lg:hidden">
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
            } absolute right-4 top-4 z-40 w-full rounded-full`}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <div
              className="absolute right-0 top-0"
              onClick={() => setIsNavOpen(false)}
            >
              <HamburgerIcon />
            </div>
            <ul className="relative left-0 right-0 flex w-full flex-col items-center justify-between">
              {links.map(({ href, label }) => (
                <li
                  key={href}
                  className={`mr-4 border-gray-400 uppercase ${
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
        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex ">
          <ListLinks />
        </ul>
      </nav>
    </div>
  );
};
