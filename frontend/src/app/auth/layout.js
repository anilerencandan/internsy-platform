// src/app/auth/layout.js
export const metadata = {
    title: 'Internsy | Auth',
  }
  
  export default function AuthLayout({ children }) {
    return (
      <html>
        <body className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            {children}
          </div>
        </body>
      </html>
    )
  }
  