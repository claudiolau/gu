import { FC } from "react";
import { ProductData } from "../../../../prisma/data";

export const ArticleContent: FC<ProductData[]> = (props) => {
  console.log(props);
  return (
    <>
      <div className="flex-grow"></div>
    </>
  );
};
