import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function UserAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <Avatar className="w-full h-full shadow-md">
      <AvatarImage src="" alt={name} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  )
}
