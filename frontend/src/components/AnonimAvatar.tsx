import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export function AnonimAvatar({ icon }: { icon?: React.ReactNode }) {
  return (
    <Avatar>
      <AvatarImage src="" alt="anonim"/>
      <AvatarFallback>{icon ?? "OE"}</AvatarFallback>
    </Avatar>
  );
}
