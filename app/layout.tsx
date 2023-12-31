import './css/style.css'

import { Sulphur_Point, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'

const sulphur = Sulphur_Point({
  subsets: ['latin'],
  variable: '--font-sulphur',
  weight: '400',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sulphur.variable} ${architects_daughter.variable} font-sulphur antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
 