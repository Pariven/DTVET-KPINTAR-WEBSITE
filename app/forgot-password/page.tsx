"use client"

import { useState } from "react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    
    try {
      console.log('🔄 Sending forgot password request for:', email);
      
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      
      console.log('📧 Forgot password response status:', res.status);
      
      const data = await res.json()
      console.log('📧 Forgot password response data:', data);
      
      if (res.ok) {
        setStatus("✅ If an account with that email exists, a reset link has been sent to your inbox. Please check your email (including spam folder).")
        setEmail("") // Clear the form
      } else {
        setStatus(`❌ ${data.error || "Something went wrong. Please try again."}`)
      }
    } catch (err) {
      console.error('❌ Forgot password error:', err);
      setStatus("❌ Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-8 bg-white/10 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Forgot Password</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2">Email address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-white/20 border border-white/30 text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded bg-[#F4BB44] hover:bg-[#E5A63D] text-black font-bold"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
        {status && (
          <div className={`mt-6 p-4 rounded-lg text-sm ${
            status.includes('✅') 
              ? 'bg-green-500/20 border border-green-500/30 text-green-100' 
              : 'bg-red-500/20 border border-red-500/30 text-red-100'
          }`}>
            {status}
          </div>
        )}
      </div>
    </div>
  )
}
