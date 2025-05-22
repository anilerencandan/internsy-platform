import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

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
  // Her bölüm için sadece 4 kart gösteriyoruz
  const displayedItems = items.slice(0, 4)

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-between items-center">
        {/* <h2 className="text-2xl font-semibold py-4">{title}</h2> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayedItems.map((item) => (
          <Card key={item.slug} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="mb-2">{item.title}</CardTitle>
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

      <div className="items-center flex justify-center border-b border-gray-400">
        <Link href={`/profil/sosyal/company`}>
          <Button variant="link" className="flex items-center gap-1">
          <div className="flex justify-center items-center mb-2 mt-2">
            <div className=" w-fit border border-white p-2 rounded-md bg-primary">
              <button className="text-white hover:text-gray-100 font-medium">Daha Fazla Göster</button>
            </div>
          </div>
          </Button>
        </Link>
      </div>
    </div>
  )
}
