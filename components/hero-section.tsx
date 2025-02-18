import { Button, type ButtonProps } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-50 via-white to-white dark:from-gray-900 dark:via-background dark:to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="animate-fade-in">
            <Badge>Welcome to StackSphere</Badge>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
            Where Tech Minds Connect
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 animate-fade-in-up">
            Join our vibrant community of developers, designers, and tech enthusiasts. Share knowledge, build connections, and grow together.
          </p>
          <div className="space-x-4 animate-fade-in-up">
            <Link href="/join">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Join Now
              </Button>
            </Link>
            <Link href="/events">
              <Button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                Explore Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

