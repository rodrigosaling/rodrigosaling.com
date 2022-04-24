export const publishedAt = (date) =>
  new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Sao_Paulo',
  }).format(new Date(date));
