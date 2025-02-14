import "./globals.css"
import { Inter, Comic_Neue } from "next/font/google"
import type { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })
const comicNeue = Comic_Neue({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata = {
  title: "Kids' Corner - Fun and Learning",
  description: "A fun webpage for curious kids with interesting facts and interactive elements",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${comicNeue.className}`}>{children}</body>
    </html>
  )
}

