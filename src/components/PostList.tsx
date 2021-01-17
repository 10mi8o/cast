import React, { useState } from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
import { PostItem } from 'types/blog';

const PostLink: React.FC<{ item: PostItem }> = (props) => {
  const { title, isoDate, link, sourceType } = props.item;
  return (
    <li className="rounded hover:bg-gray-100 -m-3 p-3">
      <Link href={link}>
        <a className="flex items-start space-x-4">
          <div className="flex-auto">
            <h3 className="font-bold text-gray-900">{title}</h3>
            <time dateTime={isoDate} className="text-sm text-gray-500">
              {isoDate && format(new Date(isoDate), 'yyyy/MM/dd')}
            </time>
            <div>{sourceType}</div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export const PostList: React.FC<{ items: [] }> = (props) => {
  const [displayItemsCount, setDisplayItemsCount] = useState<number>(6);
  const totalItemsCount = props.items?.length || 0;
  const canLoadMore = totalItemsCount - displayItemsCount > 0;

  if (!totalItemsCount) {
    return <div className="post-list-empty">No posts yet</div>;
  }

  return (
    <>
      QiitaPublish Test
      <ul className="grid sm:grid-cols-2 gap-6 xl:gap-8">
        {props.items.slice(0, displayItemsCount).map((item, i) => (
          <PostLink key={`post-item-${i}`} item={item} />
        ))}
      </ul>
      {canLoadMore && (
        <div className="post-list-load">
          <button
            onClick={() => setDisplayItemsCount(displayItemsCount + 12)}
            className="post-list-load__button"
          >
            LOAD MORE
          </button>
        </div>
      )}
    </>
  );
};
