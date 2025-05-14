import React from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'



const companyInterns = 
  {
    name: "BSH",
    linkedinCompanyId: "5811",
  }

  interface StajIlanProps {
    name?: string;
    linkedinCompanyId?: string;
  }


export default function StajIlan({name, linkedinCompanyId}: StajIlanProps) {
    const url = `https://www.linkedin.com/jobs/search/?f_C=${companyInterns.linkedinCompanyId}&keywords=intern`;
  return (
    <Link
              key={linkedinCompanyId ?? companyInterns.linkedinCompanyId}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-gray-100 border border-gray-300 rounded-lg p-4 hover:shadow-md transition"
            >
              <div>
                <h2 className="font-semibold text-lg">{name ?? companyInterns.name}</h2>
                <p className="text-sm text-gray-600">
                  Staj ilanlarını LinkedIn’de gör
                </p>
              </div>
              <ExternalLink size={18} className="text-primary" />
            </Link>
  )
}
