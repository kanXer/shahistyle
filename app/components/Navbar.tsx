"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import {
  Menu,
  X,
  ShoppingBag,
  User,
  Search,
  Sun,
  Moon
} from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Load saved theme
  useEffect(() => {
    setMounted(true)

    const saved = localStorage.getItem("theme")

    if (saved === "dark") {
      document.documentElement.classList.add("dark")
      setDark(true)
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark")
    localStorage.setItem("theme", isDark ? "dark" : "light")
    setDark(isDark)
  }

  if (!mounted) return null

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)] border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* 👑 LOGO */}
        <Link href="/" className="flex items-center gap-2">

          <Image
            src="/logo.png"
            alt="Shahi Style"
            width={40}
            height={40}
            priority
          />

          <span
            className="text-xl md:text-2xl font-semibold tracking-wide text-[var(--foreground)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            SHAHI <span className="text-yellow-500">STYLE</span>
          </span>

        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--foreground)]">

          {["Men", "Women", "Kids"].map((item) => (
            <Link
              key={item}
              href={`/category/${item.toLowerCase()}`}
              className="relative group hover:opacity-80 transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}

          <Link
            href="/sale"
            className="text-yellow-600 font-semibold hover:text-yellow-700"
          >
            Sale
          </Link>

        </nav>

        {/* 🔍 SEARCH */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-72">

          <Search size={18} className="text-gray-500 mr-2" />

          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none w-full text-sm text-[var(--foreground)]"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 md:gap-5">

          {/* 🌙☀️ THEME SWITCH */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-gray-400 text-[var(--background)] hover:scale-105 transition"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* 🛍️ CART */}
          <Link href="/cart" className="relative text-[var(--foreground)]">
            <ShoppingBag size={22} />
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs px-1.5 rounded-full">
              0
            </span>
          </Link>

          {/* 👤 PROFILE */}
          <Link href="/profile" className="hidden sm:block text-[var(--foreground)]">
            <User size={22} />
          </Link>

          {/* 📱 MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-[var(--foreground)]"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>
      </div>

      {/* 📱 MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[var(--background)] border-t border-gray-200 shadow-lg">

          <div className="p-5 space-y-4">

            {/* Mobile Search */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search size={18} className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none w-full text-[var(--foreground)]"
              />
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-4 text-[var(--foreground)] font-medium">

              <Link href="/category/men">Men</Link>
              <Link href="/category/women">Women</Link>
              <Link href="/category/kids">Kids</Link>

              <Link href="/sale" className="text-yellow-600 font-semibold">
                Sale
              </Link>

              <Link href="/profile">Profile</Link>

            </nav>
          </div>

        </div>
      )}
    </header>
  )
}