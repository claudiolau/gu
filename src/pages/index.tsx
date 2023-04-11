import { DefaultLayout, Footer, Header, HomeContent } from "@/components";
import { Meta } from "@/components/Meta";
import Products from "@/hook/route/use-product";

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
