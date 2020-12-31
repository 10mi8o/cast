import { fetchAllPosts } from '../../api/blog';
import { ArticleIndexCard } from '../../components/cards/ArticleIndexCard';
import Layout from 'components/layout/Index';
import { Article } from 'types/blog';

//記事一覧ページ
export default function ArticleIndex({ contents }: { contents: Article[] }) {
  return (
    <Layout>
      <ul>
        {contents.map((content, id) => (
          <li key={id}>
            <ArticleIndexCard fields={content.fields} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

//データをテンプレに渡す処理
export async function getStaticProps() {
  const data = await fetchAllPosts();
  return {
    props: {
      contents: data,
    },
  };
}
