import { FC } from "react";
export const LoginContent: FC = () => {
  return (
    <>
      <section className="flex-grow">
        <div className="text-center m-32">
          <div className="text-4xl font-bold">LOGIN</div>
          <nav className="flex flex-col items-center justify-between w-full relative max-w-7xl mx-auto pt-8 pb-8">
            <div className="flex flex-col w-full lg:flex-row p-4">
              <div className="grid flex-grow h-64 card rounded-box place-items-center p-4">
                screen1
              </div>
              <div className=" p-4" />
              <div className="grid flex-grow h-64 card  rounded-box place-items-center">
                screen2
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};
