import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Analytics } from "@vercel/analytics/react"
import '@/app/globals.css'

export const metadata = {
  title: 'Tao Unfolds - Daily Tao Te Ching Reflections',
  description: 'Explore the Tao Te Ching with daily chapters, reflections, and Taoist practices for mindfulness and simplicity.',
  keywords: 'Tao Te Ching, Taoism, daily meditation, mindfulness, wu wei, simplicity, Lao Tzu',
  openGraph: {
    title: 'Tao Unfolds - Daily Tao Te Ching Reflections',
    description: 'A daily journey through the Tao Te Ching with reflections and practices.',
    url: 'https://tao-unfolds.vercel.app',
    siteName: 'Tao Unfolds',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-gray-800 min-h-screen flex flex-col items-center font-serif max-w-[100ch] mx-auto">
        <Header />
        <main className="relative min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
