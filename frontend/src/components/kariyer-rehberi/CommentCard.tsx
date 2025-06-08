import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function CommentCard() {
  return (
    <div className="flex gap-3">
      <Avatar className="w-10 h-10">
        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Commenter" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <div className="font-medium">Andıç</div>
            <div className="text-xs text-gray-500">2 Gün önce</div>
          </div>
          <p className="text-sm">
          Daha kötüsünü görmedim.
          </p>
        </div>
        <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
          <button className="hover:text-blue-600">Beğen (12)</button>
          <button className="hover:text-blue-600">Yanıtla</button>
        </div>
      </div>
    </div>
  )
}
