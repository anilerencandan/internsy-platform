'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

interface SocialItem {
  slug: string // ID yerine slug kullanıyoruz
  title: string
  description: string
  image: string
  date?: string
}

interface SocialSectionProps {
  title: string
  items: SocialItem[]
  type: "company" | "community" | "post"
}

export default function SocialSection({  items }: SocialSectionProps) {

  const [emblaRef, emblaApi] = useEmblaCarousel({
      loop: false,
      align: "start",
      dragFree: true,
      skipSnaps: true,
    })
  
    const [prevDisabled, setPrevDisabled] = useState(true)
    const [nextDisabled, setNextDisabled] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
  
    // Check buttons and update scroll progress
    const onScroll = useCallback(() => {
      if (!emblaApi) return
      const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
      setScrollProgress(progress)
      setPrevDisabled(!emblaApi.canScrollPrev())
      setNextDisabled(!emblaApi.canScrollNext())
    }, [emblaApi])
  
    // Carousel settings
    useEffect(() => {
      if (!emblaApi) return
      emblaApi.on("select", onScroll)
      emblaApi.on("scroll", onScroll)
      onScroll()
  
      return () => {
        emblaApi.off("select", onScroll)
        emblaApi.off("scroll", onScroll)
      }
    }, [emblaApi, onScroll])
  
    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
  
    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
  // Her bölüm için sadece 4 kart gösteriyoruz
  const displayedItems = items.slice(0, 8)

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-between items-center">
        {/* <h2 className="text-2xl font-semibold py-4">{title}</h2> */}
      </div>
      {/* grid grid-flow-col auto-cols-[75%]  lg:grid-cols-4  overflow-auto gap-4 */}
      <div className="overflow-hidden sm:px-4" ref={emblaRef}>
        <div className="grid grid-flow-col auto-cols-[75%] sm:auto-cols-[45%] md:auto-cols-[30%] lg:auto-cols-[23%] gap-4">

        {displayedItems.map((item) => (
          <Card key={item.slug} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="mb-2 line-clamp-2">{item.title}</CardTitle>
              <p className="text-muted-foreground line-clamp-2">{item.description}</p>
              {item.date && <p className="text-sm text-muted-foreground mt-2">{item.date}</p>}
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link href={`/profil/sosyal/company/${item.slug}`}>
                <Button variant="outline" size="sm">
                  Detayları Gör
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
        </div>
      </div>
      

      {/* Progress bar */}
      <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-200 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="flex justify-center my-4">
        <Link href="/profil/sosyal/company">
          <Button className="flex items-center gap-2 group px-4 py-2">
            Daha Fazlasını Gör
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
