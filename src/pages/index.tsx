import { FirstCardBlock } from '@/components/FirstCardBlock';
import { CoverBanner } from '@/components/CoverBanner';
import { CoverCallout } from '@/components/CoverCallout';
import { Header } from '@/components/Header';
import { Poppins } from 'next/font/google'
import { SecondCardBlock } from '@/components/SecondCardBlock';

const inter = Poppins({ weight: ["400", "500", "700"], subsets: ["latin", "latin-ext"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center container ms-auto me-auto mb-28 gap-6 ${inter.className}`}
    >
      <Header />
      <CoverBanner />
      <FirstCardBlock />
      <CoverCallout />
      <SecondCardBlock />
    </main>
  )
}
