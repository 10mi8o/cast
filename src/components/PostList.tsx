import React, { useState } from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';
import { PostItem } from 'types/blog';

const PostLink: React.FC<{ item: PostItem }> = (props) => {
  const { title, isoDate, link } = props.item;
  return (
    <li className="rounded hover:bg-gray-100 -m-3 p-3">
      <Link href={link}>
        <a className="flex items-start space-x-4">
          <Image src="/icon/icon_qiita.png" width="20" height="20" alt="qiita" />
          <div className="flex-auto">
            <h3 className="font-bold text-gray-900">{title}</h3>
            <time dateTime={isoDate} className="text-sm text-gray-500">
              {isoDate && format(new Date(isoDate), 'yyyy/MM/dd')}
            </time>
            {/* TODO sourceType(qiitaやZennでの出しわけ検討)  */}
            {/* <div>{sourceType}</div> */}
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
      <ul className="grid sm:grid-cols-2 gap-6 xl:gap-8 mb-10">
        {props.items.slice(0, displayItemsCount).map((item, i) => (
          <PostLink key={`post-item-${i}`} item={item} />
        ))}
      </ul>
      {canLoadMore ? (
        <div className="post-list-load">
          <button
            onClick={() => setDisplayItemsCount(displayItemsCount + 6)}
            className="flex bg-blue-500 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6"
          >
            OPEN
          </button>
        </div>
      ) : (
        <div className="post-list-load">
          <button
            onClick={() => setDisplayItemsCount(displayItemsCount - 14)}
            className="flex bg-blue-500 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};
