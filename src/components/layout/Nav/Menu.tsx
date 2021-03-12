import React, { FC } from 'react';
import Link from 'next/link';

export const Menu: FC<{ open; setOpen }> = (props): JSX.Element => {
  return (
    <div>
      <div id="nav" className={props.open ? 'open' : 'close'}>
        <Link href="/">
          <a>TOP</a>
        </Link>
        <Link href="/blog/page/1">
          <a>Blog</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <style jsx>{`
          #nav {
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: #ddd;
            min-height: 100vh;
            text-align: left;
            padding: 2rem;
            position: absolute;
            top: 0;
            left: 0;
            transition: transform 0.3s ease-in-out;
            z-index: 10;
          }

          .open {
            transform: translateX(0);
          }

          .close {
            transform: translateX(-100%);
          }

          a {
            font-size: 2rem;
            text-transform: uppercase;
            padding: 2rem 0;
            font-weight: bold;
            letter-spacing: 0.5rem;
            color: black;
            text-decoration: none;
            transition: color 0.3s linear;
          }

          a:hover {
            color: #bb6638;
          }
        `}</style>
      </div>
    </div>
  );
};
