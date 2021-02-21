import React, { FC } from 'react';

type Props = {
  date: string;
  head: string;
  body?: string;
  isCurrent: boolean;
  isPast: boolean;
};

export const AboutTimeLine: FC<Props> = (props) => {
  const { head, body, date, isCurrent, isPast } = props;
  return (
    <>
      <li>
        <div className="grid md:grid-cols-7 xl:grid-cols-8 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden">
          <div className="font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0">
            {head}
          </div>
          <time className="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0 text-gray-500">
            {isCurrent ? (
              <svg viewBox="0 0 12 12" className="w-3 h-3 mr-6 overflow-visible">
                <circle cx="6" cy="6" r="6" fill="#e89363"></circle>
                <circle cx="6" cy="6" r="11" fill="none" stroke="#e89363" strokeWidth="3"></circle>
                <path d="M 6 -6 V -30" fill="none" strokeWidth="2" stroke="#e89463ad"></path>
              </svg>
            ) : (
              <svg viewBox="0 0 12 12" className="w-3 h-3 mr-6 overflow-visible text-gray-300">
                <circle cx="6" cy="6" r="6" fill="#e89363"></circle>

                {!isPast && (
                  <path d="M 6 -6 V -30" fill="#e89363" strokeWidth="2" stroke="#e89463ad"></path>
                )}
                <path d="M 6 18 V 500" fill="#e89363" strokeWidth="2" stroke="#e89463ad"></path>
              </svg>
            )}
            {date}
          </time>
          <p className="text-sm md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0  text-gray-500">
            {body}
          </p>
        </div>
      </li>
    </>
  );
};
