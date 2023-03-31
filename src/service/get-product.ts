import { baseUrl } from "./base-url";

export const getProductURI = new URL("/", String(baseUrl));
getProductURI.searchParams.set("api", "product");
