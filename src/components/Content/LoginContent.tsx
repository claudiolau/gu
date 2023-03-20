import { FC } from "react";
export const LoginContent: FC = () => {
  return (
    <>
      <section className="flex-grow">
        <div className="flex flex-col items-center justify-between w-full relative max-w-7xl  mx-auto pt-8 pb-8 text-gray-900 ">
          <div className="flex flex-col w-full p-4 m-12">
            <div className="flex flex-row mx-auto place-items-center">
              <h1 className="font-bold text-4xl">LOGIN</h1>
            </div>
          </div>
          <div className="flex flex-col w-full lg:flex-row m-24">
            <div className="grid flex-grow h-32 rounded-box place-items-center">
              <div className="font-bold text-2xl">Members</div>
              <button className="rounded bg-black text-white p-4 max-w-md">
                Login In
              </button>
            </div>
            <div className="p-4" />
            <div className="grid flex-grow h-32 rounded-box place-items-center">
              <div className="font-bold text-2xl">New Account</div>
              <button className="rounded bg-black text-white p-4 max-w-md">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
