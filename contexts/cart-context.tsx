"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/lib/store"

export interface CartItem {
  id: number
  name: string
  provider: string
  logo: string
  price: number
  addedDate: string
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  getCartTotal: () => number
  getCartCount: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()
  const { token } = useAuthStore()

  // Load cart from localStorage on initial render and migrate old prices
  useEffect(() => {
    const savedCart = localStorage.getItem("dtvet-cart")
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        // Migrate old prices (810) to new prices (1)
        const migratedCart = parsedCart.map((item: CartItem) => ({
          ...item,
          price: item.price === 810 ? 2 : item.price === 1 ? 2 : item.price // Update old prices to new price
        }))
        setCartItems(migratedCart)
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
        setCartItems([])
      }
    }
    setIsLoaded(true)
  }, [])

  // Save cart to localStorage whenever it changes (but not on initial load)
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("dtvet-cart", JSON.stringify(cartItems))
    }
  }, [cartItems, isLoaded])

  const addToCart = (item: CartItem) => {
    // Check if user is logged in before adding to cart
    if (!token) {
      // Store the current page URL to redirect back after login
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('redirectAfterLogin', window.location.pathname)
      }
      router.push('/login')
      return
    }

    // Check if item already exists in cart
    const existingItem = cartItems.find((cartItem: CartItem) => cartItem.id === item.id)

    if (existingItem) {
      // If item exists, don't add it again
      alert("This certification is already in your cart!")
      return
    }

    // Add current date to the item
    const newItem = {
      ...item,
      addedDate: new Date().toLocaleDateString(),
    }

    setCartItems((prevItems: CartItem[]) => [...prevItems, newItem])
  }

  const removeFromCart = (id: number) => {
    setCartItems((prevItems: CartItem[]) => prevItems.filter((item: CartItem) => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getCartTotal = () => {
    return cartItems.reduce((total: number, item: CartItem) => total + item.price, 0)
  }

  const getCartCount = () => {
    return cartItems.length
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
