
"use client"
export const dynamic = "force-dynamic";
export const dynamic = "force-dynamic";

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()
  const token = searchParams.get("token")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus(null)
    if (!token) {
      setStatus("Invalid or missing reset token.")
      return
    }
    if (newPassword !== confirmPassword) {
      setStatus("Passwords do not match.")
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus("Password reset successfully! Redirecting to login...")
        setTimeout(() => router.push("/login"), 2000)
      } else {
        setStatus(data.error || "Something went wrong.")
      }
    } catch (err) {
      setStatus("Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-8 bg-white/10 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Reset Password</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="newPassword" className="block mb-2">New Password</label>
            <input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              className="w-full p-3 rounded bg-white/20 border border-white/30 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block mb-2">Confirm New Password</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="w-full p-3 rounded bg-white/20 border border-white/30 text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded bg-[#F4BB44] hover:bg-[#E5A63D] text-black font-bold"
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
        {status && <div className="mt-4 text-center text-sm">{status}</div>}
      </div>
    </div>
  )
}
