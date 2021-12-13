import { InputHTMLAttributes } from 'react';

import { InputStyle } from './styles';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const Input = ({ name, label, ...props }: IInput) => {
  return (
    <InputStyle>
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} id={name} {...props} />
    </InputStyle>
  );
};
