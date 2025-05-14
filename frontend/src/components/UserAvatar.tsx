import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function UserAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <Avatar className="w-12 h-12 shadow-md">
      <AvatarImage src="" alt={name} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  )
}
