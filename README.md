# Conecta+ React Starter Kit — V1.0

**Template React + TypeScript para desenvolvimento de aplicações web modernas, modulares, testáveis e documentadas.**

Desenvolvido como base reutilizável para projetos da **Conecta+ — Soluções Digitais**, com foco em organização de código, qualidade, manutenção e evolução contínua.

O projeto é independente do KURIO e não contém regras de negócio, dados de clientes ou integrações reais.

## 1. Tecnologias

| Tecnologia | Finalidade |
|---|---|
| React 19 | Construção da interface |
| TypeScript 5 | Tipagem estática |
| Vite 6 | Ambiente de desenvolvimento e build |
| React Router 7 | Navegação entre páginas |
| Tailwind CSS 3 | Estilização responsiva |
| Lucide React | Biblioteca de ícones |
| Axios | Cliente HTTP |
| TanStack Query | Gerenciamento de consultas e cache |
| Vitest + Testing Library | Testes unitários |
| Playwright | Testes E2E em desktop e mobile |

## 2. Funcionalidades implementadas

- Página inicial responsiva com identidade visual da Conecta+.
- Logo oficial em `public/img/logo.png`.
- Layout compartilhado entre páginas.
- Componente de botão reutilizável.
- Roteamento com React Router.
- Página personalizada para rotas inexistentes (404).
- Cliente HTTP configurável por variável de ambiente.
- Testes unitários com Vitest.
- Testes E2E com Playwright.
- Documentação e checklists para desenvolvimento e entrega.

O projeto não inclui backend, autenticação real, banco de dados, pagamentos ou aplicativo React Native.

## 3. Pré-requisitos

- Node.js LTS compatível com as dependências instaladas.
- npm.
- Git.
- Navegador atualizado.

## 4. Instalação

Clone o repositório:

```bash
git clone https://github.com/cwgmobile/conecta-react-starter.git
cd conecta-react-starter
```

Instale as dependências:

```bash
npm install
```

Configure o ambiente:

```bash
cp .env.example .env.local
```

No Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Inicie a aplicação:

```bash
npm run dev
```

Acesse:

http://localhost:5173

**Observação para Windows:** caso o PowerShell bloqueie a execução de `npm.ps1`, utilize `npm.cmd` nos comandos.

## 5. Estrutura do projeto

```text
conecta-react-starter/
├── docs/
├── public/
│   └── img/
│       └── logo.png
├── src/
│   ├── api/
│   ├── assets/
│   ├── auth/
│   ├── components/
│   │   ├── layout/
│   │   └── ui/
│   ├── contexts/
│   ├── hooks/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── tests/
│   ├── e2e/
│   └── unit/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

### Responsabilidades

- `api/`: configuração da comunicação HTTP.
- `assets/`: recursos locais da aplicação.
- `auth/`: espaço reservado à autenticação e autorização.
- `components/`: componentes reutilizáveis e layouts.
- `contexts/`: futuros contextos e provedores compartilhados.
- `hooks/`: hooks personalizados.
- `pages/`: componentes de páginas.
- `routes/`: configuração das rotas.
- `services/`: futuros serviços organizados por domínio.
- `styles/`: estilos globais.
- `types/`: definições de tipos compartilhados.
- `utils/`: funções utilitárias.
- `tests/`: testes automatizados.
- `docs/`: documentação técnica e operacional.

Algumas pastas estão preparadas para expansões futuras e ainda não possuem implementações funcionais.

## 6. Build de produção

```bash
npm run typecheck
npm run build
npm run preview
```

O build gera a pasta `dist/`, que não deve ser versionada.

Para publicar uma SPA, o servidor de hospedagem deve permitir que as rotas da aplicação sejam atendidas pelo `index.html`.

## 7. Testes automatizados

### Testes unitários — Vitest

```bash
npm run test
```

**Resultado registrado:**

- 1 arquivo de teste aprovado.
- 1 teste aprovado.
- 0 falhas.

Arquivo: `tests/unit/Button.test.tsx`.

O teste verifica a renderização do botão e a execução de seu evento de clique.

### Testes E2E — Playwright

```bash
npx playwright install chromium
npm run test:e2e
```

**Resultado registrado:**

- 4 testes aprovados.
- 0 falhas.
- Execução em Chromium desktop e mobile.
- Duração informada: 4,4 segundos.

Cenários validados:

| Cenário | Desktop | Mobile |
|---|---|---|
| Página inicial apresenta marca e recursos | Aprovado | Aprovado |
| Rota inexistente apresenta página 404 | Aprovado | Aprovado |

Para visualizar o relatório HTML:

```bash
npx playwright show-report
```

### Resumo da homologação

| Verificação | Situação |
|---|---|
| Inicialização local | Aprovada |
| Exibição da logo oficial | Confirmada visualmente |
| Build de produção | Concluído sem erros, conforme execução local |
| Vitest | 1/1 aprovado |
| Playwright | 4/4 aprovados |
| Typecheck isolado | Pendente de confirmação |
| Lighthouse | Pendente de medição |

Os resultados representam os cenários executados nesta versão e não constituem garantia de ausência de defeitos.

## 8. Documentação técnica

O projeto mantém documentos Markdown para apoiar o desenvolvimento, a manutenção e a reutilização do template.

| Documento | Finalidade |
|---|---|
| [Guia de reutilização](docs/PROJECT_TEMPLATE_GUIDE.md) | Iniciar novos projetos |
| [Briefing](docs/PROJECT_BRIEF_TEMPLATE.md) | Levantar requisitos |
| [Arquitetura e convenções](docs/ARCHITECTURE_AND_CONVENTIONS.md) | Padronizar o código |
| [Checklist de novo projeto](docs/NEW_PROJECT_CHECKLIST.md) | Preparar novas aplicações |
| [Diário de desenvolvimento](docs/DEVELOPMENT_LOG.md) | Registrar evolução |
| [Plano de testes](docs/TEST_PLAN_AND_RESULTS.md) | Documentar validações |
| [Registro de problemas](docs/ISSUE_REGISTER.md) | Acompanhar correções |
| [Checklist de release](docs/RELEASE_CHECKLIST.md) | Preparar entregas |
| [Modelo de handoff](docs/HANDOFF_TEMPLATE.md) | Transferir conhecimento |

### Manual Técnico Conecta+

Está planejada uma documentação educacional complementar, com explicações de cada pasta, arquivo, função, importação e decisão arquitetural.

Os capítulos serão adicionados progressivamente ao repositório, acompanhando a evolução do projeto.

## 9. Boas práticas adotadas

- Separação de responsabilidades.
- Componentização.
- Tipagem com TypeScript.
- Roteamento organizado.
- Testes unitários e E2E.
- Versionamento com Git.
- Commits descritivos.
- Documentação em Markdown.
- Exclusão de dependências e artefatos gerados pelo `.gitignore`.

## 10. Limitações conhecidas

- Não possui regras de negócio implementadas.
- Não possui autenticação real.
- Não possui backend ou banco de dados.
- Não inclui integração funcional com APIs externas.
- Não possui testes de integração com backend.
- Não é um projeto React Native.
- As métricas Lighthouse ainda não foram aferidas.
- A cobertura de testes é inicial e deverá crescer conforme novas funcionalidades forem adicionadas.

## 11. Evolução do projeto

As próximas melhorias incluem:

- Ampliação do manual técnico.
- Revisão contínua da documentação.
- Expansão dos testes automatizados.
- Verificação de acessibilidade, desempenho e SEO.
- Aperfeiçoamento dos componentes reutilizáveis.
- Preparação de exemplos para novos projetos.

Cada evolução relevante será registrada em commits específicos.

## 12. Licença e utilização

Projeto desenvolvido para a Conecta+ — Soluções Digitais.

A disponibilização pública do código no GitHub não concede automaticamente uma licença de reutilização, modificação ou distribuição por terceiros. As condições de licenciamento poderão ser definidas futuramente.

---

**Conecta+ — Soluções Digitais**

*Desenvolvimento com organização, qualidade, testes e documentação.*

**Repositório:** https://github.com/cwgmobile/conecta-react-starter
