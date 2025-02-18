import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Users, Calendar, BookOpen, Trophy, Laptop } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Coding Workshops",
      description: "Learn from industry experts in hands-on coding sessions.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Networking",
      description: "Connect with like-minded individuals and professionals.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Regular Events",
      description: "Attend tech talks, workshops, and social gatherings.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Learning Resources",
      description: "Access curated learning materials and tutorials.",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Hackathons",
      description: "Participate in exciting coding competitions.",
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Project Collaboration",
      description: "Work on real projects with other members.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Join StackSphere?</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Discover the benefits of being part of our vibrant tech community.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {features.map((feature, i) => (
            <Card key={i} className="transform transition-all hover:scale-105">
              <CardHeader>
                <div className="p-2 w-fit rounded-lg bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900">
                  {feature.icon}
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

