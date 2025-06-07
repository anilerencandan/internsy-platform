'use client'
import { formatDate } from "@/lib/ContentTypes"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { Button } from "../ui/button"
import ContentCard from "./ContentCard"
import { Blog } from "@/models/Blogs"

interface BlogSectionProps {
    blogs: Blog[]
    slug: string
}

export default function BlogSection({blogs, slug}: BlogSectionProps) {
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

  return (
    <div className="relative w-full mx-auto ">
      <div className="relative">
        {/* Carousel container */}
        <div className="overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="grid grid-flow-col auto-cols-[75%] sm:auto-cols-[45%] md:auto-cols-[30%] lg:auto-cols-[23%] gap-4 px-4 ">
            {blogs.map((post) => (
              <ContentCard
                key={post.id}
                title={post.title}
                description={post.description}
                image={post.image_url}
                footer={formatDate(post.created_at.toString())}
                category={post.subject}
                type="blog"
              />
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          className={`hidden lg:block absolute top-1/2 -left-4 -translate-y-1/2 z-10 p-2 bg-background border shadow-md rounded-full ${
            prevDisabled ? "opacity-0 cursor-default" : "hover:bg-muted"
          } transition-opacity duration-200`}
          onClick={scrollPrev}
          disabled={prevDisabled}
          aria-label="Önceki"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          className={`hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10 p-2 bg-background border shadow-md rounded-full ${
            nextDisabled ? "opacity-0 cursor-default" : "hover:bg-muted"
          } transition-opacity duration-200`}
          onClick={scrollNext}
          disabled={nextDisabled}
          aria-label="Sonraki"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-200 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="flex justify-center mt-8">
        <Link href={`/kariyer-rehberi/${slug}`}>
          <Button className="flex items-center gap-2 group px-4 py-2">
            Daha Fazlasını Gör
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
