import { FC, PropsWithChildren } from "react";

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-col min-h-screen">{children}</div>;
};
