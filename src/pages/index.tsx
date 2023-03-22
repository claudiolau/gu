import { Content, DefaultLayout, Header } from "@/components";
import { Footer } from "@/components/Footer";
import Products from "@/hook/products";
import { Meta } from "@/components/Meta";

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
