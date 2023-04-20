import { FC } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export const LoginContent: FC = () => {
  const { data: session } = useSession();

  return (
    <>
      <section className="flex-grow bg-[#FDFBF3]">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center  justify-between pb-8 pt-8 text-gray-900 ">
          {!session ? (
            <>
              <div className="m-12 flex w-full flex-col p-4">
                <div className="mx-auto flex flex-row place-items-center">
                  <h1 className="text-4xl font-bold">LOGIN</h1>
                </div>
              </div>

              <div className="m-24 flex w-full flex-col lg:flex-row">
                <div className="rounded-box grid h-32 flex-grow place-items-center">
                  <div className="text-2xl font-bold">Members</div>
                  <button
                    className="max-w-md rounded bg-black p-4 text-white"
                    onClick={() => signIn()}
                  >
                    Login
                  </button>
                </div>

                {/* <div className="p-4" />
            <div className="grid flex-grow h-32 rounded-box place-items-center">
              <div className="font-bold text-2xl">New Account</div>
              <button className="rounded bg-black text-white p-4 max-w-md">
                Sign Up
              </button>
            </div> */}
              </div>
            </>
          ) : (
            <>
              <div className="m-12 flex w-full flex-col p-4">
                <div className="mx-auto flex flex-row place-items-center">
                  <h1 className="text-4xl font-bold">Welcome</h1>
                </div>
              </div>

              <div className="flex w-full flex-col lg:flex-row ">
                <div className="rounded-box grid h-32 flex-grow place-items-center">
                  <div className="text-2xl font-bold">{session.user?.name}</div>
                  <div className="p-4" />
                  <div className="rounded-box grid h-32 flex-grow place-items-center">
                    <button
                      className="max-w-md rounded bg-black p-4 text-white"
                      onClick={() => signOut()}
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};
