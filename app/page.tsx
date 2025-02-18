import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Testimonials } from "@/components/testimonials"
import { StatsSection } from "@/components/stats-section"
import { Features } from "@/components/features"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <StatsSection />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/50 dark:to-purple-950/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline" className="mb-2 border-blue-500 text-blue-500">
                Upcoming Events
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Join Our Next Event</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Don't miss out on our exciting upcoming events and workshops.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {[
              {
                title: "Web Development Workshop",
                date: "March 15, 2025",
                category: "Workshop",
                description: "Learn modern web development practices with hands-on exercises."
              },
              {
                title: "AI/ML Meetup",
                date: "March 20, 2025",
                category: "Meetup",
                description: "Discussion on latest trends in AI and Machine Learning."
              },
              {
                title: "Code Review Session",
                date: "March 25, 2025",
                category: "Workshop",
                description: "Peer code review session for improving code quality."
              }
            ].map((event, i) => (
              <Card key={i} className="transform transition-all hover:scale-105 border-blue-100 dark:border-blue-900">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100">
                    {event.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{event.date}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {event.description}
                  </p>
                  <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Link href="/events">Register Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  )
}

