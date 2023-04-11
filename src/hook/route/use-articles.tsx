import { baseUrl } from "@/service/base-url";
import { Product } from "@prisma/client";
import { useState, useEffect } from "react";

export default function useArticles(props: { pid: string }) {
  // 1. Use the name state variable

  const { pid } = props;
  const [data, setData] = useState<Product[] | []>();

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
