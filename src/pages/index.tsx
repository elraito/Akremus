import { FirstCardBlock } from '@/components/FirstCardBlock';
import { CoverBanner } from '@/components/CoverBanner';
import { CoverCallout } from '@/components/CoverCallout';
import { Header } from '@/components/Header';
import { Poppins } from 'next/font/google'
import { SecondCardBlock } from '@/components/SecondCardBlock';
import { RecipeCards } from '@/components/RecipeCards';
import { Footer } from '@/components/Footer';
import { GrowBlock } from '@/components/GrowBlock';
import { FooterCallout } from '@/components/FooterCallout';

const inter = Poppins({ weight: ["400", "500", "700"], subsets: ["latin", "latin-ext"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col container mx-auto gap-6 ${inter.className}`}
    >
      <Header />
      <CoverBanner />
      <FirstCardBlock />
      <CoverCallout />
      <SecondCardBlock />
      <RecipeCards />
      <GrowBlock />
      <FooterCallout />
      <Footer />
    </main>
  )
}
