const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
});

// Contentfulにポストされた記事を全て取得する
export const fetchAllPosts = async () => {
  try {
    const entries = await client.getEntries({
      order: '-sys.createdAt',
      content_type: 'blogPost',
    });
    return entries.items;
  } catch (error) {
    console.log(error);
  }
};

// Contentfulにポストされた記事をSlugで１件抽出
export async function fetchPostBySlug(slug) {
  const post = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
  });
  return post;
}
