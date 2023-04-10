/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { IProduct } from "../../../prisma/data";

export const HomeContent: FC<IProduct[]> = (props) => {
  const mockContent = Object.entries(props)
    .slice(0, 5)
    .map((entry) => entry[1] || "") satisfies IProduct[];

  return (
    <section className="flex-grow ">
      <div className="flex flex-col items-center justify-between w-full relative max-w-7xl mx-auto pt-8 pb-8 text-gray-900">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
          <div className="card rounded-box">
            <img
              src={String(mockContent[0]?.image)}
              className="rounded object-fill h-96 w-120"
              alt="0"
            />
            <span className="font-bold p-4">{mockContent[0]?.title}</span>
          </div>
          <div className="card rounded-box">
            <img
              src={String(mockContent[1]?.image)}
              className="rounded object-fill h-96 w-120"
              alt="1"
            />
            <span className="font-bold p-4">{mockContent[1]?.title}</span>
          </div>
          <div className="card rounded-box">
            <img
              src={String(mockContent[2]?.image)}
              className="rounded object-fill h-96 w-120"
              alt="2"
            />
            <span className="font-bold p-4">{mockContent[2]?.title}</span>
          </div>
          <div className="card rounded-box">
            <img
              src={String(mockContent[3]?.image)}
              className="rounded object-fill h-96 w-120"
              alt="3"
            />
            <span className="font-bold p-4">{mockContent[3]?.title}</span>
          </div>
          <div className="card rounded-box">
            <img
              src={String(mockContent[4]?.image)}
              className="rounded object-fill h-96 w-120"
              alt="4"
            />
            <span className="font-bold p-4">{mockContent[4]?.title}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
