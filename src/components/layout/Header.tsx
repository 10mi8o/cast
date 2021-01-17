import React, { FC } from 'react';
import Link from 'next/link';

export const Header: FC = (): JSX.Element => {
  return (
    <Link href="/blog">
      <a>Blog</a>
    </Link>
  );
};
