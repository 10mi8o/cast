import { fetchAllPosts, fetchPostBySlug } from '../../api/blog';
import { Article } from '../../types/blog';

export default function Article({ article }: { article: Article }) {
  const { title, body } = { ...article.fields };

  return (
    <>
      <h1>{title}</h1>
      {body}
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await fetchAllPosts();
  const paths = data.map((post) => {
    return `/blog/${post.fields.slug}`;
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;

  // １件の記事を取得する
  const post = await fetchPostBySlug(slug);
  return {
    props: {
      blog: post.items[0],
    },
  };
};
