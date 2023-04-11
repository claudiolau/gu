import { getProducts } from "@/service";
import { Product } from "@prisma/client";
import { useState, useEffect } from "react";

export default function useProducts() {
  // 1. Use the name state variable
  const [data, setData] = useState<Product[] | []>();

  // 2. Update state

  const fetchProducts = async (): Promise<void> => {
    try {
      setData(await getProducts());
    } catch (e) {
      console.error(e);
    }
  };

  // 3. update render
  useEffect(() => {
    fetchProducts();

    // cleanup function
    return () => {};
  }, []);
  // ...

  return { data, setData };
}
