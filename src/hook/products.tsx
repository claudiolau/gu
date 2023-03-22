import { ProductData } from "@/types";
import { useState, useEffect } from "react";

export default function Products() {
  // 1. Use the name state variable
  const [data, setData] = useState<ProductData>();

  // 2. Update state
  const fetchProducts = async (): Promise<void> => {
    const fetchProducts = await fetch("https://api.storerestapi.com/products");
    const resp = await fetchProducts.json();

    setData(resp);
  };

  // 3. update render
  useEffect(() => {
    fetchProducts();

    // cleanup function
    return () => {};
  }, []);

  return { data, setData };
}
