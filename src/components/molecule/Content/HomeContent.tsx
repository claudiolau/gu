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
      <div className="flex flex-col items-center justify-between w-full relative  mx-auto text-gray-900 mb-8">
        <div className="text-center text-2xl text-[#4B4A46] pt-12">
          Shop for what you want faster and easier
        </div>
        <div className="text-center underline text-[#144FA7] mt-2 mb-8">
          <Link href="/login">Log In or Create an Account</Link>
        </div>
        <div className="text-center text-3xl text-[#4B4A46] m-4 uppercase">
          SHOP BY CATEGORIES
        </div>
        <div className="grid grid-cols-3 gap-4 h-3/6 sm:grid-cols-3 sm:h-3/6 space-x-4 pb-24 text-2xl">
          <div className="bg-white rounded-lg shadow-md">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80"
              alt="description of your image"
            />
            <figcaption className="text-center p-8">Clothing</figcaption>
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <img
              className="h-full w-full object-cover"
              src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_500,c_limit/64265cce-0cfc-4309-aa45-33835124eeaa/the-best-nike-high-top-sneakers-you-can-buy-right-now-articles-ogc.jpg"
              alt="shoes"
            />
            <figcaption className="text-center p-8">Shoes</figcaption>
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <img
              className="h-full w-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1673548917043-9facc637bf37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="description of your image"
            />
            <figcaption className="text-center p-8">Furniture</figcaption>
          </div>
        </div>
        <div className="grid grid-cols-2 h-1/2 w-full space-x-4 text-2xl pb-24 ">
          <div className="bg-white rounded-lg shadow-md">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1640&q=80"
              alt="description of your image"
            />
            <figcaption className="text-center p-8">Electronics</figcaption>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
              alt="description of your image"
            />
            <figcaption className="text-center p-8">Others</figcaption>
          </div>
        </div>
      </div>
    </section>
  );
};
