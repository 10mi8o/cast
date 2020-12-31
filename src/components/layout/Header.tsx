import React, { FC } from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <Link href="/blog">
      <a>Blog</a>
    </Link>
  );
};
