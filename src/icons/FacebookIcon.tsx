import React, { FC, ReactElement } from 'react';

export const FacebookIcon: FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>,
): ReactElement => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 11.5704C24 5.1801 18.8515 0 12.5014 0C6.14848 0.00143732 1 5.1801 1 11.5719C1 17.3456 5.2056 22.1319 10.7019 23V14.9151H7.78415V11.5719H10.7048V9.02062C10.7048 6.12155 12.4224 4.52037 15.0484 4.52037C16.3075 4.52037 17.6226 4.74603 17.6226 4.74603V7.59193H16.1724C14.7451 7.59193 14.2995 8.4845 14.2995 9.40008V11.5704H17.4875L16.9787 14.9136H14.2981V22.9986C19.7944 22.1304 24 17.3441 24 11.5704Z"
      />
    </svg>
  );
};
