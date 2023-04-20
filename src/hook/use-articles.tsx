import { baseUrl } from "@/service/base-url";
import { Product } from "@prisma/client";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function useArticles(props: { pid: string }) {
  const { pid } = props;
  const [data, setData] = useState<Product[] | []>();
  const { asPath } = useRouter();

  const fetchArticles = async (): Promise<void> => {
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

      setData(resp);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    fetchArticles();

    return () => {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath]);

  return { data, setData };
}
