"use client";

import dynamic from 'next/dynamic';
import { Star } from 'lucide-react';
import type { ComponentType } from 'react';

const ratingImport = () =>
  import('react-rating') as Promise<{ default: ComponentType<any> }>;

const Rating = dynamic(ratingImport, { ssr: false });

export default function RatingStars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-x-2 text-primary">
      <p className="text-4xl font-bold">{value}</p>
      <Rating
        readonly
        initialRating={value}
        emptySymbol={<Star size={20} stroke="#0a66c2" />}
        fullSymbol={<Star size={20} fill="#0a66c2" stroke="#0a66c2" />}
      />
    </div>
  );
}