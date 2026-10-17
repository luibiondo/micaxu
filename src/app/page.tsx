import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { InfoBanner } from '@/components/sections/InfoBanner';
import { Buffet } from '@/components/sections/Buffet';
import { MenuSection } from '@/components/sections/Menu/MenuSection';
import { CaipirinhaBuilder } from '@/components/sections/CaipirinhaBuilder';
import { InstagramGallery } from '@/components/sections/InstagramGallery';
import { WhatsAppFAB } from '@/components/ui/WhatsAppFAB';

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <InfoBanner />
        <Buffet />
        <MenuSection />
        <CaipirinhaBuilder />
        <InstagramGallery />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
