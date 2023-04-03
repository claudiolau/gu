import { baseUrl } from "@/service/base-url";
import { useState, useEffect } from "react";
import { ProductData } from "../../prisma/data";

export default function GetArticles(props) {
  // 1. Use the name state variable
  const [data, setData] = useState<ProductData[] | []>();

  const fetchArticles = async () => {
    try {
      const pathParams = `/api/articles/clothes`;
      const getArticlesURI = new URL(pathParams, baseUrl);
      const data = await fetch(getArticlesURI, {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const resp = await data.json();

      setData(resp);
    } catch (e) {
      console.error(e);
    }
  };

  // 2. Update state

  // 3. update render
  useEffect(() => {
    fetchArticles();
    // cleanup function
    return () => {};
  }, []);
  // ...

  return { data, setData };
}
