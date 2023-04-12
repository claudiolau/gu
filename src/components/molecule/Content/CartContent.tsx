import { FC } from "react";
export const CartContent: FC = () => {
  return (
    <>
      <section className="flex-grow bg-[#FDFBF3]">
        <div className="flex flex-col items-center justify-between w-full relative max-w-7xl  mx-auto pt-8 pb-8 text-gray-900 ">
          <div className="flex flex-col w-full p-4 m-12">
            <div className="flex flex-row mx-auto place-items-center">
              <h1 className="font-bold text-4xl">Your Cart</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
