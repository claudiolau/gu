import Head from "next/head";
import { useRouter } from "next/router";

export const Meta = () => {
  const router = useRouter();
  const { route } = router.query;

  const dynamicRoute = (route) => {
    if (router.pathname === "/") return `GU | Home`;
    if (route) return `GU | ${route}`;
    return "GU | Not Found";
  };

  return (
    <Head>
      <title>{dynamicRoute(route)}</title>
      <meta name="description" content="Generated by gu" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
