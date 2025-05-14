"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { blogPosts, trainings, extras, formatDate } from "@/lib/ContentTypes"

export default function KariyerRehberi() {
  const [activeTab, setActiveTab] = useState("blog")

  // Get the first 4 items for each section
  const featuredBlogs = blogPosts.slice(0, 4)
  const featuredTrainings = trainings.slice(0, 4)
  const featuredExtras = extras.slice(0, 4)

  return (
    <div className="page-content mx-auto  py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Kariyer Rehberi</h1>

      {/* Mobil görünüm için tabs */}
      <div className="md:hidden">
        <Tabs defaultValue="blog" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="blog">Blog Yazıları</TabsTrigger>
            <TabsTrigger value="egitimler">Eğitimler</TabsTrigger>
            <TabsTrigger value="ekstralar">Ekstralar</TabsTrigger>
          </TabsList>

          <TabsContent value="blog">
            <SectionTitle title="Blog Yazıları" />
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
      </div>

      {/* Masaüstü görünüm için dikey sıralama */}
      <div className="hidden md:block space-y-16">
        <section>
          <SectionTitle title="Blog Yazıları" />
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
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  )
}

function BlogSection({ blogs }: { blogs: typeof blogPosts }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((post) => (
          <ContentCard
            key={post.id}
            title={post.title}
            description={post.description}
            image={post.image}
            footer={formatDate(post.date)}
            category={post.category}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/kariyer-rehberi/blog">
          <Button variant="outline" className="flex items-center gap-2">
            Daha Fazlasını Gör <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </>
  )
}

function EgitimlerSection({ trainings: trainingItems }: { trainings: typeof trainings }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trainingItems.map((egitim) => (
          <ContentCard
            key={egitim.id}
            title={egitim.title}
            description={egitim.description}
            image={egitim.image}
            footer={`Süre: ${egitim.duration}`}
            category={egitim.category}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/kariyer-rehberi/egitimler">
          <Button variant="outline" className="flex items-center gap-2">
            Daha Fazlasını Gör <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </>
  )
}

function EkstralarSection({ extras: extraItems }: { extras: typeof extras }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {extraItems.map((ekstra) => (
          <ContentCard
            key={ekstra.id}
            title={ekstra.title}
            description={ekstra.description}
            image={ekstra.image}
            footer={ekstra.type}
            category={ekstra.category}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/kariyer-rehberi/ekstralar">
          <Button variant="outline" className="flex items-center gap-2">
            Daha Fazlasını Gör <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </>
  )
}

interface ContentCardProps {
  title: string
  description: string
  image: string
  footer: string
  category: string
}

function ContentCard({ title, description, image, footer, category }: ContentCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <div className="relative w-full h-40">
        <div className="absolute top-2 right-2 z-10">
          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">{category}</span>
        </div>
        <Image src={image || "/internsy-logo.svg"} alt={title} fill className="object-cover rounded-t-lg" />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto text-sm text-muted-foreground">{footer}</CardFooter>
    </Card>
  )
}
