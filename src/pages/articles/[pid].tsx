import { Meta, DefaultLayout, Header, Footer } from "@/components";
import { ArticleContent } from "@/components/Content/ArticleContent";
import { useRouter } from "next/router";

export default function Article() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <Meta />
      <DefaultLayout>
        <Header />
        <ArticleContent />
        <Footer />
      </DefaultLayout>
    </>
  );
}
