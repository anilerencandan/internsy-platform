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
    <div className="border border-gray-300 rounded-lg p-4  bg-gray-50">
      <div className="pt-0 pb-2  ">
        <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-full ">
          <Button variant="outline" className="w-full justify-between text-sm px-4 py-2 hover:bg-black hover:text-white duration-0 transition-none">
            <span>LinkedIn'de Staj İlanları</span>
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </div>

      <div className=" pt-0">
        <Link href={kariyerUrl} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button variant="outline" className="w-full justify-between text-sm px-4 py-2 hover:bg-black hover:text-white duration-0 transition-none">
            <span>Kariyer.net'te İlanları Gör</span>
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}