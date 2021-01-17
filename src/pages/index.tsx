import Head from 'next/head';
import Layout from 'components/layout/Index';
import styles from '../../styles/Home.module.css';
import { PostList } from '../components/PostList';
import posts from '../../.contents/posts.json';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PostList items={posts as []} />
        <main className={styles.main}>MainTest</main>
      </div>
    </Layout>
  );
}
