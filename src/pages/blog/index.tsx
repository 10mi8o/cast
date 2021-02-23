import { fetchAllPosts } from '../../api/blog';
import { ArticleIndexCard } from '../../components/cards/ArticleIndexCard';
import { DivideLine } from 'components/layout/DivideLine';

import Layout from 'components/layout/Index';
import { Article } from 'types/blog';

//記事一覧ページ
export default function ArticleIndex({ contents }: { contents: Article[] }) {
  const LIMIT_PER_PAGE = 10;
  return (
    <Layout>
      <DivideLine pageName="Blog" />
      <ul>
        {contents.map((content, id) => (
          <li key={id}>
            <ArticleIndexCard fields={content.fields} sys={content.sys} />
          </li>
        ))}
      </ul>
      {contents.length >= LIMIT_PER_PAGE && (
        <>
          <a className="pager-item" href="/blog/page/2">
            Archive →
          </a>
        </>
      )}
    </Layout>
  );
}

//データをテンプレに渡す処理
export async function getStaticProps(): Promise<{ props: { contents: Article[] } }> {
  const data = await fetchAllPosts(15);
  return {
    props: {
      contents: data,
    },
  };
}
