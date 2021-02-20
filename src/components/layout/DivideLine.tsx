import React, { FC } from 'react';

export const DivideLine: FC<{ pageName: string }> = (props): JSX.Element => {
  function get_english_date() {
    const month_english_list = [
      'Jan.',
      'Feb.',
      'Mar.',
      'Apr.',
      'May',
      'June',
      'July',
      'Aug.',
      'Sept.',
      'Oct.',
      'Nov.',
      'Dec.',
    ];

    const date = new Date();

    const month = date.getMonth();
    const month_english = month_english_list[month];
    const day = date.getDate();
    const year = date.getFullYear();

    const date_english = month_english + ' ' + day + ', ' + year;

    return date_english;
  }

  return (
    <div className="flex justify-between border-b-2 mb-10">
      <div>{props.pageName}</div>
      <div>{get_english_date()}</div>
    </div>
  );
};
