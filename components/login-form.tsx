"use client"

import type React from "react"

import { useState } from "react"
import { useAuthStore } from "@/lib/store"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    rememberMe: false,
  })

  const router = useRouter()

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev: typeof formData) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Basic validation
    if (!formData.email || !formData.password) {
      alert("Please fill in all required fields")
      setIsLoading(false)
      return
    }

    if (!isLogin && (!formData.firstName || !formData.lastName)) {
      alert("Please fill in your first and last name")
      setIsLoading(false)
      return
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      setIsLoading(false)
      return
    }

    try {
      if (isLogin) {
        // Login
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message);
        }

        const data = await response.json();
        if (!data.token) {
          throw new Error('No token received from server');
        }
        
        // Store token in both localStorage and cookie
        useAuthStore.getState().setAuth(data.token, data.user);
        
        // Set client-side cookie (non-httpOnly)
        document.cookie = `token=${data.token}; path=/; max-age=86400; samesite=lax`;
        
        // Set additional localStorage keys that dashboard expects
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', data.user.email);
        localStorage.setItem('userName', data.user.name);
        
        console.log('Login successful, token stored:', data.token);
        console.log('Cookies after login:', document.cookie);
        console.log('localStorage after login:', localStorage.getItem('token'));
        
        // Small delay to ensure cookies are set
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Check if there's a redirect URL stored
        const redirectUrl = sessionStorage.getItem('redirectAfterLogin');
        if (redirectUrl) {
          sessionStorage.removeItem('redirectAfterLogin');
          console.log('Redirecting to:', redirectUrl);
          window.location.href = redirectUrl;
        } else {
          // Redirect to dashboard after login using window.location for hard refresh
          console.log('Redirecting to dashboard...');
          window.location.href = '/dashboard';
        }
      } else {
        // Register
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            password: formData.password,
          }),
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message);
        }

        // Registration succeeded — automatically log the user in
        const loginResponse = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        if (!loginResponse.ok) {
          // If auto-login fails, fallback to asking the user to login manually
          const err = await loginResponse.json().catch(() => ({}));
          alert('Registration successful, but auto-login failed: ' + (err.message || 'Please login manually.'));
          setIsLogin(true);
          setFormData({
            ...formData,
            password: '',
            confirmPassword: '',
          });
        } else {
          const data = await loginResponse.json();
          // Persist auth and cookie on client-side store for immediate use
          useAuthStore.getState().setAuth(data.token, data.user);
          // Mirror the token in a client cookie (server already sets httpOnly cookie)
          document.cookie = `token=${data.token}; path=/; max-age=86400; samesite=lax`;
          
          // Set additional localStorage keys that dashboard expects
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userEmail', data.user.email);
          localStorage.setItem('userName', data.user.name);

          // Small delay to ensure cookies are set
          await new Promise(resolve => setTimeout(resolve, 100));

          // Redirect to dashboard after successful auto-login using hard refresh
          console.log('Registration successful, redirecting to dashboard...');
          window.location.href = '/dashboard';
        }
      }
    } catch (error) {
      console.error("Authentication failed:", error)
      alert(error instanceof Error ? error.message : "Authentication failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl"
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Left Side - Branding */}
            <motion.div
              className="bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-800 p-8 lg:p-12 flex flex-col justify-center text-white relative overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Background image with overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: "url('/login-background.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-cyan-500/70 to-blue-800/80"></div>

              <div className="relative z-10">
                {/* Logo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-8"
                >
                  <div className="flex items-center mb-4">
                    <Image
                      src="/dtvet-logo.png"
                      alt="DTVET - Digital TVET Malaysia"
                      width={400}
                      height={400}
                      className="h-32 w-auto object-contain"
                      priority
                    />
                  </div>
                </motion.div>

                {/* Welcome Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-barlow">Welcome to DTVET</h2>
                  <p className="text-lg leading-relaxed font-barlow opacity-90">
                    Empowering ASEAN's Future Workforce with Digital TVET Certifications. Join thousands of
                    professionals advancing their careers with globally recognized certifications.
                  </p>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-8 space-y-3"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F4BB44] rounded-full"></div>
                    <span className="font-barlow">50+ Certification Programs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F4BB44] rounded-full"></div>
                    <span className="font-barlow">Industry-Leading Partners</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F4BB44] rounded-full"></div>
                    <span className="font-barlow">Global Recognition</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-8 lg:p-12 bg-white/95 backdrop-blur-sm"
            >
              <div className="max-w-md mx-auto">
                {/* Form Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center mb-8"
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2 font-barlow">
                    {isLogin ? "USER LOGIN" : "CREATE ACCOUNT"}
                  </h3>
                  <p className="text-gray-600 font-barlow">
                    {isLogin ? "Sign in to access your dashboard" : "Join us to start your certification journey"}
                  </p>
                </motion.div>

                {/* Form */}
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <AnimatePresence mode="wait">
                    {!isLogin && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 gap-4"
                      >
                        <div>
                          <Label htmlFor="firstName" className="text-gray-700 font-barlow">
                            First Name
                          </Label>
                          <div className="relative mt-1">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <Input
                              id="firstName"
                              type="text"
                              placeholder="Enter your first name"
                              value={formData.firstName}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("firstName", e.target.value)}
                              className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 font-barlow"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-gray-700 font-barlow">
                            Last Name
                          </Label>
                          <div className="relative mt-1">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <Input
                              id="lastName"
                              type="text"
                              placeholder="Enter your last name"
                              value={formData.lastName}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("lastName", e.target.value)}
                              className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 font-barlow"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-barlow">
                      Email Address
                    </Label>
                    <div className="relative mt-1">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)}
                        className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 font-barlow"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <Label htmlFor="password" className="text-gray-700 font-barlow">
                      Password
                    </Label>
                    <div className="relative mt-1">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("password", e.target.value)}
                        className="pl-10 pr-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 font-barlow"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password for Sign Up */}
                  <AnimatePresence mode="wait">
                    {!isLogin && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Label htmlFor="confirmPassword" className="text-gray-700 font-barlow">
                          Confirm Password
                        </Label>
                        <div className="relative mt-1">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                          <Input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("confirmPassword", e.target.value)}
                            className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 font-barlow"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Remember Me & Forgot Password */}
                  {isLogin && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="rememberMe"
                          checked={formData.rememberMe}
                          onCheckedChange={(checked: boolean | 'indeterminate') => handleInputChange("rememberMe", checked as boolean)}
                        />
                        <Label htmlFor="rememberMe" className="text-sm text-gray-600 font-barlow">
                          Remember me
                        </Label>
                      </div>
                      <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 font-barlow">
                        Forgot password?
                      </Link>
                    </div>
                  )}

                  {/* Submit Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 font-barlow"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          {isLogin ? "Signing In..." : "Creating Account..."}
                        </div>
                      ) : isLogin ? (
                        "LOGIN"
                      ) : (
                        "CREATE ACCOUNT"
                      )}
                    </Button>
                  </motion.div>

                  {/* Toggle Form */}
                  <div className="text-center">
                    <p className="text-gray-600 font-barlow">
                      {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                      <button
                        type="button"
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-blue-600 hover:text-blue-800 font-semibold font-barlow"
                      >
                        {isLogin ? "Create account here" : "Sign in here"}
                      </button>
                    </p>
                  </div>
                </motion.form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
