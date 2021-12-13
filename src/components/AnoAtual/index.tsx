export const AnoAtual = () => {
  const data = new Date();

  return <footer>{data.getFullYear()} - ConversorMoedas!</footer>;
};
