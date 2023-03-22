import { DefaultLayout, Header, NotFoundLayout } from "@/components";
import { Footer } from "@/components/Footer";
import { Meta } from "@/components/Meta";

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
