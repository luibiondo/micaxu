import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { restaurantInfo } from '@/data/restaurantInfo';
import { menuData } from '@/data/menuData';
import { MotionProvider } from '@/components/ui/MotionProvider';
import './globals.css';

const heading = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-heading', display: 'swap' });
const body = Manrope({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  title: 'Restaurante Micaxu | Buffet por Kg & Porções em Boituva',
  description: 'Sabor brasileiro, buffet preparado diariamente, porções generosas e caipirinhas em Boituva/SP. Conheça nosso cardápio. Atendimento por ordem de chegada, sem reservas.',
  applicationName: restaurantInfo.name,
  keywords: ['Restaurante Micaxu', 'restaurante em Boituva', 'buffet por kg', 'porções', 'caipirinhas'],
  openGraph: {
    title: 'Restaurante Micaxu — Sabor para compartilhar',
    description: 'Buffet por Kg, porções e bebidas em Boituva/SP. Venha sem pressa, por ordem de chegada.',
    locale: 'pt_BR',
    type: 'website',
    siteName: restaurantInfo.name,
  },
  twitter: { card: 'summary_large_image', title: restaurantInfo.name, description: 'Buffet por Kg & Porções em Boituva/SP.' },
  robots: { index: true, follow: true },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: restaurantInfo.name,
  description: restaurantInfo.proposition,
  servesCuisine: 'Brasileira',
  telephone: restaurantInfo.phone,
  acceptsReservations: false,
  address: { '@type': 'PostalAddress', streetAddress: restaurantInfo.address.split(' - ')[0], addressLocality: 'Boituva', addressRegion: 'SP', addressCountry: 'BR' },
  hasMap: restaurantInfo.mapsUrl,
  sameAs: [restaurantInfo.instagramUrl, restaurantInfo.whatsappUrl],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: restaurantInfo.openingHours.weekdays.opens, closes: restaurantInfo.openingHours.weekdays.closes },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday', 'PublicHolidays'], opens: restaurantInfo.openingHours.weekendsAndHolidays.opens, closes: restaurantInfo.openingHours.weekendsAndHolidays.closes },
  ],
  hasMenu: {
    '@type': 'Menu',
    hasMenuSection: menuData.categories.map((category) => ({
      '@type': 'MenuSection',
      name: category.title,
      hasMenuItem: menuData.items.filter((item) => item.categoryId === category.id).map((item) => ({ '@type': 'MenuItem', name: item.name, description: item.variants?.join(', ') })),
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${heading.variable} ${body.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
