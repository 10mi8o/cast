import Head from 'next/head';
import Layout from 'components/layout/Index';
import { PostList } from '../components/PostList';
import posts from '../../.contents/posts.json';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList items={posts as []} />
    </Layout>
  );
}
