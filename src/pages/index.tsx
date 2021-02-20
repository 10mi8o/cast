import Head from 'next/head';
import Image from 'next/image';

import Layout from 'components/layout/Index';
import { DivideLine } from 'components/layout/DivideLine';
import { PostList } from '../components/PostList';
import posts from '../../.contents/posts.json';
import { PinterestIcon, SpotifyIcon, WantedlyIcon } from '../components/icons';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* コンポーネントとして切り出し */}
      <div className="mt-20 lg:mt-40 mb-12 lg:mb-32 lg:ml-16 text-left">
        <div className="md:flex items-center">
          <Image src="/tomiyama.png" width="150" height="150" alt="10mi8o" />
          <div className="mt-6 text-xm font-light text-true-gray-500 antialiased">
            <div>
              <p>
                <div className="text-2xl md:text-3xl font-semibold text-gray-900 leading-none mb-5">
                  Tomiyama
                </div>
                I&apos;m Frontend | Backend Engineer.
                <br />
                My goal is to become an engineer who can make the world a better place for the next
                generation.
              </p>
              <p>I like rock music(60s~), animals, sweets and coffee.</p>
            </div>

            <div className="flex">
              <a href="https://www.wantedly.com/users/5414317" target="_blank" rel="noreferrer">
                <WantedlyIcon width="40" height="40" />
              </a>
              <a href="https://www.pinterest.com/10mi/_saved/" target="_blank" rel="noreferrer">
                <PinterestIcon className="m-1" width="30" height="30" />
              </a>
              <a
                href="https://open.spotify.com/user/totoma855?si=ZBneslMGR86Dh21jL4bKmw"
                target="_blank"
                rel="noreferrer"
              >
                <SpotifyIcon className="m-1" width="30" height="30" />
              </a>
            </div>
          </div>
          {/* <div className="text-3xl sm:text-5xl md:text-6xl font-semibold text-gray-900 leading-none">
            Enjoy the change. <br />
            Let&apos;s work to live.
          </div> */}
        </div>
      </div>

      <DivideLine pageName={'Home'} />
      <PostList items={posts as []} />
    </Layout>
  );
}
