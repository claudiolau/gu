import Link from "next/link";
import { FC, PropsWithChildren } from "react";

export const NotFoundLayout: FC<PropsWithChildren> = () => {
  return (
    <div className="flex-grow">
      <div className="flex flex-col justify-center items-center content-center m-32">
        <h1 className="font-bold text-4xl p-8">Page Not Found</h1>
        <Link href="/" className="rounded bg-black text-white p-4 max-w-md">
          Return
        </Link>
      </div>
    </div>
  );
};
