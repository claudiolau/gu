import { DefaultLayout, Footer, Header, HomeContent, Meta } from "@/components";
import useProducts from "@/hook/use-product";

export default function Home() {
  const { data = [] } = useProducts();

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
