import { Content, DefaultLayout, Footer, Header } from "@/components";
import { Meta } from "@/components/Meta";
import Products from "@/hook/products";

export default function Home() {
  const { data } = Products();

  return (
    <>
      <Meta />
      <DefaultLayout>
        <Header />
        <Content {...data} />
        <Footer />
      </DefaultLayout>
    </>
  );
}
