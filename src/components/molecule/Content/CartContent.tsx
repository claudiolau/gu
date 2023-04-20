import { FC } from "react";
export const CartContent: FC = () => {
  return (
    <>
      <section className="flex-grow bg-[#FDFBF3]">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center  justify-between pb-8 pt-8 text-gray-900 ">
          <div className="m-12 flex w-full flex-col p-4">
            <div className="mx-auto flex flex-row place-items-center">
              <h1 className="text-4xl font-bold">Your Cart</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
