'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToContact = (e) => {
    e.preventDefault()
    const contactSection = document.getElementById('iletisim')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false) // Mobil menüyü kapat
  }

  const menuItems = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Siber Tehditler', href: '/siber-tehditler' },
    { name: 'İpuçları ve Öneriler', href: '/ipuclari-oneriler' },
    { name: 'Haberler ve Blog', href: '/blog' },
    { name: 'Kaynaklar ve Araçlar', href: '/kaynaklar' },
    { name: 'Siber Olay Bildirimi', href: '/olay-bildirimi' },
    { name: 'SSS', href: '/sss' },
  ]

  return (
    <nav className="bg-gray-900 text-white shadow-lg border-b border-cyan-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 mr-2 relative">
                <Image
                  src="/shield-lock.svg"
                  alt="CYBERLY Logo"
                  width={32}
                  height={32}
                  className="text-cyan-500 text-glow"
                />
              </div>
              <span className="font-bold text-xl text-cyan-400 text-glow">CYBERLY</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href} 
                className="px-2 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="#iletisim" 
              onClick={scrollToContact}
              className="ml-2 px-3 py-2 rounded-md text-sm font-medium bg-cyan-600 hover:bg-cyan-700 transition-colors border-glow"
            >
              İletişim
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-cyan-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} lg:hidden bg-gray-800 overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href} 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-cyan-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a 
            href="#iletisim" 
            onClick={scrollToContact}
            className="block px-3 py-2 rounded-md text-base font-medium bg-cyan-600 hover:bg-cyan-700 my-2 border-glow"
          >
            İletişim
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 