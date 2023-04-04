import { FC } from "react";
import { ProductData } from "../../../../prisma/data";
import { v4 as uuidv4 } from "uuid";

export const ArticleContent: FC<ProductData[]> = (props) => {
  const BuyCard = (props) => {
    return (
      <>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={props[0]?.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </>
    );
  };

  // fix issue on key props
  const GenerateGrid = (props, cards: Number) => {
    const genProps = Array(12).fill(props);

    return (
      <>
        {genProps.map((gen, keyId) => {
          return (
            <>
              <BuyCard key={uuidv4() + String("_Buycard")} {...gen} />
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full relative max-w-7xl mx-auto pt-8 pb-8 text-gray-900">
          <GenerateGrid {...props} />
        </div>
      </div>
    </>
  );
};
