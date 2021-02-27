import React, { FC } from 'react';
import Link from 'next/link';
import { SiteLogoIcon } from 'components/icons';

export const Header: FC<{ open; openFlg }> = (props): JSX.Element => {
  const handle = () => {
    props.openFlg(!open);
  };

  return (
    <>
      <div className="relative bg-white mb-10 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="w-11/12 m-auto flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <SiteLogoIcon width="60" height="100%" />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={handle}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link href="/blog/page/1">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">Blog</a>
              </Link>
              <Link href="/about">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">About</a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
