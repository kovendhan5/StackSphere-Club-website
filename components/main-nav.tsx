"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl mx-auto items-center px-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg sm:text-xl">StackSphere Club</span>
          </Link>
          <Button 
            className="md:hidden" 
            size="icon" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-6">
          <Link href="/" className="transition-colors hover:text-primary bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 px-4 py-2 rounded-md">Home</Link>
          <Link href="/events" className="transition-colors hover:text-primary bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 px-4 py-2 rounded-md">Events</Link>
          <Link href="/gallery" className="transition-colors hover:text-primary bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 px-4 py-2 rounded-md">Gallery</Link>
          <Link href="/contact" className="transition-colors hover:text-primary bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 px-4 py-2 rounded-md">Contact</Link>
        </nav>

        <div className="ml-auto hidden md:flex items-center space-x-4">
          <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Link href="/join">Join Now</Link>
          </Button>
          <ModeToggle />
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
        <nav className="flex flex-col space-y-4 p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Link 
            href="/" 
            onClick={toggleMenu}
            className="transition-colors hover:text-primary px-2 py-1 rounded-md hover:bg-accent"
          >
            Home
          </Link>
          <Link 
            href="/events" 
            onClick={toggleMenu}
            className="transition-colors hover:text-primary px-2 py-1 rounded-md hover:bg-accent"
          >
            Events
          </Link>
          <Link 
            href="/gallery" 
            onClick={toggleMenu}
            className="transition-colors hover:text-primary px-2 py-1 rounded-md hover:bg-accent"
          >
            Gallery
          </Link>
          <Link 
            href="/contact" 
            onClick={toggleMenu}
            className="transition-colors hover:text-primary px-2 py-1 rounded-md hover:bg-accent"
          >
            Contact
          </Link>
          <Link 
            href="/join" 
            onClick={toggleMenu}
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-md"
          >
            Join Now
          </Link>
          <div className="pt-2 pl-2">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}

