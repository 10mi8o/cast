import Head from 'next/head';
import Image from 'next/image';

import Layout from 'components/layout/Index';
import { DivideLine } from 'components/layout/DivideLine';
import { PostList } from '../components/PostList';
import posts from '../../.contents/posts.json';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* コンポーネントとして切り出し */}
      <div className="mt-20 lg:mt-30 mb-12 lg:mb-32 lg:ml-16 text-left">
        <div className="md:flex items-center">
          <Image src="/tomiyama.png" width="150" height="150" alt="10mi8o" />
          <div className="mt-6 ml-6 text-xm font-light text-true-gray-500 antialiased">
            <div>
              <div className="text-2xl md:text-3xl font-semibold leading-none mb-5">Tomiyama</div>
              <p>
                I&apos;m Frontend | Backend Engineer.
                <br />
                My goal is to become an engineer who can make the world a better place for the next
                generation.
              </p>
              <p>I like rock music(60s~), animals, sweets and coffee.</p>
            </div>
          </div>
        </div>
      </div>

      <DivideLine pageName={'Home'} />
      <PostList items={posts as []} />
    </Layout>
  );
}
