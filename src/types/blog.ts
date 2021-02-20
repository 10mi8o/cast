export type Article = {
  sys: {
    updatedAt: Date;
  };
  fields: {
    title: string;
    body: string;
    slug: string;
    category: {
      fields: {
        name: string;
      };
    };
  };
};

export type Author = {
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
