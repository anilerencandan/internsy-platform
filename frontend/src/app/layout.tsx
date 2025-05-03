import Header from '@/components/Header'
import './globals.css'
import { Open_Sans, Bebas_Neue } from 'next/font/google'
import Footer from '@/components/Footer'

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
    <html lang="en" className={`${openSans.variable} ${bebas.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cal+Sans&display=swap" rel="stylesheet" />
      </head>
      <body className="font-open bg-[var(--background)] text-[var(--foreground)] flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 w-full max-w-[1280px] mx-auto px-4">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
