import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: space,
  accessToken: accessToken,
});

// Contentfulにポストされた記事を全て取得する
export const fetchAllPosts = async (limit?: number): Promise<any> => {
  try {
    const entries = await client.getEntries({
      order: '-sys.createdAt',
      content_type: 'blogPost',
      limit: limit,
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

export async function fetchLimitPosts(limit: number, skip: number) {
  return await client.getEntries({
    order: '-sys.createdAt',
    content_type: 'blogPost',
    limit: limit,
    skip: skip,
  });
}
