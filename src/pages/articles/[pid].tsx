"use client";

import { Meta, DefaultLayout, Header, Footer } from "@/components";
import { ArticleContent } from "@/components/Content/ArticleContent";
import useArticles from "@/hook/use-articles";

export default function Article(props: { params: string }) {
  const { data } = useArticles(props.params);

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

export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}
