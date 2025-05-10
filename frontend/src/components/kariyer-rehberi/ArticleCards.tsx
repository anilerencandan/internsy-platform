import Image from "next/image"
import Link from "next/link"

interface ArticleCardProps {
  category: string
  title: string
  excerpt: string
  date: string
  imageSrc: string
  imageAlt: string
  slug: string
}

export function ArticleCard({ category, title, excerpt, date, imageSrc, imageAlt, slug }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
      <Link href={`/blog/${slug}`}>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="md:w-3/5 p-6">
            <div className="mb-2">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-full">
                {category}
              </span>
            </div>
            <h2 className="text-xl font-bold text-navy-800 mb-2">{title}</h2>
            <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
            <div className="mt-auto">
              <h3 className="text-navy-800 font-bold">internsy</h3>
              <p className="text-gray-500 text-sm">{date}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
