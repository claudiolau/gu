"use client";

import { Meta, DefaultLayout, Header, Footer } from "@/components";
import { ArticleContent } from "@/components/Content/ArticleContent";
import useArticles from "@/hook/use-articles";

export default function Article(props: { params: string }) {
  const { data } = useArticles(props.params as any);

  return (
    <>
      <Meta />
      <DefaultLayout>
        <Header />
        <ArticleContent {...(data || [])} />
        <Footer />
      </DefaultLayout>
    </>
  );
}

export function getServerSideProps(context: { params: string }) {
  return {
    props: { params: context.params },
  };
}