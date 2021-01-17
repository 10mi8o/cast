import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: space,
  accessToken: accessToken,
});

// Contentfulにポストされた記事を全て取得する
export const fetchAllPosts = async (): Promise<any> => {
  try {
    const entries = await client.getEntries({
      order: '-sys.createdAt',
      content_type: 'blogPost',
    });
    return entries.items;
  } catch (error) {
    return;
  }
};

// Contentfulにポストされた記事をSlugで１件抽出
export const fetchPostBySlug = async (slug: string): Promise<any> => {
  return await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
  });
};
