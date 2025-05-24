"use client"

import { useCallback, useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ArrowRight, Calendar, Clock, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import { blogPosts, trainings, extras, formatDate } from "@/lib/ContentTypes"


export default function KariyerRehberi() {
  const [activeTab, setActiveTab] = useState("blog")

  

  // Get the first 4 items for each section
  const featuredBlogs = blogPosts.slice(0, 12)
  const featuredTrainings = trainings.slice(0, 12)
  const featuredExtras = extras.slice(0, 12)

  return (
    <div className="page-content mx-auto  py-8">
      <h1 className="text-3xl font-bold text-center mb-8 px-4">Kariyer Rehberi</h1>

      {/* Mobil görünüm için tabs */}
      {/* <div className="md:hidden">
        <Tabs  defaultValue="blog" value={activeTab} onValueChange={setActiveTab}>
          <div className="sm:px-0 px-4">
          <TabsList className="grid w-full grid-cols-3 ">
            <TabsTrigger value="blog">Blog Yazıları</TabsTrigger>
            <TabsTrigger value="egitimler">Eğitimler</TabsTrigger>
            <TabsTrigger value="ekstralar">Ekstralar</TabsTrigger>
          </TabsList>
          </div>

          <TabsContent  value="blog">
            <SectionTitle  title="Blog Yazıları" />
            <BlogSection blogs={featuredBlogs} />
          </TabsContent>

          <TabsContent value="egitimler">
            <SectionTitle title="Eğitimler" />
            <EgitimlerSection trainings={featuredTrainings} />
          </TabsContent>

          <TabsContent value="ekstralar">
            <SectionTitle title="Ekstralar" />
            <EkstralarSection extras={featuredExtras} />
          </TabsContent>
        </Tabs>
      </div> */}

      {/* Masaüstü görünüm için dikey sıralama */}
      <div className="block space-y-16">
        <section>
          <SectionTitle  title="Blog Yazıları" />
          <BlogSection blogs={featuredBlogs} />
        </section>

        <section>
          <SectionTitle title="Eğitimler" />
          <EgitimlerSection trainings={featuredTrainings} />
        </section>

        <section>
          <SectionTitle title="Ekstralar" />
          <EkstralarSection extras={featuredExtras} />
        </section>
      </div>
    </div>
  )
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between mb-6 px-4">
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  )
}

function BlogSection({ blogs }: { blogs: typeof blogPosts }) {
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
                image={post.image}
                footer={formatDate(post.date)}
                category={post.category}
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
        <Link href="/kariyer-rehberi/blog">
          <Button className="flex items-center gap-2 group px-4 py-2">
            Daha Fazlasını Gör
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  )
}


function EgitimlerSection({ trainings: trainingItems }: { trainings: typeof trainings }) {
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
            {trainingItems.map((post) => (
              <ContentCard
                key={post.id}
                title={post.title}
                description={post.description}
                image={post.image}
                footer={formatDate(post.date)}
                category={post.category}
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
        <Link href="/kariyer-rehberi/egitimler">
          <Button className="flex items-center gap-2 group px-4 py-2">
            Daha Fazlasını Gör
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

function EkstralarSection({ extras: extraItems }: { extras: typeof extras }) {
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
            {extraItems.map((post) => (
              <ContentCard
                key={post.id}
                title={post.title}
                description={post.description}
                image={post.image}
                footer={formatDate(post.date)}
                category={post.category}
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
        <Link href="/kariyer-rehberi/egitimler">
          <Button className="flex items-center gap-2 group px-4 py-2">
            Daha Fazlasını Gör
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

interface ContentCardProps {
  title: string
  description: string
  image: string
  footer: string
  category: string
  type?: "blog" | "training" | "extra"
}

export function ContentCard({ title, description, image, footer, category, type = "blog" }: ContentCardProps) {
  // Different icon based on content type
  const getIcon = () => {
    switch (type) {
      case "blog":
        return <div className="flex items-center gap-x-2 text-xs"><BookOpen className="h-4 w-4 mr-1" /> 5 dk okuma suresi</div>
      case "training":
        return <Clock className="h-4 w-4 mr-1" />
      case "extra":
        return <Calendar className="h-4 w-4 mr-1" />
      default:
        return null
    }
  }

  return (
    <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 ">
      <div className="relative w-full pt-[60%]">
        <Badge className="absolute top-3 right-3 z-10">{category}</Badge>
        <div className="absolute inset-0 overflow-hidden shadow-md">
          <Image
            src={"/kariyer-rehberi-sample.jpg"}
            alt={title}
            width={400}
            height={300}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      <CardHeader className="flex-grow p-4">
        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">{title}</CardTitle>
        <CardDescription className="line-clamp-3 mt-2">{description}</CardDescription>
      </CardHeader>

      <CardFooter className="text-sm text-muted-foreground border-t pt-3 flex items-center p-4">
        {getIcon()}
        {footer}
      </CardFooter>
    </Card>
  )
}

