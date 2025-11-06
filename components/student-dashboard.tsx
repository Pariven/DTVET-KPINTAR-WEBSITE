"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import { User, BookOpen, ShoppingCart, Settings, TrendingUp, Eye, EyeOff, Lock, ReceiptText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { useAuthStore } from "@/lib/store"

// Define a type for purchase receipts
interface PurchaseReceipt {
  id: string
  amount: number
  currency: string
  status: string
  items: string
  createdAt: string
  stripePaymentId: string | null
}

export default function StudentDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")
  const { cartItems } = useCart()
  const [purchaseHistory, setPurchaseHistory] = useState<PurchaseReceipt[]>([])
  const [purchaseLoading, setPurchaseLoading] = useState(false)
  const { token, user } = useAuthStore()

  // Mock user data
  const [userData, setUserData] = useState({
    name: "Loading...",
    email: "Loading...",
    avatar: "/placeholder.svg?height=100&width=100&text=JD",
    memberSince: "January 2024",
    totalCourses: 0,
    totalSpent: 0,
  })

  // Settings states
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false)
  const [newName, setNewName] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("english")

  useEffect(() => {
    // Simplified authentication check to prevent redirect loops
    const storedToken = localStorage.getItem("token")
    const userName = localStorage.getItem("userName") 
    const userEmail = localStorage.getItem("userEmail")
    const userLanguage = localStorage.getItem("userLanguage") || "english"

    console.log('🔍 Dashboard Auth Check:', {
      hasStoredToken: !!storedToken,
      hasUserName: !!userName,
      hasUserEmail: !!userEmail,
      storeToken: !!token,
      storeUser: !!user
    });

    // Primary authentication: token from localStorage or auth store
    const hasValidAuth = storedToken || (token && user)
    
    if (hasValidAuth) {
      setIsAuthenticated(true)
      
      // Use stored user data or fallback to store data
      const displayName = userName || user?.name || "User"
      const displayEmail = userEmail || user?.email || ""
      
      setUserData((prev) => ({
        ...prev,
        name: displayName,
        email: displayEmail,
      }))
      setNewName(displayName)
      setSelectedLanguage(userLanguage)
      
      // Fetch payment history if we have a token
      if (storedToken || token) {
        fetchPaymentHistory()
      }
    } else {
      console.log('❌ No valid authentication, redirecting to login');
      // Give middleware a chance to handle this first
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
      }, 100);
    }
    setLoading(false)
  }, [token, user])

  // Fetch payment history from API
  const fetchPaymentHistory = async () => {
    const authToken = localStorage.getItem("token") || token;
    if (!authToken) {
      console.log('No token available for payment history');
      return;
    }
    
    setPurchaseLoading(true);
    try {
      const response = await fetch('/api/payments', {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPurchaseHistory(data.payments || []);
        
        // Update user stats based on payments
        const completedPayments = data.payments || [];
        const totalSpent = completedPayments.reduce((sum: number, payment: PurchaseReceipt) => sum + payment.amount, 0);
        const totalCourses = completedPayments.reduce((sum: number, payment: PurchaseReceipt) => {
          const items = JSON.parse(payment.items);
          return sum + items.length;
        }, 0);
        
        setUserData((prev) => ({
          ...prev,
          totalSpent: Math.round(totalSpent),
          totalCourses,
        }));
      } else if (response.status === 401) {
        console.error('Authentication failed for payment history');
        // Token might be invalid, redirect to login
        localStorage.clear();
        window.location.href = '/login';
      } else {
        console.error('Failed to fetch payment history:', response.status);
      }
    } catch (error) {
      console.error('Error fetching payment history:', error);
    } finally {
      setPurchaseLoading(false);
    }
  };

  // Listen for active tab changes to refresh payment history
  useEffect(() => {
    if (activeTab === "purchaseHistory" && token) {
      fetchPaymentHistory();
    }
  }, [activeTab, token])

  const handleLogout = () => {// Clear all localStorage data
    localStorage.clear()
    // Clear auth store
    useAuthStore.getState().clearAuth()
    // Redirect to home page
    router.push("/")
  }

  const handleUpdatePassword = async () => {
    if (!currentPassword || !newPassword || !confirmNewPassword) {
      toast.error("Please fill in all password fields.")
      return
    }
    if (newPassword !== confirmNewPassword) {
      toast.error("New password and confirm password do not match.")
      return
    }
    if (newPassword.length < 6) {
      toast.error("New password must be at least 6 characters long.")
      return
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    toast.success("Password updated successfully!")
    setCurrentPassword("")
    setNewPassword("")
    setConfirmNewPassword("")
  }

  const handleUpdateName = async () => {
    if (!newName.trim()) {
      toast.error("Name cannot be empty.")
      return
    }
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    localStorage.setItem("userName", newName)
    setUserData((prev) => ({ ...prev, name: newName }))
    toast.success("Name updated successfully!")
  }

  const handleUpdateLanguage = async (value: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))
    localStorage.setItem("userLanguage", value)
    setSelectedLanguage(value)
    toast.success(`Language set to ${value === "english" ? "English" : "Malay"}.`)
  }

  // Get enrolled courses from purchase history
  const enrolledCourses = purchaseHistory.reduce((courses: any[], receipt) => {
    try {
      const items = JSON.parse(receipt.items);
      return [...courses, ...items.map((item: any) => ({
        id: item.certificationId,
        name: item.certificationName,
        provider: 'DTVET-KPINTAR',
        logo: item.logoUrl || "/placeholder.svg",
        purchaseDate: receipt.createdAt,
        price: item.price
      }))];
    } catch (error) {
      return courses;
    }
  }, [])

  const tabs = [
    { id: "overview", label: "Overview", icon: User },
    { id: "courses", label: "My Courses", icon: BookOpen },
    { id: "cart", label: "Shopping Cart", icon: ShoppingCart },
    { id: "purchaseHistory", label: "Purchase History", icon: ReceiptText },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center">
        <div className="text-white text-xl font-barlow">Loading dashboard...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect to login
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-16 h-16 bg-[#F4BB44] rounded-full flex items-center justify-center text-white text-2xl font-bold font-barlow">
                  {userData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white font-barlow">
                    Welcome back, {userData.name}!
                  </h1>
                  <p className="text-gray-300 font-barlow">Member since {userData.memberSince}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4"></div>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm font-barlow">Total Courses</p>
                  <p className="text-3xl font-bold font-barlow">{userData.totalCourses}</p>
                </div>
                <BookOpen className="w-8 h-8 text-[#F4BB44]" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm font-barlow">Total Cost Purchase</p>
                  <p className="text-3xl font-bold font-barlow">RM{userData.totalSpent}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 font-barlow ${
                    activeTab === tab.id
                      ? "bg-[#F4BB44] text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  {tab.id === "cart" && cartItems.length > 0 && (
                    <span className="bg-white text-[#F4BB44] text-xs rounded-full h-5 w-5 flex items-center justify-center font-barlow">
                      {cartItems.length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 gap-8">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="font-barlow">Welcome to your Dashboard!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 font-barlow">
                    Here you can manage your courses, view your shopping cart, track your purchase history, and update
                    your profile settings.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Button onClick={() => setActiveTab("courses")} className="bg-[#F4BB44] hover:bg-[#E5A63D]">
                      View My Courses
                    </Button>
                    <Button
                      onClick={() => setActiveTab("purchaseHistory")}
                      className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white border-0"
                    >
                      View Purchase History
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "courses" && (
            <div className="space-y-6">
              {enrolledCourses.length === 0 ? (
                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold font-barlow mb-2">No courses enrolled yet</h3>
                    <p className="text-gray-300 mb-6">
                      Start your learning journey by enrolling in a certification program.
                    </p>
                    <Link href="/">
                      <Button className="bg-[#F4BB44] hover:bg-[#E5A63D]">Browse Certifications</Button>
                    </Link>
                  </CardContent>
                </Card>
              ) : (
                enrolledCourses.map((course) => (
                  <Card key={`${course.id}-${course.purchaseDate}`} className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2">
                            <Image
                              src={course.logo || "/placeholder.svg"}
                              alt={`${course.provider} logo`}
                              width={48}
                              height={48}
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold font-barlow">{course.name}</h3>
                            <p className="text-gray-300 font-barlow">{course.provider}</p>
                            <p className="text-sm text-gray-400">
                              Purchased on {new Date(course.purchaseDate).toLocaleDateString('en-MY')}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[#F4BB44] font-bold text-lg">RM{course.price.toFixed(2)}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          )}

          {activeTab === "cart" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white font-barlow">Shopping Cart ({cartItems.length} items)</h2>
                {cartItems.length > 0 && (
                  <Link href="/cart">
                    <Button className="bg-[#F4BB44] hover:bg-[#E5A63D]">View Cart & Checkout</Button>
                  </Link>
                )}
              </div>

              {cartItems.length === 0 ? (
                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <ShoppingCart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold font-barlow mb-2">Your cart is empty</h3>
                    <p className="text-gray-300 mb-6">Browse our certifications to add items to your cart.</p>
                    <Link href="/">
                      <Button className="bg-[#F4BB44] hover:bg-[#E5A63D]">Browse Certifications</Button>
                    </Link>
                  </CardContent>
                </Card>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <Card key={item.id} className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2">
                              <Image
                                src={item.logo || "/placeholder.svg"}
                                alt={`${item.provider} logo`}
                                width={48}
                                height={48}
                                className="object-contain"
                              />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold font-barlow">{item.name}</h3>
                              <p className="text-gray-300 font-barlow">{item.provider}</p>
                              <p className="text-sm text-gray-400">Added {item.addedDate}</p>
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-[#F4BB44] font-barlow">RM{item.price}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </>
              )}
            </div>
          )}

          {activeTab === "purchaseHistory" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white font-barlow">Your Purchase History</h2>
                <Button
                  onClick={fetchPaymentHistory}
                  disabled={purchaseLoading}
                  className="bg-[#F4BB44] hover:bg-[#E5A63D] text-white"
                >
                  {purchaseLoading ? 'Refreshing...' : 'Refresh'}
                </Button>
              </div>
              {purchaseLoading ? (
                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <p className="text-gray-400">Loading payment history...</p>
                  </CardContent>
                </Card>
              ) : purchaseHistory.length === 0 ? (
                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <ReceiptText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold font-barlow mb-2">No purchases yet</h3>
                    <p className="text-gray-300 mb-6">Your past orders will appear here after checkout.</p>
                    <Link href="/">
                      <Button className="bg-[#F4BB44] hover:bg-[#E5A63D]">Browse Certifications</Button>
                    </Link>
                  </CardContent>
                </Card>
              ) : (
                purchaseHistory.map((receipt) => {
                  const items = JSON.parse(receipt.items);
                  return (
                    <Card key={receipt.id} className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                      <CardHeader>
                        <CardTitle className="font-barlow flex items-center justify-between">
                          <span>
                            Purchase on {new Date(receipt.createdAt).toLocaleDateString('en-MY', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                          <span className="text-[#F4BB44]">RM{receipt.amount.toFixed(2)}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h4 className="text-lg font-semibold text-white mb-3 font-barlow">Items:</h4>
                        <ul className="space-y-2">
                          {items.map((item: any, index: number) => (
                            <li key={index} className="flex items-center space-x-3 text-gray-300 font-barlow">
                              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                                <Image
                                  src={item.logoUrl || "/placeholder.svg"}
                                  alt="Certification logo"
                                  width={16}
                                  height={16}
                                  className="object-contain"
                                />
                              </div>
                              <span>
                                {item.certificationName} - RM{item.price.toFixed(2)}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex items-center justify-between text-sm">
                          <span className="text-gray-400">
                            Status: <span className="text-green-400 font-semibold">{receipt.status}</span>
                          </span>
                          {receipt.stripePaymentId && (
                            <span className="text-gray-500 text-xs">
                              Payment ID: {receipt.stripePaymentId}
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })
              )}
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-6">
              {/* Name Change Settings */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="font-barlow">Change Name</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="newName" className="text-gray-300 font-barlow">
                        New Name
                      </Label>
                      <div className="relative mt-1">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          id="newName"
                          type="text"
                          value={newName}
                          onChange={(e) => setNewName(e.target.value)}
                          className="pl-10 h-12 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-[#F4BB44] focus:ring-[#F4BB44] font-barlow"
                        />
                      </div>
                    </div>
                    <Button
                      onClick={handleUpdateName}
                      className="bg-[#F4BB44] hover:bg-[#E5A63D] text-white font-barlow"
                    >
                      Update Name
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Password Change Settings */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="font-barlow">Change Password</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="currentPassword" className="text-gray-300 font-barlow">
                        Current Password
                      </Label>
                      <div className="relative mt-1">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          id="currentPassword"
                          type={showCurrentPassword ? "text" : "password"}
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          className="pl-10 pr-10 h-12 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-[#F4BB44] focus:ring-[#F4BB44] font-barlow"
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showCurrentPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="newPassword" className="text-gray-300 font-barlow">
                        New Password
                      </Label>
                      <div className="relative mt-1">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          id="newPassword"
                          type={showNewPassword ? "text" : "password"}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="pl-10 pr-10 h-12 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-[#F4BB44] focus:ring-[#F4BB44] font-barlow"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="confirmNewPassword" className="text-gray-300 font-barlow">
                        Confirm New Password
                      </Label>
                      <div className="relative mt-1">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          id="confirmNewPassword"
                          type={showConfirmNewPassword ? "text" : "password"}
                          value={confirmNewPassword}
                          onChange={(e) => setConfirmNewPassword(e.target.value)}
                          className="pl-10 pr-10 h-12 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-[#F4BB44] focus:ring-[#F4BB44] font-barlow"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>
                    <Button
                      onClick={handleUpdatePassword}
                      className="bg-[#F4BB44] hover:bg-[#E5A63D] text-white font-barlow"
                    >
                      Update Password
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Language Settings */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="font-barlow">Language Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="language" className="text-gray-300 font-barlow">
                        Select Language
                      </Label>
                      <Select value={selectedLanguage} onValueChange={handleUpdateLanguage}>
                        <SelectTrigger className="w-full h-12 bg-white/5 border-white/20 text-white focus:ring-[#F4BB44] font-barlow">
                          <SelectValue placeholder="Select a language" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900/95 backdrop-blur-xl border border-white/30 text-white font-barlow">
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="malay">Malay</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Logout Button */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardContent className="p-6">
                  <Button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white font-barlow">
                    Logout
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
