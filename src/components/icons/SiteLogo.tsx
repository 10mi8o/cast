import React, { FC } from 'react';
import { Icon } from '../../types/icon';

export const SiteLogoIcon: FC<Icon> = (props) => {
  return (
    <svg
      className={props.className}
      width={props.width}
      height={props.height}
      viewBox="0 0 140 81"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Slice 1</title>
      <desc>Created with Sketch.</desc>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
        fontFamily="LucidaGrande, Lucida Grande"
        fontSize={62}
        fontWeight="normal"
        opacity="0.799990699"
      >
        <text id="CUE" fill="#E17538">
          <tspan x={0} y={65}>
            CUE
          </tspan>
        </text>
        <text id=":" fill="#E17538">
          <tspan x={118} y={60}>
            :
          </tspan>
        </text>
      </g>
    </svg>
  );
};
