"use client";

import React from "react";
import Image from "next/image";
import { Ellipsis, HeartHandshake } from "lucide-react";
import { FaShare } from "react-icons/fa";
import SubratingBox from "@/components/company-page/SubratingBox";
import PostStars from "@/components/company-page/PostStars"; // yeni eklenen bileşen

export default function CompanyPost() {
  return (
    <div className="flex flex-col gap-y-4 py-4 border-b-[1px] border-gray-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-1 relative">
          <p className="text-base font-semibold">4.0</p>
          <PostStars value={4.7} />
          <SubratingBox />
        </div>

        <div className="flex items-center gap-x-2 text-sm">
          Ağustos 21, 2025 <Ellipsis />
        </div>
      </div>

      <div className="flex flex-col gap-y-2">
        <h3 className="text-lg font-bold">
          Google gerçekten çok kötü bir firma
        </h3>
        <div className="flex items-center gap-x-2">
          <Image
            src={"/images/avatar.jpg"}
            alt={"avatar"}
            width={48}
            height={48}
            className="w-8 h-8 rounded-full overflow-hidden object-cover object-center shadow-sm"
          />
          <p className="text-base font-semibold text-gray-600">
            Yazılım Mühendisi Stajyeri
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-2">
        <div className="flex flex-col gap-y-1 text-sm">
          <p className="text-green-600 font-bold text-base">Olumlu</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aut
            commodi. Mollitia quas facere aspernatur...
          </p>
        </div>

        <div className="flex flex-col gap-y-1 text-sm">
          <p className="text-red-600 font-bold text-base">Olumsuz</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aut
            commodi. Mollitia quas facere aspernatur...
          </p>
        </div>

        <div className="flex items-center justify-between pt-6 pb-4">
          <div className="flex gap-x-8 items-center text-sm text-gray-600">
            <button className="flex items-center gap-x-2">
              <HeartHandshake size={16} /> Yardımcı Oldu
            </button>
            <button className="flex items-center gap-x-2">
              <FaShare size={16} /> Paylaş
            </button>
          </div>
          <div className="flex items-center gap-x-2 text-sm font-semibold text-gray-600">
            <HeartHandshake fill="#b5e550" size={16} /> 3829
          </div>
        </div>
      </div>
    </div>
  );
}