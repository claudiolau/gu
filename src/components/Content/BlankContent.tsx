import { FC } from "react";

export const Content: FC = () => {
  return (
    <section className="flex-grow">
      <nav className="flex flex-col items-center justify-between w-full relative max-w-7xl  mx-auto pt-8 pb-8 text-gray-900 ">
        <div className="flex flex-col w-full lg:flex-row p-4">
          <div className="grid flex-grow h-64 card bg-base-300 rounded-box place-items-center p-4">
            img1
          </div>
          <div className=" p-4" />
          <div className="grid flex-grow h-64 card bg-base-300 rounded-box place-items-center">
            img2
          </div>
        </div>
        <div className="flex flex-col w-full p-4">
          <div className="grid h-64 card bg-base-300 rounded-box place-items-center">
            content
          </div>
        </div>
        <div className="flex flex-col w-full lg:flex-row p-4">
          <div className="grid flex-grow h-64 card bg-base-300 rounded-box place-items-center p-4">
            img1
          </div>
          <div className=" p-4" />
          <div className="grid flex-grow h-64 card bg-base-300 rounded-box place-items-center">
            img2
          </div>
        </div>
      </nav>
    </section>
  );
};
