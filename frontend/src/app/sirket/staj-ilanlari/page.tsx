import React from 'react'
import Image from 'next/image'
import { FaGoogle } from 'react-icons/fa'
import { CircleCheck, Search, Settings2, SquareArrowOutUpRight, Star } from 'lucide-react'
import CompanyPost from '@/components/company-page/CompanyPost'
import SortDropdown from '@/components/company-page/SortDropdown'
import RatingStars from '@/components/company-page/RatingStars'
import CompanyTabs from '@/components/company-page/CompanyTabs'
import MulakatlarSection from '@/components/company-page/MulakatlarSection'
import OverviewSection from '@/components/company-page/OverviewSection'
import StajIlanSection from '@/components/company-page/StajIlanSection'
import StajIlanlarCard from '@/components/sirketler-page/StajIlanlarCard'

export default function Sirket() {
  return (
      <StajIlanlarCard/>
  )
}