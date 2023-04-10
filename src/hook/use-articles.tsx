"use client";

import { baseUrl } from "@/service/base-url";
import { useState, useEffect } from "react";
import { IProduct } from "../../prisma/data";

export default function useArticles(props: string) {
  // 1. Use the name state variable

  //@ts-ignore
  const { pid } = props;
  const [data, setData] = useState<IProduct[] | []>();

  const fetchArticles = async () => {
    try {
      const pathParams = `/api/articles/` + pid;

      const getArticlesURI = new URL(pathParams, baseUrl);
      const data = await fetch(getArticlesURI, {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      });

      const resp = await data.json();
      // 2. Update state
      setData(resp);
    } catch (e) {
      console.error(e);
    }
  };

  // 3. update render
  useEffect(() => {
    fetchArticles();
    // cleanup function
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // ...

  return { data, setData };
}
