import { DefaultLayout, Footer, Header, HomeContent, Meta } from "@/components";
import { Banner } from "@/components/atoms/Banner/Banner";
import { Hero } from "@/components/atoms/Hero/Hero";
import useProducts from "@/hook/use-product";

export default function Home() {
  const { data = [] } = useProducts();

  return (
    <>
      <Meta />
      <DefaultLayout>
        <Header />
        <Banner />
        <Hero />
        <HomeContent {...data} />
        <Footer />
      </DefaultLayout>
    </>
  );
}
