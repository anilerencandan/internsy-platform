import Header from '@/components/Header'
import './globals.css'
import { Open_Sans, Bebas_Neue } from 'next/font/google'
import Footer from '@/components/Footer'
import { Separator } from '@/components/ui/separator'
import { NavProvider } from '@/context/NavContext'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${openSans.variable} ${bebas.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cal+Sans&display=swap" rel="stylesheet" />
      </head>
      <body className="font-open bg-[var(--background)] text-[var(--foreground)] flex flex-col min-h-screen ">
        <NavProvider>
          <Header />

        <Separator className='w-full'/> 

        <main className="w-full pt-16 ">
          {children}
        </main>
        </NavProvider>

        <Footer />
      </body>
    </html>
  )
}
