/* eslint-disable */
import React from 'react';
export interface Iparams {
  id: string | number;
}
const Pokemon: React.FC<Iparams> = ({ id }) => {
  return <div style={{ textAlign: 'center' }}>this is Pokemon {id}</div>;
};

export default Pokemon;
