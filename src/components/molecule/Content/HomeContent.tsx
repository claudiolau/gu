/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { Product } from "@prisma/client";
import { Hero } from "@/components/atoms/Hero/Hero";
import { Banner } from "@/components/atoms/Banner/Banner";
import Link from "next/link";
import ParentComponent from "../Container/GridCenter";
import { ShippingBoxIcon } from "@/assets/ShippingBoxIcon";
import { NavigationTop } from "@/components/atoms";

export const HomeContent: FC<Product[]> = (props) => {
  // to be updated
  // const mockContent = Object.entries(props)
  //   .slice(0, 5)
  //   .map((entry) => entry[1] || "")

  const x = () => {
    return <></>;
  };
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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xl text-black pb-12">
        <div className="bg-white rounded-lg shadow-md mb-8">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=822&amp;q=80"
            alt="description of your image"
          />
          <figcaption className="text-center p-4 sm:p-8">Clothing</figcaption>
        </div>
        <div className="bg-white rounded-lg shadow-md mb-8">
          <img
            className="h-full w-full object-cover"
            src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_500,c_limit/64265cce-0cfc-4309-aa45-33835124eeaa/the-best-nike-high-top-sneakers-you-can-buy-right-now-articles-ogc.jpg"
            alt="shoes"
          />
          <figcaption className="text-center p-4 sm:p-8">Shoes</figcaption>
        </div>
        {/* <div className="bg-white rounded-lg shadow-md">
          <img
            className="h-full w-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1673548917043-9facc637bf37?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80"
            alt="description of your image"
          />
          <figcaption className="text-center p-4 sm:p-8">Furniture</figcaption>
        </div> */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1640&amp;q=80"
            alt="description of your image"
          />
          <figcaption className="text-center p-4 sm:p-8">
            Electronics
          </figcaption>
        </div>
        {/* <div className="bg-white rounded-lg shadow-md">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1744&amp;q=80"
              alt="description of your image"
            />
            <figcaption className="text-center p-4 sm:p-8">Others</figcaption>
          </div> */}
      </div>
      <ParentComponent childComponent={ShippingBoxIcon} />

      <div className="text-center text-3xl text-[#4B4A46] mt-12 uppercase">
        THE SENSE
      </div>
      <div className="text-center text-sm text-[#4B4A46] mt-12 uppercase">
        Your one stop shop for all things in fashion, lifestyle, and home decor
        at GU, from trending topics to guides and more.
      </div>
      <div className="flex pt-8 pb-8 max-w-7xl mx-auto">
        <div className="w-3/4 bg-[#4B4A46]">
          <img
            className="object-cover w-full h-80"
            src="https://images.unsplash.com/photo-1586216583179-20b23ef9dd5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1836&q=800"
          />
        </div>

        <div className="w-1/4 bg-[#4B4A46] flex items-center justify-center">
          <div className="text-center">
            <div className="p-4 underline">Learn More</div>
          </div>
        </div>
      </div>
      <div className="relative flex pt-8 pb-8 max-w-7xl mx-auto">
        <div className="w-1/4 bg-[#4B4A46] flex items-center justify-center">
          <div className="text-center">
            <div className="p-4 underline">Learn More</div>
          </div>
        </div>
        <div className="w-3/4 relative">
          <img
            className="object-cover w-full h-80"
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          />
          <div className="absolute top-0 right-0 h-full w-full">
            <div className="h-full w-full bg-black opacity-25 absolute top-0 right-0"></div>
          </div>
        </div>
      </div>
      <ParentComponent childComponent={NavigationTop} />
    </section>
  );
};
