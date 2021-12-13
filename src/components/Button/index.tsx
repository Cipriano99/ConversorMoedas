import { ButtonHTMLAttributes } from 'react';
import { ButtonStyle } from './styles';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export const Button = ({ children, ...props }: IButton) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};
