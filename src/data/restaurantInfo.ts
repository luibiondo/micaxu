export const restaurantInfo = {
  name: 'Restaurante Micaxu',
  proposition: 'Buffet por Kg 🍽️ & Porções / Bebidas',
  address: 'R. José Moschioni, 440 - Boituva/SP',
  phone: '(15) 97401-7775',
  whatsappUrl: 'https://wa.me/+5515974017775',
  instagramUrl: 'https://www.instagram.com/restaurantemicaxu/',
  mapsUrl: 'https://maps.app.goo.gl/EVmeigmwBFuHtL1P9?g_st=ac',
  timeZone: 'America/Sao_Paulo',
  reservations: false,
  serviceNotice: 'Atendimento por ORDEM DE CHEGADA — Não fazemos RESERVAS!',
  buffetPricePerKg: 119.9,
  buffetPriceNote: 'sujeito à alteração',
  openingHours: {
    weekdays: {
      days: ['terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira'],
      opens: '11:30',
      closes: '15:00',
    },
    weekendsAndHolidays: {
      days: ['sábado', 'domingo', 'feriados'],
      opens: '11:30',
      closes: '17:00',
    },
    closedDays: ['segunda-feira'],
  },
} as const;
