import {
  CartContent,
  DefaultLayout,
  Footer,
  Header,
  LoginContent,
  Meta,
} from "@/components";

import { useRouter } from "next/router";
import Custom404 from "./404";

export default function MainRoute() {
  const router = useRouter();
  const { route } = router.query;

  if (route === "login") {
    return (
      <>
        <Meta />
        <DefaultLayout>
          <Header />
          <LoginContent />
          <Footer />
        </DefaultLayout>
      </>
    );
  }
  if (route === "cart") {
    return (
      <>
        <Meta />
        <DefaultLayout>
          <Header />
          <CartContent />
          <Footer />
        </DefaultLayout>
      </>
    );
  }
  return <Custom404 />;
}
