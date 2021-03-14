import { useState, useEffect } from 'react';
import Layout from 'components/layout/Index';
import { DivideLine } from 'components/layout/DivideLine';
import { AboutTimeLine } from 'components/AboutTimeline';
import {
  Css3Icon,
  Html5Icon,
  JavaScriptIcon,
  LaravelIcon,
  PhpIcon,
  TypeScriptIcon,
  ReactIcon,
  PinterestIcon,
  SpotifyIcon,
} from 'components/icons';

import { ExternalLink } from 'components/icons';

export default function About() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchSpotifyData() {
      const isProd = process.env.NODE_ENV === 'production';

      const response = await fetch(
        isProd
          ? `https://cue-neon.vercel.app/api/top-tracks`
          : `http://localhost:3000/api/top-tracks`,
      );
      // const response = await fetch(`http://localhost:3000/api/top-tracks`);
      const items = await response.json();
      const tracks = items.tracks;
      setItems(tracks);
    }
    fetchSpotifyData();
  }, []);

  const careers = [
    {
      date: '2014',
      head: '仕事をしながらWeb制作を学ぶ',
      body:
        '当時仕事と並行して、関わっていたNPOの活動をきっかけにWeb制作を始める。東京デザインプレックスという社会人スクールにて1年程、Web制作の勉強を始める。徐々に転職を考え始める。',
    },
    {
      date: '2014.06',
      head: 'コーダー / Webデザイナーとしてキャリアスタート',
      body:
        '初めは契約社員として、異業種から転職。主にAdobeツールを利用したデザイン業務や、コーディングを行う。',
    },
    {
      date: '2015',
      head: '徐々にWeb制作の現場に慣れ始める。',
      body:
        'フロントエンドの画面実装を中心に、コーポレートサイトのリニューアルや運用、ECサイトの立ち上げ、SEO施策などに関わる。徐々にサーバーサイドの実装にも携わるようになる。',
    },
    {
      date: '2019.02',
      head: 'Webエンジニアとして転職',
      body: '主にPHP(Laravel)やJavaScriptを利用したWebアプリケーション開発に従事',
    },
    {
      date: '2020',
      head: 'フロントエンドのスキルを重点的に上げることを意識しながら案件に参画',
      body: '主にReactを使用した案件に携わる。今はNext.jsを学習中。',
    },
  ];
  return (
    <Layout>
      <DivideLine pageName="About" />
      <div className="md:flex mb-10">
        <div className="sm:w-full md:w-4/12">
          <div className="mb-10">
            <div className="text-center mb-5">
              <img className="inline-block" src="profile_photo.png" alt="Tomiyama" />
            </div>
            <p>
              web制作会社のコーダーを経て、現在エンジニアとして働いています。フロントエンド/バックエンド両方経験がありますが、2020年からフロントエンドのスキルを強化中。
            </p>
            <p>
              音楽(特に60&apos;s〜70&apos;sのロック・ポップスやオルタナロック)とモフモフした動物が好きです。
              心が折れそうな時は、スタジオジブリのドキュメンタリーを見ます。
            </p>
          </div>

          <div className="mb-10">
            <h2>Skills</h2>
            <div className="flex">
              <PhpIcon width="40" height="40" className="m-1" />
              <LaravelIcon width="40" height="40" className="m-1" />
              <JavaScriptIcon width="40" height="40" className="m-1" />
              <TypeScriptIcon width="40" height="40" className="m-1" />
              <ReactIcon width="40" height="40" className="m-1" />
              <Html5Icon width="40" height="40" className="m-1" />
              <Css3Icon width="40" height="40" className="m-1" />
            </div>
          </div>
          <div className="mb-10">
            <h2>Resume</h2>
            <a href="https://www.wantedly.com/users/5414317" target="_blank" rel="noreferrer">
              <span className="flex items-center">
                <ExternalLink className="mr-2" height="18" width="18" />
                Wantedly
              </span>
            </a>
          </div>
          <div className="mb-10">
            <h2>Other</h2>
            <div className="flex">
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
        </div>
        <div className="sm:w-full md:w-8/12 md:ml-8">
          <h2>Work Experience</h2>
          <div>
            <ul className="bg-gray-50 dark:bg-gray-500 rounded-3xl p-2 sm:p-5 xl:p-6">
              {careers.map((content, i) => (
                <AboutTimeLine
                  date={content.date}
                  head={content.head}
                  body={content.body}
                  key={i}
                  isCurrent={careers.length === i + 1}
                  isPast={i === 0}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {items.length > 0 && (
        <div>
          <div className="mb-10">
            <div>
              <h2>Spotify Dashboard</h2>
              <p>Here&apos;s my top tracks on Spotify updated daily.</p>
            </div>
            <div className="">
              {items.map((item, id) => (
                <div className="flex justify-between items-center mb-5" key={id}>
                  <div className="w-1/6 text-2xl">{id + 1}</div>
                  <div className="w-5/6">
                    <a className="flex" href={item.songUrl}>
                      <div className="w-5/6">
                        <h2 className="text-lg"> {item.title}</h2>
                        <p className="text-xs">
                          {item.albumTitle} / {item.artist}
                          <span className="block">{item.releaseDate}</span>
                        </p>
                      </div>
                      <div className="w-1/6">
                        <img src={item.images} width="150" height="150" />
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
