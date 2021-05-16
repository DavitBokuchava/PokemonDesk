import React from 'react';
import cn from 'classnames';
import st from './style.module.scss';
// interface ButtonColor{
//     color?: string
// }

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<ButtonProps> = ({ onClick }: ButtonProps) => {
  return (
    <button className={cn(st.root)} type="button" onClick={onClick}>
      See pokemons
    </button>
  );
};
export default Button;
