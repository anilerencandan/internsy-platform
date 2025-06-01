'use client'

import React, { useEffect, useState } from 'react'
import AnonimDropdown from '../forum-page/AnonimDropdown'
import { Button } from '../ui/button'
import { MessagesSquare, Plus } from 'lucide-react'
import { useNav } from '@/context/NavContext'
import Link from "next/link"
import { Users, Lock, Send, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import PostEkle from "@/components/topluluk-page/PostEkle";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { postCommunity } from '@/app/topluluk/postCommunity'
import { createBrowserClient } from '@supabase/ssr'

type Category = {
  id: string, 
  name: string
}

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function PostEkleSection() {
  const { show, height } = useNav()
  const stickyTop = show ? height : 0
  const [selectedCommunity, setSelectedCommunity] = useState("")
  const [content, setContent] = useState("")
  const [categories, setCategories] = useState<Category[]>([])
  const [open, setOpen] = useState(false)


  useEffect(() => {
    const fetcCategories = async () => {
      const {data, error } = await supabase.from('forum_categories').select('id, name') 
      if(!error && data) setCategories(data)
    } 

    fetcCategories()
  }, [])

  

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

      <PostEkle
        open={open}
        setOpen={setOpen}
        categories={categories} // Kendi veritabanından aldığın kategoriler
        postCommunity={postCommunity} // Kendi server action'ın
      />
    </>
  )
}
