import { moedasDisponíveis } from '../../data/moedasDisponíveis';

import { SelectStyle } from './styles';

interface ISelect {
  name: string;
  label: string;
  onChange: (event: any) => void;
}

export const Select = ({ name, label, onChange }: ISelect) => {
  return (
    <SelectStyle>
      <label>{label}</label>
      <select name={name} onChange={onChange}>
        {moedasDisponíveis.map((moeda) => (
          <option value={moeda.sigla} key={moeda.sigla}>
            {moeda.nome}
          </option>
        ))}
      </select>
    </SelectStyle>
  );
};
