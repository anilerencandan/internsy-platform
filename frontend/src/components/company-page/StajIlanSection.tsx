import Link from 'next/link';   
import { ExternalLink } from 'lucide-react';
import React from 'react'
import StajIlanCard from './StajIlanCard';



export default function StajIlanSection() {
  return (
    <div>
        <div className="p-4 flex flex-col gap-y-4">
        <h1 className="text-2xl font-bold mb-2">Staj İlanları</h1>

        <StajIlanCard />
      </div>
    </div>
  )
}
