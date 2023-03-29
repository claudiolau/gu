import { useState, useEffect } from "react";
export default function Products() {
  // 1. Use the name state variable
  const [data, setData] = useState();

  // 2. Update state
  const fetchProducts = async (): Promise<void> => {
    try {
      const fetchProducts = await fetch(
        "https://api.escuelajs.co/api/v1/categories",
        {
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resp = await fetchProducts.json();
      setData(resp);
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

  return { data, setData };
}
