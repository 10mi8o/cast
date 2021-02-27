import React, { FC } from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';
import { PostItem } from 'types/blog';

export const PostLink: FC<{ item: PostItem }> = (props) => {
  const { title, isoDate, link } = props.item;
  return (
    <li className="rounded hover:bg-gray-100 dark:hover:text-gray-400 -m-3 p-3">
      <Link href={link}>
        <a className="flex items-start items-center space-x-4" target="_blank">
          <div className="w-1/12">
            <Image src="/icon/icon_qiita.png" width="20" height="20" alt="qiita" />
          </div>
          <div className="flex-auto w-11/12">
            <h3 className="font-bold">{title}</h3>
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
