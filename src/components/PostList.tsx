import React, { useState } from 'react';
import { PostLink } from 'components/PostLink';

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
            onClick={() => setDisplayItemsCount(displayItemsCount + 7)}
            className="flex bg-blue-500 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6"
          >
            Load More Article
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
