"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import { Star } from "lucide-react";

// Dinamik import — SSR dışı kullanım için
const Rating = dynamic(
  () => import("react-rating") as Promise<{ default: ComponentType<Record<string, unknown>> }>,
  { ssr: false }
);

type PostStarsProps = {
  value: number;
  size?: number;
  color?: string;
  className?: string;
};

export default function PostStars({
  value,
  size = 16,
  color = "black",
  className = "",
}: PostStarsProps) {
  return (
    <div className={`flex items-center gap-x-1 ${className}`}>
      <Rating
        readonly
        initialRating={value}
        emptySymbol={<Star size={size} stroke={color} />}
        fullSymbol={<Star size={size} fill={color} stroke={color} />}
      />
    </div>
  );
}