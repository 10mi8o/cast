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
} from 'components/icons';

export default function About() {
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
      <div className="md:flex">
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
        </div>
        <div className="sm:w-full md:w-8/12 md:ml-8">
          <h2>Work Experience</h2>
          <div>
            <ul className="bg-gray-50 rounded-3xl p-2 sm:p-5 xl:p-6">
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
    </Layout>
  );
}
