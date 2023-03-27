import { ProductData } from "@/types";
import { FC } from "react";

export const Content: FC<Partial<ProductData[]>> = (props) => {
  const mockContent = Object.entries(props)
    .slice(0, 5)
    .map((entry) => entry[1]);

  return (
    <section className="flex-grow ">
      <nav className="flex flex-col items-center justify-between w-full relative max-w-7xl  mx-auto pt-8 pb-8 text-gray-900 ">
        <div className="flex flex-col w-full lg:flex-row p-4">
          <div className="grid h-32 card rounded-box mr-4">
            <img src={mockContent[0]?.image} className="rounded" />
            <span> {mockContent[0]?.name}</span>
          </div>
          <div className=" p-4" />
          <div className="grid card rounded-box">
            <img src={mockContent[1]?.image} className="rounded" />
            <span> {mockContent[1]?.name}</span>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <div className="grid card rounded-box">
            <img src={mockContent[2]?.image} className="rounded" />
            <span> {mockContent[2]?.name}</span>
          </div>
        </div>
        <div className="flex flex-col w-full lg:flex-row p-4">
          <div className="grid card rounded-box">
            <img src={mockContent[3]?.image} className="rounded" />
            <span> {mockContent[3]?.name}</span>
          </div>
          <div className=" p-4" />
          <div className="grid card rounded-box">
            <img src={mockContent[4]?.image} className="rounded" />
            <span> {mockContent[4]?.name}</span>
          </div>
        </div>
      </nav>
    </section>
  );
};
