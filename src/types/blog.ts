export type Article = {
  fields: {
    title: string;
    body: string;
    slug: string;
  };
};

export type Member = {
  name: string;
  avatarSrc: string;
  sources: string[];
  githubUsername: string;
  twitterUsername: string;
};

export type PostItem = {
  authorName: string;
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
  sourceType?: 'qiita' | 'zenn';
};
