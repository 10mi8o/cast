import { fetchAllPosts } from '../../api/blog';
import { ArticleIndexCard } from '../../components/cards/ArticleIndexCard';
import { DivideLine } from 'components/layout/DivideLine';

import Layout from 'components/layout/Index';
import { Article } from 'types/blog';

//記事一覧ページ
export default function ArticleIndex({ contents }: { contents: Article[] }) {
  console.log(contents);
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
    </Layout>
  );
}

//データをテンプレに渡す処理
export async function getStaticProps(): Promise<{ props: { contents: Article[] } }> {
  const data = await fetchAllPosts();
  return {
    props: {
      contents: data,
    },
  };
}
