import { DefaultLayout, Header, LoginContent } from "@/components";
import { Footer } from "@/components/Footer";

export default function Member() {
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
