import Link from "next/link";
import { FC, PropsWithChildren } from "react";

export const NotFoundLayout: FC<PropsWithChildren> = () => {
  return (
    <div className="flex-grow">
      <div className="m-32 flex flex-col content-center items-center justify-center">
        <h1 className="p-8 text-4xl font-bold">Page Not Found</h1>
        <Link href="/" className="max-w-md rounded bg-black p-4 text-white">
          Return
        </Link>
      </div>
    </div>
  );
};
