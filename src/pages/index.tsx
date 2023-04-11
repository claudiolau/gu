import { DefaultLayout, Footer, Header, HomeContent, Meta } from "@/components";
import Products from "@/hook/use-product";

export default function Home() {
  const { data = [] } = Products();

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
