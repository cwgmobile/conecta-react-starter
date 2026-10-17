import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode; variant?: 'primary' | 'secondary' }
export function Button({ children, variant = 'primary', className = '', ...props }: Props) {
  const styles = variant === 'primary' ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'border border-slate-600 text-slate-100 hover:bg-slate-800'
  return <button className={`rounded-xl px-5 py-3 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${styles} ${className}`} {...props}>{children}</button>
}
