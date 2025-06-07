'use client'
import { BookOpen, Calendar, Clock } from "lucide-react"
import { Badge } from "../ui/badge"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import Image from "next/image"

interface ContentCardProps {
  title: string
  description: string
  image: string
  footer: string
  category: string
  type?: "blog" | "training" | "extra"
}



export default function ContentCard({ title, description, footer, category, type = "blog" }: ContentCardProps) {
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

