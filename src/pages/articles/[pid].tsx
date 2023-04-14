import {
  Meta,
  DefaultLayout,
  Header,
  Footer,
  ArticleContent,
} from "@/components";

import useArticles from "@/hook/use-articles";

export default function Article(props: { params: { pid: string } }) {
  const { data = [] } = useArticles(props.params);
  return (
    <>
      <Meta />
      <DefaultLayout>
        <Header />
        <ArticleContent {...data} />
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
