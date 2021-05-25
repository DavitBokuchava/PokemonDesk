import React from 'react';
/* eslint-disable */
interface Props {
  title?: string;
}
const EmptyPage: React.FC<Props> = ({ title }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      EMPTY PAGE
      {title}
    </div>
  );
};
export default EmptyPage;
