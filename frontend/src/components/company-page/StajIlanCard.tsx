import React from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { CardFooter } from "@/components/ui/card"

const companyInterns = {
  name: "BSH",
  linkedinCompanyId: "5811",
  kariyerNetCompanyId: "bsh", // Örnek ID, kariyer.net URL mantığına göre düzenle
}

interface StajIlanProps {
  name?: string;
  linkedinCompanyId?: string;
  kariyerNetCompanyId?: string;
}

export default function StajIlan({ name, linkedinCompanyId, kariyerNetCompanyId }: StajIlanProps) {
  const linkedinUrl = `https://www.linkedin.com/jobs/search/?f_C=${linkedinCompanyId ?? companyInterns.linkedinCompanyId}&keywords=intern`;
  const kariyerUrl = `https://www.kariyer.net/is-ilanlari/${kariyerNetCompanyId ?? companyInterns.kariyerNetCompanyId}`;

  return (
    <div className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/60 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="space-y-3">
        <div>
          <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="block">
            <Button
              variant="outline"
              className="w-full justify-between text-sm px-5 py-3 h-auto border-blue-200 bg-blue-50/50 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center group-hover:bg-white transition-colors duration-200">
                  <span className="text-white text-xs font-bold group-hover:text-blue-600">in</span>
                </div>
                <span className="font-medium">LinkedIn'de Staj İlanları</span>
              </div>
              <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
            </Button>
          </Link>
        </div>

        <div>
          <Link href={kariyerUrl} target="_blank" rel="noopener noreferrer" className="block">
            <Button
              variant="outline"
              className="w-full justify-between text-sm px-5 py-3 h-auto border-purple-200 bg-purple-50/50 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-purple-700 rounded-sm flex items-center justify-center group-hover:bg-white transition-colors duration-200">
                  <span className="text-white text-xs font-bold group-hover:text-purple-600">K</span>
                </div>
                <span className="font-medium">Kariyer.net'te İlanları Gör</span>
              </div>
              <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}