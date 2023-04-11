/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { IProduct } from "../../../../prisma/data";
import Image from "next/image";

export const HomeContent: FC<IProduct[]> = (props) => {
  // to be updated
  // const mockContent = Object.entries(props)
  //   .slice(0, 5)
  //   .map((entry) => entry[1] || "") satisfies IProduct[];

  return (
    <section className="flex-grow ">
      <div className="flex flex-col items-center justify-between w-full relative max-w-7xl mx-auto pt-8 pb-8 text-gray-900">
        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <Image
              src="https://www.soph.net/img/goods/L/fcrb_230010_black.jpg"
              alt="description of your image"
              width={100}
              height={100}
              object-fit="cover"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="https://www.soph.net/img/goods/L/fcrb_230010_black.jpg"
              alt="description of your image"
            />
          </div>{" "}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="https://www.soph.net/img/goods/L/fcrb_230010_black.jpg"
              alt="description of your image"
            />
          </div>{" "}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="https://www.soph.net/img/goods/L/fcrb_230010_black.jpg"
              alt="description of your image"
            />
          </div>{" "}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="https://www.soph.net/img/goods/L/fcrb_230010_black.jpg"
              alt="description of your image"
            />
          </div>{" "}
          <div className="bg-white rounded-lg shadow-md p-4">
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
