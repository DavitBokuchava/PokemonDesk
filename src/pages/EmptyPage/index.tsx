import React from 'react';
import Header from '../../components/Header';
/* eslint-disable */
interface Props {
  title?: string;
}
const EmptyPage: React.FC<Props> = ({ title }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      EMPTY PAGE
      {title}
    </div>
  );
};
export default EmptyPage;
