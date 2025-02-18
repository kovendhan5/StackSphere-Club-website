"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CalendarDays, MapPin, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { toast } from "react-toastify"

const events = [
  {
    id: 1,
    title: "Web Development Workshop",
    date: "March 15, 2025",
    location: "Tech Hub, Room 101",
    description: "Learn the fundamentals of modern web development with React and Next.js.",
    category: "Workshop",
  },
  {
    id: 2,
    title: "Coding Challenge Night",
    date: "March 20, 2025",
    location: "Online",
    description: "Join us for a night of solving coding challenges and improving problem-solving skills.",
    category: "Competition",
  },
  {
    id: 3,
    title: "Tech Talk: AI & Machine Learning",
    date: "April 5, 2025",
    location: "Main Auditorium",
    description: "Expert speakers discuss the latest trends in AI and machine learning.",
    category: "Talk",
  },
  {
    id: 4,
    title: "Hackathon 2025",
    date: "April 15-16, 2025",
    location: "Innovation Center",
    description: "48-hour hackathon to build innovative solutions for real-world problems.",
    category: "Hackathon",
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Web Development Workshop",
    date: "March 15, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Tech Hub Room 101",
    category: "Workshop",
    spots: 20,
    description: "Learn modern web development practices with hands-on exercises."
  },
  {
    id: 2,
    title: "AI/ML Meetup",
    date: "March 20, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Innovation Center",
    category: "Meetup",
    spots: 30,
    description: "Discussion on latest trends in AI and Machine Learning."
  },
  {
    id: 3,
    title: "Code Review Session",
    date: "March 25, 2025",
    time: "5:00 PM - 7:00 PM",
    location: "Virtual",
    category: "Workshop",
    spots: 15,
    description: "Peer code review session for improving code quality."
  }
]

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [showCalendar, setShowCalendar] = useState(false)

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container py-6 sm:py-8 md:py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-[280px_1fr]">
        {/* Sidebar with calendar */}
        <div className="space-y-4">
          <Button 
            className="w-full lg:hidden mb-4 flex items-center justify-between"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <CalendarDays className="h-4 w-4 mr-2" />
            {showCalendar ? 'Hide Calendar' : 'Show Calendar'}
          </Button>

          <div className={`bg-card rounded-lg p-4 border transition-all duration-300 ${
            showCalendar ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden lg:max-h-[400px] lg:opacity-100'
          }`}>
            <h2 className="font-semibold mb-2 text-sm sm:text-base">Event Calendar</h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-6">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Upcoming Events</h1>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1">
                Join us at our upcoming events and activities.
              </p>
            </div>
            <div className="relative w-full sm:max-w-[300px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                placeholder="Search events..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search events"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="transform transition-all hover:scale-102 flex flex-col h-full">
                <CardHeader className="flex-none p-4 sm:p-6 pb-2 sm:pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs sm:text-sm">
                      {event.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg sm:text-xl line-clamp-2">{event.title}</CardTitle>
                  <CardDescription className="mt-2">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-purple-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="h-4 w-4 text-purple-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{event.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-2 sm:pt-3 flex-grow flex flex-col">
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">
                    {event.description}
                  </p>
                  <Button
                    onClick={() => toast.success("Successfully Registered!")}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  >
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <p className="text-gray-500 dark:text-gray-400">No events found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

