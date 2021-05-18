import React from 'react';
import cn from 'classnames';
import st from './style.module.scss';
/* eslint-disable */
interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string | '100px';
  color?: string | 'grey';
  backgroundColor?: string | 'blue';
  children: any;
}

const Button: React.FC<ButtonProps> = ({ onClick, width, color, backgroundColor, children }: ButtonProps) => {
  return (
    <button className={cn(st.root)} type="button" onClick={onClick} style={{ width, color, backgroundColor }}>
      {children}
    </button>
  );
};

export default Button;
// there eslint called error:
// error  propType "children" is not required, but has no corresponding defaultProps declaration  react/require-default-props
