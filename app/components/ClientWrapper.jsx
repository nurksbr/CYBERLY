'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// CodeMatrix'i client tarafında dinamik olarak yükle (SSR olmadan)
const CodeMatrix = dynamic(() => import('./CodeMatrix'), { ssr: false })

function ClientWrapper() {
  const [isMounted, setIsMounted] = useState(false)
  
  // Sadece istemci tarafında bileşenin yüklenmesini sağla
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      {/* Matrix animasyonu - tüm ekranı kaplar */}
      <div className="fixed inset-0 w-full h-full z-10 opacity-50 pointer-events-none overflow-hidden">
        <CodeMatrix />
      </div>
      
      {/* Ekranın altında yatan bir animasyon katmanı */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950/20 via-transparent to-transparent"></div>
    </>
  )
}

export default ClientWrapper 