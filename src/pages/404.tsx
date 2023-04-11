import {
  DefaultLayout,
  Footer,
  Header,
  Meta,
  NotFoundLayout,
} from "@/components";

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
