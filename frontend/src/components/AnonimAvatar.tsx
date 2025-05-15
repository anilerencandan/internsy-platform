import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BrainCircuit, Briefcase, Code, ShieldCheck, User2 } from "lucide-react"

// ikon eşlemesi:
const iconMap: Record<string, JSX.Element> = {
  BrainCircuit: <BrainCircuit className="w-8 h-8 text-gray-600" />,
  Code: <Code className="w-8 h-8 text-gray-600" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-gray-600" />,
  Briefcase: <Briefcase className="w-8 h-8 text-gray-600" />
};

export function AnonimAvatar({ icon }: { icon?: React.ReactNode }) {
  return (
    <Avatar>
      <AvatarImage src="" alt="anonim"/>
      <AvatarFallback>{icon ?? "OE"}</AvatarFallback>
    </Avatar>
  );
}
