import React from 'react';
import { fetchAllPosts, fetchPostBySlug } from '../../api/blog';
import Layout from 'components/layout/Index';
import { Post } from 'components/blog/Post';
import { Article } from '../../types/blog';

export default function ArticleDetail({ article }: { article: Article }) {
  const { title, body, category } = { ...article.fields };

  return (
    <Layout>
      <Post title={title} body={body} category={category} />
    </Layout>
  );
}

export const getStaticPaths = async (): Promise<{ paths: string; fallback: boolean }> => {
  const data = await fetchAllPosts();
  const paths = data.map((post) => {
    return `/blog/${post.fields.slug}`;
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }): Promise<{ props: { article } }> => {
  const slug = params.slug;

  // １件の記事を取得する
  const post = await fetchPostBySlug(slug);
  return {
    props: {
      article: post.items[0],
    },
  };
};
