import Link from 'next/link'
import Image from 'next/image'
import { BellIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={36}
            priority
          />
        </Link>

        {/* Menü */}
        <ul className="flex space-x-8 text-sm font-medium text-gray-800">
          {[
            { label: 'Community', href: '/community', desc: 'Connect anonymously with professionals about work, pay, life and more.' },
            { label: 'Jobs', href: '/jobs', desc: "Millions of jobs. Search by what matters to you and find the one that's right for you." },
            { label: 'Companies', href: '/companies', desc: 'Read anonymous reviews on over 600,000 companies worldwide.' },
            { label: 'Salaries', href: '/salaries', desc: 'Get a free, personalized salary estimate and compare with millions of salaries.' },
            { label: 'For Employers', href: '/employers', desc: null }
          ].map(({ label, href, desc }) => (
            <li key={label} className="relative group">
              <Link href={href} className="hover:text-black">
                {label}
              </Link>
              {desc && (
                <div className="absolute left-0 mt-2 w-60 p-4 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                  <h4 className="text-sm font-semibold">{label}</h4>
                  <p className="text-xs text-gray-600 mt-1">{desc}</p>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Sağ Butonlar */}
        <div className="flex items-center space-x-4">
          <button aria-label="Notifications">
            <BellIcon className="h-6 w-6 text-gray-600 hover:text-black" />
          </button>
          <Link
            href="/auth/login"
            className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-green-600"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  )
}
