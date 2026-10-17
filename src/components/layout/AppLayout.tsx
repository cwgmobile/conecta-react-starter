import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function AppLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen flex flex-col bg-conecta-navy text-slate-100">
    <header className="border-b border-white/10"><div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
      <Link to="/" className="font-bold tracking-wide" aria-label="Conecta+ — Início">Conecta<span className="text-conecta-cyan">+</span></Link>
      <span className="text-xs text-slate-400">React Starter Kit · v1.0</span>
    </div></header>
    <main className="flex-1">{children}</main>
    <footer className="border-t border-white/10 px-6 py-5 text-center text-xs text-slate-400">Conecta+ — Soluções Digitais · Template de desenvolvimento</footer>
  </div>
}
