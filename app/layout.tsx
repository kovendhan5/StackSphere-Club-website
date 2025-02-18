import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { NewsletterForm } from "@/components/newsletter-form"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "StackSphere Club",
  description: "Connect with tech enthusiasts and grow together.",
  generator: 'v0.dev'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Meta viewport now defined in separate export */}
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <MainNav />
            <main className="flex-1">{children}</main>
            <footer className="border-t">
              <div className="container py-12 px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">About Us</h3>
                    <p className="text-sm text-muted-foreground">
                      StackSphere Club is a community dedicated to learning, sharing, and growing together in tech.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        <Link href="/events">Events</Link>
                      </li>
                      <li>
                        <Link href="/gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link href="/join">Join Us</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Connect</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                          LinkedIn
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </li>
                      <li>
                        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                          Discord
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Newsletter</h3>
                    <NewsletterForm />
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                  © {new Date().getFullYear()} StackSphere Club. All rights reserved.
                </div>
              </div>
            </footer>
            <ToastContainer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}