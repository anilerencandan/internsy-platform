// src/context/NavContext.tsx
"use client"
import { createContext, useContext, useEffect, useRef, useState } from "react"

interface NavContextType {
  show: boolean
  height: number
}
const NavContext = createContext<NavContextType>({ show: true, height: 0 })

export function NavProvider({ children }: { children: React.ReactNode }) {
  const navRef = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(true)
  const [height, setHeight] = useState(0)
  const lastY = useRef(0)

  // mount olduğunda navbar yüksekliğini al
  useEffect(() => {
    if (navRef.current) {
      setHeight(navRef.current.offsetHeight)
    }
  }, [])

  // scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      if (y > lastY.current && y > height) setShow(false)
      else setShow(true)
      lastY.current = y
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [height])

  return (
    <NavContext.Provider value={{ show, height }}>
      {/* Navbar’ı ref ile sar */}
      <div ref={navRef}>
        {children /* burada Navbar component’in olacak */}
      </div>
    </NavContext.Provider>
  )
}

export const useNav = () => useContext(NavContext)
