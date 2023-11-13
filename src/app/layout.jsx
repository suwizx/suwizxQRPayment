import { Kanit } from 'next/font/google'
// import NextNProgress from 'nextjs-progressbar';
import './globals.css'

const inter = Kanit({weight:"400",preload:false})

export const metadata = {
  title:'จ่ายตังให้ปักษ์',
  description: 'ระบบสร้าง QRCode สำหรับจ่ายเงินด้วย PromptPay ของ suwizx',
  openGraph: {
    title: 'จ่ายตังให้ปักษ์',
    description: 'ระบบสร้าง QRCode สำหรับจ่ายเงินด้วย PromptPay ของ suwizx',
    images: [
      {
        url: './thumbnail.jpg',
        width: 1800,
        height: 1600,
        alt: 'จ่ายตังให้ปักษ์',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'จ่ายตังให้ปักษ์',
    description: 'ระบบสร้าง QRCode สำหรับจ่ายเงินด้วย PromptPay ของ suwizx',
    creator: '@suwizx',
    images: ['./thumbnail.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-tr from-blue-600 to-pink-500`}>
        {children}
      </body>
    </html>
  )
}
