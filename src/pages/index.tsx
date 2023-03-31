import { DefaultLayout, Footer, Header, HomeContent } from "@/components";
import { Meta } from "@/components/Meta";
import Products from "@/hook/products";
import { ProductData } from "../../prisma/data";

export default function Home() {
  const { data } = Products() as unknown | ProductData[];
  return (
    <>
      <Meta />
      <DefaultLayout>
        <Header />
        <HomeContent {...data} />
        <Footer />
      </DefaultLayout>
    </>
  );
}
