"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { useEffect, useRef } from 'react'

const galleryImages = [
  {
    title: "web design 2025",
    src: "/web%20design.jpg",
  },
  {
    title: "Code Workshop",
    src: "/WhatsApp%20Image%202025-02-18%20at%2014.33.13_d43f8266.jpg",
  },
  {
    title: "Networking Mixer",
    src: "/placeholder.svg",
  },
  {
    title: "Tech Meetup",
    src: "/placeholder.svg",
  },
]

export default function GalleryPage() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, offsetWidth, scrollWidth } = carouselRef.current
        const newScrollLeft = scrollLeft + offsetWidth
        if (newScrollLeft >= scrollWidth) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          carouselRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' })
        }
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container py-12 mx-auto">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Event Gallery</h1>
          <p className="text-gray-500 dark:text-gray-400">Take a look at our past events and activities.</p>
        </div>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent ref={carouselRef}>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-0">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <h3 className="text-white font-semibold">{image.title}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

