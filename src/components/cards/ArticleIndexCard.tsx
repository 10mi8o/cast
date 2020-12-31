import React, { FC } from 'react';
import { Article } from '../../types/blog';
import Link from 'next/link';

export const ArticleIndexCard: FC<Article> = (props): JSX.Element => {
  const {
    fields: { title, slug },
  } = props;

  return (
    <>
      <Link href="/blog/[slug]" as={`/blog/${slug}`}>
        <a>
          <h1>{title}</h1>
        </a>
      </Link>
    </>
  );
};
