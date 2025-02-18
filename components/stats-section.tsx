export function StatsSection() {
  const stats = [
    { number: "500+", label: "Active Members" },
    { number: "50+", label: "Events Hosted" },
    { number: "100+", label: "Projects Completed" },
    { number: "20+", label: "Industry Partners" },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                {stat.number}
              </h3>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

