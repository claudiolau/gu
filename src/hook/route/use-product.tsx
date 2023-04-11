import { getProducts } from "@/service";
import { IProduct } from "@prisma/data";
import { useState, useEffect } from "react";

export default function useProducts() {
  // 1. Use the name state variable
  const [data, setData] = useState<IProduct[] | []>();

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
