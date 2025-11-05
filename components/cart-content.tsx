"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"
import Image from "next/image"
import { ShoppingCart, CreditCard, Trash2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

export default function CartContent() {
  const { cartItems, removeFromCart, clearCart, getCartTotal } = useCart()

  const handleRemoveItem = (id: number) => {
    removeFromCart(id)
    toast.success("Item removed from cart")
  }

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty. Please add items before checking out.")
      return
    }

    // Redirect to the real Stripe checkout page
    window.location.href = '/checkout'
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-barlow">
            Your <span className="text-[#F4BB44]">Shopping Cart</span>
          </h1>
          <div className="w-20 h-1 bg-[#F4BB44] rounded-full mb-6"></div>
        </motion.div>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center"
          >
            <div className="flex flex-col items-center justify-center py-12">
              <ShoppingCart className="w-16 h-16 text-gray-400 mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4 font-barlow">Your cart is empty</h2>
              <p className="text-gray-300 mb-8 max-w-md mx-auto font-barlow">
                Looks like you haven't added any certifications to your cart yet. Explore our certification programs to
                get started.
              </p>
              <Link href="/certifications">
                <Button className="bg-[#F4BB44] hover:bg-[#E5A63D] text-white px-8 py-2 text-lg font-semibold font-barlow rounded-full">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Browse Certifications
                </Button>
              </Link>
            </div>
          </motion.div>
        ) : (
          <>
            {/* Cart Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 mb-8"
            >
              {cartItems.map((item: any, index: number) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                        <div className="flex items-center space-x-4 mb-4 md:mb-0">
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
                        <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-end">
                          <span className="text-2xl font-bold text-[#F4BB44] font-barlow">RM{item.price}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white bg-transparent"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <Trash2 className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Cart Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold font-barlow mb-2">Order Summary</h3>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-300 font-barlow">Subtotal ({cartItems.length} items)</span>
                          <span className="font-barlow">RM{getCartTotal()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300 font-barlow">Discount</span>
                          <span className="font-barlow">RM0</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-white/20 mt-2">
                          <span className="text-white font-bold font-barlow">Total</span>
                          <span className="text-[#F4BB44] text-xl font-bold font-barlow">RM{getCartTotal()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full md:w-auto space-y-2">
                      <Button
                        size="lg"
                        className="bg-[#F4BB44] hover:bg-[#E5A63D] text-white px-8 py-2 text-lg font-semibold font-barlow"
                        onClick={handleCheckout}
                      >
                        <CreditCard className="w-5 h-5 mr-2" />
                        Proceed to Checkout
                      </Button>
                      <Link href="/certifications" className="w-full md:w-auto">
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-white/20 text-white hover:bg-white/10 w-full bg-transparent"
                        >
                          Continue Shopping
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </>
        )}
      </div>
    </div>
  )
}
