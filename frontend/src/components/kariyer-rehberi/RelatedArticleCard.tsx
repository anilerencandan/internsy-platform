import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function RelatedArticleCard() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Image
          src="/placeholder.svg?height=150&width=300"
          alt="Related Article"
          width={300}
          height={150}
          className="w-full h-32 object-cover"
        />
        <div className="p-4">
          <h4 className="font-bold mb-1 line-clamp-2">Teknolojinin Gelişmesi Ersin Korkutu Etkileyecek mi?</h4>
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <span>10 Mayıs, 2025</span>
            <Separator orientation="vertical" className="mx-2 h-3" />
            <span>6 dakika okuma süresi</span>
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="w-6 h-6">
              <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Author" />
              <AvatarFallback>OE</AvatarFallback>
            </Avatar>
            <span className="text-xs">Onur Er</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}