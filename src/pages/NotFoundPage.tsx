import { Link } from 'react-router-dom'
import { AppLayout } from '../components/layout/AppLayout'
export function NotFoundPage() { return <AppLayout><div className="mx-auto max-w-xl px-6 py-28 text-center"><h1 className="text-5xl font-bold">404</h1><p className="mt-4 text-slate-300">Página não encontrada.</p><Link className="mt-6 inline-block text-cyan-300 underline" to="/">Voltar ao início</Link></div></AppLayout> }
