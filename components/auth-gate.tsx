"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const USERNAME = "sanitas"
const PASSWORD = "s4n1t0tsa13@p"

export function AuthGate({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    const authed = localStorage.getItem('is_authed') === 'true'
    setIsAuthenticated(authed)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === USERNAME && password === PASSWORD) {
      localStorage.setItem('is_authed', 'true')
      setIsAuthenticated(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  if (isAuthenticated === null) return null

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      {/* Subtle Background Decoration */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-sanitas-blue/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-sanitas-dark/5 rounded-full blur-[100px]" />

      <div className="w-full max-w-md p-6 relative">
        <div className="bg-card border border-border/50 rounded-2xl shadow-xl p-8 backdrop-blur-sm">
          <div className="flex justify-center mb-8">
            <Image 
              src="/sanitas_logo.webp" 
              alt="Sanitas Logo" 
              width={140} 
              height={40} 
              className="h-auto w-auto"
              priority
            />
          </div>
          
          <h2 className="text-xl font-bold text-center mb-1 font-heading">Acceso Privado</h2>
          <p className="text-muted-foreground text-center mb-8 text-sm">
            Introduce tus credenciales para continuar
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-1">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value)
                    if (error) setError(false)
                  }}
                  placeholder="Usuario"
                  className={`w-full px-4 py-3 bg-muted/50 border ${error ? 'border-destructive' : 'border-border'} rounded-xl focus:outline-none focus:ring-2 focus:ring-sanitas-blue transition-all text-center`}
                  autoFocus
                />
              </div>
              <div className="space-y-1">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (error) setError(false)
                  }}
                  placeholder="Contraseña"
                  className={`w-full px-4 py-3 bg-muted/50 border ${error ? 'border-destructive' : 'border-border'} rounded-xl focus:outline-none focus:ring-2 focus:ring-sanitas-blue transition-all text-center`}
                />
                {error && (
                  <p className="text-destructive text-[10px] text-center font-medium animate-in fade-in slide-in-from-top-1 pt-1">
                    Credenciales incorrectas
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 sanitas-gradient text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-sanitas-blue/20 active:scale-[0.98] transition-all"
            >
              Entrar
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border/40 text-center text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
            SegurosOnline.net
          </div>
        </div>
      </div>
    </div>
  )
}
