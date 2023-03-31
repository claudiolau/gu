import { baseUrl } from "./base-url";

export const getProductURI = new URL("/api/product", baseUrl);

export const getProducts = async () => {
  try {
    console.log(`${process.env.basePath}`);
    const data = await fetch(getProductURI, {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const resp = await data.json();
    return resp;
  } catch (e) {
    console.error(e);
  }
};
