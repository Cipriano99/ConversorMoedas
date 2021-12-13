export const registrarDataHorário = () => {
  const horario = new Date();
  const dataHoraConversão = horario.toLocaleString('pt-br');

  return dataHoraConversão;
};
