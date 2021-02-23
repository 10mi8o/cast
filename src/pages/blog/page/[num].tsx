import { fetchAllPosts, fetchLimitPosts } from '../../../api/blog';
import { ArticleIndexCard } from 'components/cards/ArticleIndexCard';
import { Pagination } from 'components/Pagination';
import { DivideLine } from 'components/layout/DivideLine';
import Layout from 'components/layout/Index';

const COUNT_PER_PAGE = 10;

export default function PostDetail(props) {
  const contents = props.posts;
  return (
    <>
      <Layout>
        <DivideLine pageName="Blog" />
        <ul>
          {contents.map((content, id) => (
            <li key={id}>
              <ArticleIndexCard fields={content.fields} sys={content.sys} />
            </li>
          ))}
        </ul>
        <Pagination
          page={props.num}
          total={props.allPosts}
          perPage={COUNT_PER_PAGE}
          href="/blog/page/[num]"
          asCallback={(page) => `/blog/page/${page}`}
        />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const LIMIT = 10;
  const page = (params.num - 1) * LIMIT;
  const posts = await fetchLimitPosts(LIMIT, page);
  const allPosts = await fetchAllPosts();

  return {
    props: {
      posts: posts.items,
      num: params.num,
      allPosts: allPosts.length,
    },
  };
}

export async function getStaticPaths() {
  const posts = await fetchAllPosts();
  const pages = range(Math.ceil(posts.length / COUNT_PER_PAGE));
  const paths = pages.map((page) => ({
    params: { num: `${page}` },
  }));

  return {
    paths,
    fallback: false,
  };
}

function range(stop) {
  return Array.from({ length: stop }, (_, i) => i + 1);
}
