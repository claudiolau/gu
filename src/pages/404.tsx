import { DefaultLayout, Header, NotFoundLayout } from "@/components";
import { Footer } from "@/components/atoms/Footer";
import { Meta } from "@/components/atoms/Meta";

export default function Custom404() {
  return (
    <>
      <Meta />
      <DefaultLayout>
        <Header />
        <NotFoundLayout />
        <Footer />
      </DefaultLayout>
    </>
  );
}
