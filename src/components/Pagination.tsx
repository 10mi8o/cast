import React, { FC } from 'react';
import Link from 'next/link';

type Props = {
  total: number;
  page: string;
  perPage: number;
  href: string;
  asCallback: (page: number) => { href: string };
};

export const Pagination: FC<Props> = (props) => {
  const { total, page, perPage, href, asCallback } = props;
  const prevPage = parseInt(page) > 1 ? parseInt(page) - 1 : null;
  let nextPage = 0;
  if (parseInt(page) < Math.ceil(total / perPage)) {
    nextPage = parseInt(page) + 1;
  }

  return (
    <div className="pager text-center">
      {prevPage ? (
        <Link href={href} as={asCallback(prevPage)}>
          <a className="pager-item">Prev</a>
        </Link>
      ) : (
        <a className="pager-item" href="/blog">
          ← TOP
        </a>
      )}
      <span className="pager-item current">{page}</span>
      {nextPage && nextPage !== null ? (
        <Link href={href} as={asCallback(nextPage)}>
          <a className="pager-item">Next</a>
        </Link>
      ) : (
        ``
      )}
      <style jsx>{`
        .pager {
          display: flex;
          flex-direction: row;
          justify-content: center;
          flew-wrap: nowrap;
        }
        .pager-item {
          margin: 0 1em;
        }
      `}</style>
    </div>
  );
};
