import React from 'react';
/* eslint-disable */
interface headers {
  head?: string;
  size?: string;
}
/* eslint-disable */
const Heading: React.FC<headers> = ({ size, children }) => {
  const object: headers = {
    head: '',
  };
  switch (size) {
    case '72px':
      object.head = 'h1';
      break;
    case '64px':
      object.head = 'h2';
    case '36px':
      object.head = 'h3';
    case '24px':
      object.head = 'h4';
      break;
    case '18px':
      object.head = 'h5';
      break;
    case '12px':
      object.head = 'h6';
      break;
    case '16px':
      object.head = 'p';
      break;
    default:
      object.head = 'P';
      break;
  }

  const MyHeading = `${object.head}`; //React.createElement(object.head) as HTMLHeadingElement;

  const Element = React.createElement('p', children, null);
  console.log(object.head, Element, MyHeading);
  return React.createElement(object.head, null, children);
};
export default Heading;
