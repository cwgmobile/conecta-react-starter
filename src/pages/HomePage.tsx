import { ArrowRight, Code2, FlaskConical, Layers3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AppLayout } from '../components/layout/AppLayout'
import { Button } from '../components/ui/Button'

const features = [
  { icon: Layers3, title: 'Arquitetura modular', description: 'Componentes, páginas, rotas e serviços separados por responsabilidade.' },
  { icon: Code2, title: 'Pronto para evoluir', description: 'React, TypeScript, integração HTTP e gerenciamento de consultas.' },
  { icon: FlaskConical, title: 'Qualidade desde o início', description: 'Testes unitários, testes E2E e documentação de entrega.' }
]
export function HomePage() {
  return <AppLayout>
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28 text-center">

      <div className="mx-auto mb-8 flex justify-center">
        <img
          src="/img/logo.png"
          alt="Conecta+ — Soluções Digitais"
          className="h-auto w-full max-w-[260px] object-contain"
        />
    </div>

      <p className="text-cyan-300 text-sm font-semibold uppercase tracking-[.25em]">Base profissional de projetos</p>
      <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">Conecta<span className="text-conecta-cyan">+</span> <span className="block mt-2">React Starter Kit</span></h1>
      <p className="mx-auto mt-6 max-w-2xl text-slate-300 leading-relaxed">Uma fundação limpa, organizada e reutilizável para construir aplicações web com qualidade, documentação e testes.</p>
      <div className="mt-9 flex flex-wrap justify-center gap-3"><Button onClick={() => document.getElementById('recursos')?.scrollIntoView({ behavior: 'smooth' })}>Conhecer a estrutura <ArrowRight className="inline h-4 w-4 ml-1" /></Button><Link to="/pagina-exemplo"><Button variant="secondary">Testar rota 404</Button></Link></div>
    </section>
    <section id="recursos" className="mx-auto max-w-6xl px-6 pb-24 grid gap-5 md:grid-cols-3" aria-label="Recursos do starter kit">
      {features.map(({ icon: Icon, title, description }) => <article key={title} className="rounded-2xl border border-white/10 bg-white/[.04] p-7"><Icon className="h-7 w-7 text-cyan-300" aria-hidden="true" /><h2 className="mt-5 font-semibold text-lg">{title}</h2><p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p></article>)}
    </section>
  </AppLayout>
}
