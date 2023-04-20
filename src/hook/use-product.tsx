import { getProductURI } from "@/service";
import { Product } from "@prisma/client";
import { useState, useEffect } from "react";

export default function useProducts() {
  const [data, setData] = useState<Product[]>([]);

  const fetchProducts = async (): Promise<void> => {
    try {
      const response = await fetch(getProductURI, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    return () => {
      setData([]);
    };
  }, []);

  return { data, setData };
}
