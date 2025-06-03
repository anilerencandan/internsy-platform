import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Lock } from "lucide-react"
import AnonymousPostForm from "./AnonymousPostForm"

interface AnonymousPostDialogProps {
  open: boolean
  setOpen: (open: boolean) => void
  categories: Array<{ id: string; name: string }>
  postCommunity: (formData: FormData) => void
}

export default function AnonymousPostDialog({ open, setOpen, categories, postCommunity }: AnonymousPostDialogProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px] w-[90%] rounded-lg gap-4">
        <DialogHeader className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Lock className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-xl font-semibold">Anonim Post Paylaş</DialogTitle>
              <p className="text-sm text-gray-600">Paylaşımınız anonim olarak yapılacaktır.</p>
            </div>
          </div>
        </DialogHeader>

        <AnonymousPostForm
          categories={categories}
          postCommunity={postCommunity}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  )
}
