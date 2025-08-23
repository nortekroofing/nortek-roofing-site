import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets:['latin'], variable:'--font-inter' })
const playfair = Playfair_Display({ subsets:['latin'], variable:'--font-playfair' })

export const metadata = {
  title: 'Nortek Roofing',
  description: 'Flat & metal roofing systems for the Island.',
}

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
