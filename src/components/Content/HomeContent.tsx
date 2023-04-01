/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { ProductData } from "../../../prisma/data";

export const HomeContent: FC<ProductData[]> = (props) => {
  const mockContent = Object.entries(props)
    .slice(0, 5)
    .map((entry) => entry[1] || "") satisfies ProductData[];

  return (
    <section className="flex-grow ">
      <nav className="flex flex-col items-center justify-between w-full relative max-w-7xl  mx-auto pt-8 pb-8 text-gray-900 ">
        <div className="flex flex-col w-full lg:flex-row p-4">
          <div className="grid card rounded-box">
            <img
              src={String(mockContent[0]?.image)}
              className="rounded"
              alt="0"
            />
            <span> {mockContent[0]?.name}</span>
          </div>
          <div className=" p-4" />
          <div className="grid card rounded-box">
            <img
              src={String(mockContent[1]?.image)}
              className="rounded"
              alt="1"
            />
            <span> {mockContent[1]?.name}</span>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <div className="grid card rounded-box">
            <img
              src={String(mockContent[2]?.image)}
              className="rounded"
              alt="2"
            />
            <span> {mockContent[2]?.name}</span>
          </div>
        </div>
        <div className="flex flex-col w-full lg:flex-row p-4">
          <div className="grid card rounded-box">
            <img
              src={String(mockContent[3]?.image)}
              className="rounded"
              alt="3"
            />
            <span> {mockContent[3]?.name}</span>
          </div>
          <div className=" p-4" />
          <div className="grid card rounded-box">
            <img
              src={String(mockContent[4]?.image)}
              className="rounded"
              alt="4"
            />
            <span> {mockContent[4]?.name}</span>
          </div>
        </div>
      </nav>
    </section>
  );
};
