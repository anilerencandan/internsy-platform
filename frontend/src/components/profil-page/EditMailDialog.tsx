'use client'

import { useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Edit } from "lucide-react";

export default function EmailPasswordDialog({ type }: { type: "email" | "password" }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Edit size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md w-[90%] rounded-lg">
        <DialogHeader>
          <DialogTitle>{type === "email" ? "Email adresini güncelle" : "Şifreyi güncelle"}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {type === "email" ? (
            <div>
              <Label>Yeni Email</Label>
              <Input
                type="email"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="ornek@example.com"
              />
            </div>
          ) : (
            <div className="space-y-2">
              <div>
                <Label>Mevcut Şifre</Label>
                <Input type="password" placeholder="********" />
              </div>
              <div>
                <Label>Yeni Şifre</Label>
                <Input
                  type="password"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Yeni Şifre"
                />
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="mt-4 flex items-center ">
          <Button className="w-fit px-4 py-2 bg-black text-white" type="submit" onClick={() => { setOpen(false); alert(`${type} güncellendi: ${value}`) }}>
            Kaydet
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
