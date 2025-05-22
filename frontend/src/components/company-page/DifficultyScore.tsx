'use client'

import { Info } from "lucide-react"

type DifficultyScoreProps = {
  score: number
}

export default function DifficultyScore({ score }: DifficultyScoreProps) {
  const difficultyColor =
    score < 3 ? "text-green-600"
    : score < 4 ? "text-yellow-400"
    : "text-red-600"

  return (
    <div className="mb-3">
      <div className="flex items-baseline gap-2 font-sans">
        <span className={`text-5xl font-bold ${difficultyColor}`}>
          {score.toFixed(1)}
        </span>
        <div className="flex items-center">
          <span className="text-lg text-gray-600">/5 Mülakat zorluk seviyesi</span>
          <Info className="h-4 w-4 text-gray-400 ml-1" />
        </div>
      </div>
    </div>
  )
}