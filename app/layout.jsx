import './globals.css'
import { Inter } from 'next/font/google'
import { Outfit } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({
  variable:"--card-font-1",
  subsets: ['latin'
  ]
})

export const metadata = {
  title: 'NITS QC',
  description: 'Quiz CLub, NIT Silchar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${outfit.variable
      }`}>{children}</body>
    </html>
  )
}
