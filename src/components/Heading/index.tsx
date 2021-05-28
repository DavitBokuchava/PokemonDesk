import React from 'react';
import cn from 'classnames';
/* eslint-disable */
// interface headers {
//   className: IclassName;
//   size?: string;
// }
// interface IclassName {
//   marginBottom?: string;
//   textShadow?: string;
//   width?: string;
//   color?: string;
// }
interface IheadingProps {
  size?: 'xl' | 'l' | 'm' | 's' | 'xs';
  className?: string;
}
interface IheadingLevel {
  [n: string]: number;
}
const HeadingSize: IheadingLevel = {
  xl: 1,
  l: 2,
  m: 3,
  s: 4,
  xs: 5,
};

const Heading: React.FC<IheadingProps> = ({ size, className, children }) => {
  // console.log(size, children, className.width);
  //<p className={cn(className)}>{children}</p>;
  const headProps = {
    className: cn(className),
  };
  return React.createElement(`h${HeadingSize[size as keyof typeof size]}`, headProps, children);
};
export default Heading;
