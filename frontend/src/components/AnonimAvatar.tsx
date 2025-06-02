import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export function AnonimAvatar({ icon, color }: { icon?: React.ReactNode, color?:string }) {
  return (
    <Avatar>
      <AvatarImage src="" alt="anonim"/>
      <AvatarFallback style={{ backgroundColor: color ?? "#ddd5", color: "#222" }}>
        {icon ?? "OE"}
      </AvatarFallback>
      </Avatar>
  );
}
