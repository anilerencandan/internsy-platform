import React from "react";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { CircleCheck, ExternalLink } from "lucide-react";
import Link from "next/link";
import CompanyTabs from "@/components/company-page/CompanyTabs";

const companyInterns = [
  {
    name: "BSH",
    linkedinCompanyId: "5811",
  },
];

export default function StajIlanlariPage() {
  return (
    <div className="page">
      {/* Banner + Şirket Bilgileri */}
      <div className='flex flex-col gap-y-6'>
        <div className='relative min-h-[96px]'>
          <Image src={'/images/google-kapak.jpeg'} fill className='object-cover object-center' alt={'google-kapak'} />
          <div className='absolute -bottom-4 left-4 bg-white border border-gray-300 rounded-md overflow-hidden'>
            <FaGoogle className='p-2' size={48} />
          </div>
        </div>

        <div className='flex flex-col gap-y-1 px-4'>
          <h3 className='text-2xl font-semibold'>Google</h3>
          <h4 className='text-sm text-gray-700 flex gap-x-2 items-center'><CircleCheck size={16} /> Onaylı Şirket</h4>
          <div className='grid grid-cols-2 items-center gap-x-4 text-sm font-semibold py-4'>
            <button className='border border-black p-2 rounded-lg'>Takip Et</button>
            <button className='border border-black p-2 rounded-lg text-white bg-black'>Görüş Ekle</button>
          </div>
        </div>

        {/* Tıklanabilir Sekmeler */}
        <CompanyTabs />
      </div>
      
      {/* Staj İlanları */}
      <div className="p-4 flex flex-col gap-y-4">
        <h1 className="text-2xl font-bold mb-2">Staj İlanları</h1>

        {companyInterns.map((company) => {
          const url = `https://www.linkedin.com/jobs/search/?f_C=${company.linkedinCompanyId}&keywords=intern`;

          return (
            <Link
              key={company.linkedinCompanyId}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-gray-300 rounded-lg p-4 hover:shadow-md transition"
            >
              <div>
                <h2 className="font-semibold text-lg">{company.name}</h2>
                <p className="text-sm text-gray-600">
                  Staj ilanlarını LinkedIn’de gör
                </p>
              </div>
              <ExternalLink size={18} className="text-primary" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}