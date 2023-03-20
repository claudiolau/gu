import { CartContent, DefaultLayout, Header, LoginContent } from "@/components";
import { EmptyContent } from "@/components/Content/EmptyContent";
import { Footer } from "@/components/Footer";
import { useRouter } from "next/router";

export default function MainRoute() {
  const router = useRouter();
  const { route } = router.query;

  if (route === "login") {
    return (
      <>
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
        <DefaultLayout>
          <Header />
          <CartContent />
          <Footer />
        </DefaultLayout>
      </>
    );
  }
  return <></>;
}
