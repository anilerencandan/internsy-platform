'use client'

import React, { useState } from 'react'
import AnonimDropdown from '../forum-page/AnonimDropdown'
import { Button } from '../ui/button'
import { MessagesSquare, Plus } from 'lucide-react'
import { useNav } from '@/context/NavContext'
import Link from "next/link"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

export default function PostEkleSection() {
  const { show, height } = useNav()
  const stickyTop = show ? height : 0
  const [open, setOpen] = useState(false)
  const [selectedCommunity, setSelectedCommunity] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = () => {
    if (content && selectedCommunity) {
      alert("Gönderiniz paylaşılmıştır.")
      setOpen(false)
      setContent("")
      setSelectedCommunity("")
    }
  }

  return (
    <>
      <div className='lg:col-span-3 sm:col-span-4 hidden sm:flex flex-col gap-y-4 text-sm'>
        <div className='bg-gray-50 rounded-lg border border-gray-300 p-1 flex flex-col gap-y-4' style={{ top: stickyTop }}>
          <AnonimDropdown />
          <div className='flex flex-col items-center pb-8'>
            <Button onClick={() => setOpen(true)} className='flex items-center gap-x-1 bg-black text-white px-4 py-2 rounded-full'>
              Post Paylaş <Plus />
            </Button>
          </div>
        </div>

        <div className="border-t-[1px] border-gray-300"></div>

        <div className='flex flex-col gap-y-4'>
          <h3 className='text-xl font-bold'>Topluluklarım</h3>
          <Link href="/topluluklari-kesfet">
            <Button className='flex items-center gap-x-2 px-4 py-2 border w-fit rounded-lg bg-white text-black hover:bg-black hover:text-white'>
              <MessagesSquare size={20} />
              <p className='font-semibold text-sm'>Toplulukları Keşfet</p>
            </Button>
          </Link>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Anonim Post Paylaş</DialogTitle>
          </DialogHeader>
          <p className='text-sm text-gray-600'>Paylaşımınız anonim olarak yapılacaktır.</p>
          <select
            value={selectedCommunity}
            onChange={(e) => setSelectedCommunity(e.target.value)}
            className="w-full border p-2 rounded text-sm"
          >
            <option value="">Topluluk Seçin</option>
            <option value="yazilim">Yazılım</option>
            <option value="tasarim">Tasarım</option>
            <option value="kariyer">Kariyer</option>
          </select>
          <Textarea
            placeholder="Ne paylaşmak istersin?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <DialogFooter>
            <Button onClick={handleSubmit}>Paylaş</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
