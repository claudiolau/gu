/* eslint-disable @next/next/no-html-link-for-pages */

import { FC } from "react";

type ISearchBar = {
  isNavOpen: boolean;
};

export const SearchBar: FC<ISearchBar> = (props) => {
  console.log(props);
  return (
    <>
      <div className="flex items-center justify-center space-x-8">
        <input
          className="border-2 border-gray-400 rounded-md px-4 py-2 mr-2"
          type="text"
          placeholder="Search for products"
        />

        <span className="border-gray-400 uppercase">
          <a href="/">Home</a>
        </span>
        <span className="border-gray-400  uppercase">
          <a href="/articles/clothing">Clothing</a>
        </span>
        <span className="border-gray-400 uppercase">
          <a href="/articles/electronics">Electronics</a>
        </span>
        <span className=" border-gray-400 uppercase">
          <a href="/login">Login</a>
        </span>
        <span className=" border-gray-400 uppercase">
          <a href="/cart">Cart</a>
        </span>
      </div>
    </>
  );
};
