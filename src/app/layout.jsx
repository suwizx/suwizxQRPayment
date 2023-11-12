"use client"
import { Kanit } from 'next/font/google'
import NextNProgress from 'nextjs-progressbar';
import './globals.css'

const inter = Kanit({weight:"400",preload:false})

// export const metadata = {
//   title: 'Suwizx QR Payment',
//   description: 'จ่ายตังให้ปักษ์ยังไงล่า',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-tr from-blue-600 to-pink-500`}>
        <NextNProgress  />
        {children}
      </body>
    </html>
  )
}
