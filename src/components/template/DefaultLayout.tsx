import { FC, PropsWithChildren } from "react";

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex min-h-screen flex-col">{children}</div>;
};
