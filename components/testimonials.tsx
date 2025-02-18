import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function Testimonials() {
  const testimonials = [
    {
      quote: "Being part of StackSphere has accelerated my learning journey tremendously. The community here is incredibly supportive.",
      author: "Kovendhan",
      role: "Software Developer",
      avatar: "/placeholder.svg",
    },
    {
      quote: "The workshops and tech talks have helped me stay up-to-date with the latest technologies. Great learning environment!",
      author: "Surya",
      role: "Full Stack Developer",
      avatar: "/placeholder.svg",
    },
    {
      quote: "I've made great connections and learned valuable skills through the workshops. The mentorship program is outstanding.",
      author: "Bejisto",
      role: "Cloud Engineer",
      avatar: "/placeholder.svg",
    },
  ]

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
          <div className="space-y-2">
            <Badge className="mb-2">
              Testimonials
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl">What Our Members Say</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 text-sm sm:text-base md:text-lg dark:text-gray-400">
              Hear from our community members about their experiences.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Card 
              key={i} 
              className="transform transition-all hover:scale-105 flex flex-col h-full"
            >
              <CardContent className="p-4 sm:p-6 space-y-4 flex flex-col justify-between h-full">
                <p className="text-gray-500 dark:text-gray-400 italic text-sm sm:text-base">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4 pt-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none mb-1">{testimonial.author}</p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

