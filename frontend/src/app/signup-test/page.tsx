import { login, signup } from './action'

export default function LoginPage() {
  return (
    <div className="space-y-8 max-w-md mx-auto p-4">
      {/* Giriş Formu */}
      <form action={login} className="space-y-4 border p-4 rounded-md shadow-sm">
        <h2 className="text-lg font-semibold">Giriş Yap</h2>
        <div>
          <label htmlFor="login-email">Email:</label>
          <input
            id="login-email"
            name="email"
            type="email"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="login-password">Şifre:</label>
          <input
            id="login-password"
            name="password"
            type="password"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Giriş Yap
        </button>
      </form>

      {/* Kayıt Formu */}
      <form action={signup} className="space-y-4 border p-4 rounded-md shadow-sm">
        <h2 className="text-lg font-semibold">Kayıt Ol</h2>
        <div>
          <label htmlFor="signup-email">Email:</label>
          <input
            id="signup-email"
            name="email"
            type="email"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="signup-fullname">Ad Soyad:</label>
          <input
            id="signup-fullname"
            name="fullname"
            type="text"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="signup-university">Üniversite:</label>
          <input
            id="signup-university"
            name="university"
            type="text"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="signup-password">Şifre:</label>
          <input
            id="signup-password"
            name="password"
            type="password"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Kayıt Ol
        </button>
      </form>
    </div>
  )
}