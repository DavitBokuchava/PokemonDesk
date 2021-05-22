import React from 'react';
import cn from 'classnames';
/* eslint-disable */
interface headers {
  className: IclassName;
  size?: string;
}
interface IclassName {
  marginBottom?: string;
  textShadow?: string;
  width?: string;
  color?: string;
}
/* eslint-disable */
const Heading: React.FC<headers> = ({ size, className, children }) => {
  console.log(size, children, className.width);
  return <p className={cn(className)}>{children}</p>;
};
export default Heading;
