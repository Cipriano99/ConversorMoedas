import { SyntheticEvent, useState } from 'react';

import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { AnoAtual } from '../../components/AnoAtual';

import { moedasDisponíveis } from '../../data/moedasDisponíveis';
import { converterMoeda } from './converterMoeda';
import { registrarDataHorário } from './registrarDataHorário';

import { Container } from './styles';
import { Button } from '../../components/Button';

type MoedasTypeResultado = {
  sigla: string;
  valor: string;
};

export const Conversor = () => {
  const [valor, setValor] = useState<number | string>(1);
  const [moedaBase, setMoedaBase] = useState('BRL');
  const [resultadoDaConversão, setResultadoDaConversão] = useState<Array<
    MoedasTypeResultado[]
  > | null>(null);
  const [horarioConversão, setHorarioConversão] = useState('');

  const handleSubmitConvert = async (event: SyntheticEvent) => {
    event.preventDefault();

    // Remove a moeda selecionada para conversão
    const moedasParaConverter = moedasDisponíveis.filter(
      (moeda) => moeda.sigla !== moedaBase
    );

    const resultado = await converterMoeda(
      moedasParaConverter[0].sigla,
      moedasParaConverter[1].sigla,
      moedaBase,
      valor
    );

    setHorarioConversão(registrarDataHorário);
    setResultadoDaConversão(
      Object.entries(resultado) as Array<MoedasTypeResultado[]>
    );
  };

  return (
    <Container>
      <h1>ConversorMoedas!</h1>
      <section>
        <h3>Informe o valor e a moeda para a conversão</h3>
        <hr />
        <form onSubmit={handleSubmitConvert}>
          <Input
            name="valor"
            label="Valor"
            type="number"
            value={valor}
            onChange={(event) => {
              setValor(event.target.value);
              setResultadoDaConversão(null);
            }}
            onFocus={(event) => event.target.select()}
            required
          />
          <Select
            name="select"
            label="Moeda"
            onChange={(event) => {
              setMoedaBase(`${event.target.value}`);
              setResultadoDaConversão(null);
            }}
          />
          <Button type="submit">Converter</Button>
        </form>
      </section>

      {resultadoDaConversão && (
        <section>
          <h3>Resultado da conversão - Cotação do dia</h3>
          <hr />
          <div className="resultado">
            <Input
              readOnly
              name="data"
              label="Data da consulta"
              value={horarioConversão}
            />

            {resultadoDaConversão.map((moeda) => {
              const nomeDaMoeda = moedasDisponíveis.find(
                (moedaDisponivel) =>
                  moedaDisponivel.sigla === moeda[0].toString()
              );

              const sigla = moeda[0].toString();
              const valor = +moeda[1];

              return (
                <Input
                  key={sigla}
                  readOnly
                  name={sigla}
                  label={nomeDaMoeda?.nome || ''}
                  // value={`${sigla} ${valor}`}
                  value={valor.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: sigla,
                  })}
                />
              );
            })}
          </div>
        </section>
      )}

      <section>
        <hr />
        <AnoAtual />
      </section>
    </Container>
  );
};
