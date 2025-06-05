import Company from '@/models/Company'
import { Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import StajIlan from '../company-page/StajIlanCard'

interface CompanyCardProps {
    company: Company,
    jobs: {
        title: string,
        link: string
    }[]
}

export default function CompanyJobsCard({company}: CompanyCardProps) {
  return (
        <Link
          key={company.id}
          href={`/mulakatlar/${company.id}`}
          className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12  rounded-lg flex items-center justify-center text-xl font-bold flex-shrink-0`}
            >
              {company.name[0]}
            </div>
            <div>
              <h3 className="font-medium">{company.name}</h3>
              <div className="flex items-center text-sm text-gray-600">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1">{company.average_rating}</span>
                </div>
                <span className="mx-1">•</span>
                <span>{company.reviews_count} değerlendirme</span>
              </div>
            </div>
          </div>
          <StajIlan/>
          
        </Link>
  )
}
