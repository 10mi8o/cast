import React, { FC } from 'react';
import { parseISO, format } from 'date-fns';

import { Article } from '../../types/blog';
import Link from 'next/link';
import { ReactIcon, ReduxIcon, JavaScriptIcon } from '../icons';

const Date = ({ dateString }) => {
  const date = parseISO(dateString);
  return (
    <time className="text-gray-500" dateTime={dateString}>
      {format(date, 'yyyy/MM/dd')}
    </time>
  );
};

export const ArticleIndexCard: FC<Article> = (props): JSX.Element => {
  const {
    fields: {
      title,
      slug,
      category: {
        fields: { name },
      },
    },
  } = props;

  const icon = (name) => {
    if (name === 'React') {
      return <ReactIcon height="40" width="40" />;
    } else if (name === 'Redux') {
      return <ReduxIcon height="40" width="40" />;
    } else if (name === 'JavaScript') {
      return <JavaScriptIcon height="40" width="40" />;
    }
  };

  return (
    <div className="flex items-center">
      <div className="mr-4 mb-8">{icon(name)}</div>
      <div>
        <Date dateString={props.sys.updatedAt} />
        <Link href="/blog/[slug]" as={`/blog/${slug}`}>
          <a>
            <h2 className="mb-8">{title}</h2>
          </a>
        </Link>
      </div>
    </div>
  );
};
