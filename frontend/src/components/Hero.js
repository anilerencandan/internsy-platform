'use client'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="flex-1 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 lg:px-8 py-20">
      {/* Sol Metin */}
      <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
        <h1 className="text-5xl font-extrabold text-green-600">
          Your work people are here
        </h1>
        <p className="text-lg text-gray-700">
          Connect anonymously with fellow interns about companies, salaries, interviews and more.
        </p>
        <div className="flex justify-center lg:justify-start space-x-4">
          <Link
            href="/auth/signup"
            className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700"
          >
            Continue with Email
            <div className="mt-8 space-y-3">
                <button className="w-full flex items-center justify-center space-x-2 border px-4 py-2 rounded-md hover:bg-gray-50">
                    <img src="/icons/google.svg" alt="Google" className="h-5 w-5" />
                    <span className="text-sm">Continue with Google</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 border px-4 py-2 rounded-md hover:bg-gray-50">
                    <img src="/icons/apple.svg" alt="Apple" className="h-5 w-5" />
                    <span className="text-sm">Continue with Apple</span>
                </button>
                </div>
                <p className="mt-4 text-xs text-gray-500">
                By continuing, you agree to our{' '}
                <Link href="/terms" className="underline">Terms of Use</Link> and{' '}
                <Link href="/privacy" className="underline">Privacy Policy</Link>.
            </p>

          </Link>
        </div>
      </div>
      {/* Sağ Placeholder */}
      <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
        {/* Şimdilik basit bir kutu */}
        <div className="w-80 h-60 bg-gray-100 rounded-lg animate-pulse" />
      </div>
    </section>
    
  )
  
}
