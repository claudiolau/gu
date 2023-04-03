import { Meta, DefaultLayout, Header, Footer } from "@/components";
import { ArticleContent } from "@/components/Content/ArticleContent";
import GetArticles from "@/hook/get-articles";
import { useRouter } from "next/router";

export default function Article() {
  const router = useRouter();
  const { data } = GetArticles(router.query);

  console.log(data);
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
