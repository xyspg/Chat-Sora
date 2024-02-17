import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'

import '@/styles/tailwind.css'
import {Analytics} from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const monaSans = localFont({
  src: '../fonts/Mona-Sans.var.woff2',
  display: 'swap',
  variable: '--font-mona-sans',
  weight: '200 900',
})

export const metadata: Metadata = {
  title: 'Sora - Creating Video From Text',
  description:
    'Sora is an AI model that can create realistic and imaginative scenes from text instructions.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, monaSans.variable)}
      suppressHydrationWarning
    >
    <Script async src="https://analytics.xyspg.moe/script.js"
            data-website-id="1a08ac76-8a3d-41dc-a566-57e50dff82fb" data-domains="chat-sora.com" />
    <body className="flex min-h-full flex-col bg-white dark:bg-gray-950">
    <Providers>{children}<Analytics/></Providers>
    </body>
    </html>
  )
}
