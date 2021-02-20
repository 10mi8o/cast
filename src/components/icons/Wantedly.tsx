import React, { FC } from 'react';
import { Icon } from '../../types/icon';

export const WantedlyIcon: FC<Icon> = (props) => {
  return (
    <svg
      version="1.1"
      id="レイヤー_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 900 900"
      xmlSpace="preserve"
      height={props.height}
      width={props.width}
    >
      <style type="text/css" dangerouslySetInnerHTML={{ __html: '\n\t.st0{fill:#424242;}\n' }} />
      <polygon
        className="st0"
        points="100,208.6 200,208.6 350,570.7 400,450 300,208.6 400,208.6 450,329.3 500,208.6 600,208.6 500,450 
550,570.7 700,208.6 800,208.6 600,691.4 500,691.4 450,570.7 400,691.4 300,691.4 "
      />
    </svg>
  );
};
