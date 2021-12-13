import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Conversor } from '../page/Conversor';

describe('ConversorMoedas!', () => {
  describe('Renderizando ConversorMoedas!', () => {
    it('campo de valor', () => {
      render(<Conversor />);

      const inputValor = screen.getByLabelText('Valor');

      expect(inputValor).toBeInTheDocument();
      expect(inputValor).toHaveValue(1);
      expect(inputValor).toHaveDisplayValue('1');
    });

    it('seletor de moedas', () => {
      render(<Conversor />);

      const seletorDeMoedas = screen.getByRole('combobox');

      expect(seletorDeMoedas).toBeInTheDocument();
      expect(seletorDeMoedas).toHaveValue('BRL');
      expect(seletorDeMoedas).toHaveDisplayValue('Real');
    });

    it('botão Converter', () => {
      render(<Conversor />);

      const botãoConverter = screen.getByRole('button', { name: 'Converter' });

      expect(botãoConverter).toBeInTheDocument();
    });

    it('não renderizando secção de resultado', () => {
      render(<Conversor />);
      const secçãoResultado = screen.queryByText(
        'Resultado da conversão - Cotação do dia'
      );

      expect(secçãoResultado).not.toBeInTheDocument();
    });

    it('rodapé', () => {
      render(<Conversor />);
      const data = new Date();

      expect(
        screen.getByText(`${data.getFullYear()} - ConversorMoedas!`)
      ).toBeInTheDocument();
    });
  });

  describe('Convertendo valor', () => {
    it('preenchendo o campo de valor', async () => {
      render(<Conversor />);

      const inputValor = screen.getByLabelText('Valor');

      userEvent.clear(inputValor);
      userEvent.type(inputValor, '100');

      expect(inputValor).toHaveValue(100);
      expect(inputValor).toHaveDisplayValue('100');
    });

    it('selecionando a moeda Euro', async () => {
      render(<Conversor />);

      const seletorDeMoedas = screen.getByRole('combobox');

      userEvent.selectOptions(seletorDeMoedas, ['EUR']);

      expect(seletorDeMoedas).toHaveValue('EUR');
      expect(seletorDeMoedas).toHaveDisplayValue('Euro');
    });

    it('renderizando seção de resultado após converter', async () => {
      render(<Conversor />);

      const inputValor = screen.getByLabelText('Valor');
      const seletorDeMoedas = screen.getByRole('combobox');
      const botãoConverter = screen.getByRole('button', { name: 'Converter' });

      userEvent.clear(inputValor);
      userEvent.type(inputValor, '100');

      userEvent.selectOptions(seletorDeMoedas, ['USD']);

      fireEvent.click(botãoConverter);

      const secçãoResultado = await screen.findByText(
        'Resultado da conversão - Cotação do dia'
      );

      expect(secçãoResultado).toBeInTheDocument();
    });

    it('horário e valores renderizados após conversão', async () => {
      render(<Conversor />);

      const botãoConverter = screen.getByRole('button', {
        name: 'Converter',
      });

      fireEvent.click(botãoConverter);

      await screen.findByText('Resultado da conversão - Cotação do dia');

      const dataConversão = screen.getByLabelText('Data da consulta');
      const resultadoEUR = screen.getByLabelText('Euro');
      const resultadoUSD = screen.getByLabelText('Dólar');

      expect(dataConversão).toHaveValue();
      expect(resultadoEUR).toHaveValue();
      expect(resultadoUSD).toHaveValue();
    });

    describe('Removendo secção de resultado', () => {
      it('após alterar apenas o valor para conversão', async () => {
        render(<Conversor />);

        const inputValor = screen.getByLabelText('Valor');
        const botãoConverter = screen.getByRole('button', {
          name: 'Converter',
        });

        fireEvent.click(botãoConverter);

        const secçãoResultado = await screen.findByText(
          'Resultado da conversão - Cotação do dia'
        );

        expect(inputValor).toHaveValue(1);
        expect(inputValor).toHaveDisplayValue('1');

        userEvent.clear(inputValor);
        userEvent.type(inputValor, '4');

        expect(inputValor).toHaveValue(4);
        expect(inputValor).toHaveDisplayValue('4');

        expect(secçãoResultado).not.toBeInTheDocument();
      });

      it('após alterar apenas a moeda para conversão', async () => {
        render(<Conversor />);

        const seletorDeMoedas = screen.getByRole('combobox');
        const botãoConverter = screen.getByRole('button', {
          name: 'Converter',
        });

        expect(seletorDeMoedas).toHaveValue('BRL');

        fireEvent.click(botãoConverter);

        const secçãoResultado = await screen.findByText(
          'Resultado da conversão - Cotação do dia'
        );

        userEvent.selectOptions(seletorDeMoedas, ['EUR']);

        expect(seletorDeMoedas).toHaveValue('EUR');

        expect(secçãoResultado).not.toBeInTheDocument();
      });
    });
  });
});
