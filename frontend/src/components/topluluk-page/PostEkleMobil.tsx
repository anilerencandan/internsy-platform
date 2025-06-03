// components/topluluk-page/PostEkleMobil.tsx
"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import AnonymousPostDialog from "./PostEkle";
import { CommunityType } from "@/models/Community";
import { postCommunity } from "@/app/topluluk/postCommunity";

interface PostEkleMobilProps {
  categories: CommunityType[];
  followedCommunities: CommunityType[];
  currentUserId: string;
}

export default function PostEkleMobil({
  categories,
  followedCommunities,
  currentUserId,
}: PostEkleMobilProps) {
  const [open, setOpen] = useState(false);


  return (
    <>
      {/* Mobilde görünecek yuvarlak buton */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-x-2 fixed bottom-6 right-6 z-50 sm:hidden bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
      >
        <Plus className="w-5 h-5" />Post Paylaş
      </button>

      {/* Anonim Post Ekle Modalı */}
      <AnonymousPostDialog
        open={open}
        setOpen={setOpen}
        categories={categories}
        postCommunity={postCommunity}
      />
    </>
  );
}
