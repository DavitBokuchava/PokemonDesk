import React from 'react';
import cn from 'classnames';
import st from './style.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  classname: string | null;
}
// children
const Button: React.FC<ButtonProps> = ({ onClick, classname }: ButtonProps) => {
  return (
    <button className={cn(st.root, classname)} type="button" onClick={onClick}>
      {/* children */}
      See Pokemons
    </button>
  );
};
export default Button;
// there eslint called error:
// error  propType "children" is not required, but has no corresponding defaultProps declaration  react/require-default-props
