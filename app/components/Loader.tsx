"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function Loader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--background)]">

      {/* Toss Animation Container */}
      <div className="animate-toss">

        <Image
          src="/logo.png"
          alt="Loading"
          width={300}
          height={300}
          priority
        />

      </div>
    </div>
  )
}