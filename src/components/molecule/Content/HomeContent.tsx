/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { Product } from "@prisma/client";
import { Hero } from "@/components/atoms/Hero/Hero";
import { Banner } from "@/components/atoms/Banner/Banner";
import Link from "next/link";

export const HomeContent: FC<Product[]> = (props) => {
  // to be updated
  // const mockContent = Object.entries(props)
  //   .slice(0, 5)
  //   .map((entry) => entry[1] || "")
  return (
    <section className="flex-grow bg-[#FDFBF3]">
      <Banner />
      <Hero />
      <div className="flex flex-col items-center justify-between w-full relative max-w-7xl mx-auto text-gray-900">
        <div className="text-center text-2xl text-[#4B4A46] pt-12">
          Shop for what you want faster and easier
        </div>
        <div className="text-center underline text-[#144FA7] mt-2 mb-8">
          <Link href="/login">Log In or Create an Account</Link>
        </div>
        <div className="text-center text-3xl text-[#4B4A46] m-4 uppercase">
          SHOP BY CATEGORIES
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md">
            <img
              src="https://www.soph.net/img/goods/L/fcrb_230010_black.jpg"
              alt="description of your image"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <img
              src="https://www.soph.net/img/goods/L/fcrb_230010_black.jpg"
              alt="description of your image"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <img
              src="https://www.soph.net/img/goods/L/fcrb_230010_black.jpg"
              alt="description of your image"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="https://www.soph.net/img/goods/L/fcrb_230010_black.jpg"
              alt="description of your image"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <img
              src="https://www.soph.net/img/goods/L/fcrb_230010_black.jpg"
              alt="description of your image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
