import axios from 'axios';

export const converterMoeda = async (
  moedaReferencia1: string,
  moedaReferencia2: string,
  moedaBase: string,
  valor: string | number
) => {
  const url = `https://api.frankfurter.app/latest?to=${moedaReferencia1},${moedaReferencia2}&base=${moedaBase}&amount=${valor}`;

  try {
    const {
      data: { rates },
    } = await axios(url);
    return rates;
  } catch (error) {
    return null;
  }
};
