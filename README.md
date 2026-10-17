# Conecta+ React Starter Kit — V1.0

Template profissional para iniciar **aplicações web React + TypeScript** com estrutura modular, documentação e testes. Projeto independente do KURIO, sem regras de negócio, dados de clientes ou integrações reais.

## 1. Tecnologias
- React 19, TypeScript 5, Vite 6
- React Router 7
- Tailwind CSS 3, Lucide React
- Axios e TanStack Query
- Vitest + Testing Library (unitários)
- Playwright (E2E desktop e mobile)

## 2. Funcionalidades iniciais
- Home responsiva de apresentação da Conecta+
- Layout compartilhado e componente de botão reutilizável
- Roteamento e página 404
- Cliente HTTP configurável via variável de ambiente
- Exemplos de testes unitários e E2E
- Documentação e checklists para o ciclo de desenvolvimento

**Importante:** o símbolo `C+` é provisório. Substituir pelo **arquivo original da logo oficial** quando disponível. Não há backend, login real, banco, API simulada, pagamentos ou aplicativo React Native.

## 3. Pré-requisitos
- Node.js 20.19+ ou 22.12+ (compatível com Vite 6; prefira LTS atualizado)
- npm
- Git (recomendado)

## 4. Instalação
```bash
npm install
cp .env.example .env.local
npm run dev
```
No Windows PowerShell, substitua `cp` por `Copy-Item .env.example .env.local`.
Abra `http://localhost:5173`.

## 5. Build de produção
```bash
npm run typecheck
npm run build
npm run preview
```
O build gera `dist/`, que **não** deve ser versionado. Para hospedagem SPA, configure fallback de rotas para `index.html`.

## 6. Testes
### Unitários
```bash
npm test
npm run test:watch
```
### E2E — Playwright
```bash
npx playwright install chromium
npm run test:e2e
npm run test:e2e -- --project=chromium-desktop
npm run test:e2e -- --project=mobile-chrome
npm run test:e2e:report
```
Os testes E2E iniciam automaticamente o servidor Vite local. Relatório HTML em `playwright-report/`.

### Lighthouse (auditoria manual)
Depois do build, execute `npm run preview` e audite a URL no Chrome DevTools → Lighthouse. Registre as métricas no plano de testes. **Não há pontuações aferidas nesta versão.**

## 7. Estrutura
- `src/api`: cliente HTTP e configuração de comunicação
- `src/assets`: imagens e arquivos locais
- `src/auth`: futuras regras de autenticação e autorização
- `src/components/layout`: layout compartilhado
- `src/components/ui`: componentes reutilizáveis
- `src/contexts`: providers/contextos de domínio
- `src/hooks`: hooks customizados
- `src/pages`: telas
- `src/routes`: rotas
- `src/services`: serviços por domínio
- `src/styles`: estilos globais
- `src/types`: tipos compartilhados
- `src/utils`: funções utilitárias
- `tests/unit`: testes unitários
- `tests/e2e`: testes de interface completos
- `docs`: diário, plano de testes, problemas e checklist

## 8. Validação de produção
1. `npm run build` sem erros.
2. Abrir `npm run preview` em desktop e mobile.
3. Confirmar rotas e atualização direta de URL.
4. Testar formulários, API e autenticação quando implementados.
5. Executar Playwright e registrar resultados reais.
6. Auditar acessibilidade, performance, boas práticas e SEO.
7. Registrar limitações conhecidas antes da entrega.

## 9. Limitações
- Template inicial; nenhuma regra de negócio implementada.
- Sem autenticação real e sem backend.
- Sem testes de integração de API externa.
- Sem garantia de compatibilidade com React Native: este é um starter **React Web**.
- Logo original ainda não incorporada.
- Dependências e testes devem ser instalados/executados no ambiente de destino; este pacote não inclui `node_modules` nem `package-lock.json`.

## 10. Próximos passos
- Inserir logo oficial e ajustar tokens de identidade visual.
- Homologar instalação, build e testes.
- Criar repositório Git independente e marcar versão inicial.
- Para novo cliente: copiar template, trocar marca, criar domínio, registrar decisões e adicionar testes.

## 11. Licença e uso
Template de trabalho Conecta+. Definir licença de distribuição antes de publicar como código aberto.


## 12. Documentação para reutilizar este starter
Antes de iniciar um produto novo, leia [`docs/PROJECT_TEMPLATE_GUIDE.md`](docs/PROJECT_TEMPLATE_GUIDE.md), preencha o [`briefing`](docs/PROJECT_BRIEF_TEMPLATE.md) e siga o [`checklist de novo projeto`](docs/NEW_PROJECT_CHECKLIST.md). Convenções, testes, diário, problemas, release e entrega estão em `docs/`. **Não reutilize resultados de testes nem métricas de outros projetos.**

**Status de homologação informado:** `npm.cmd install` executado e home aberta no navegador. Build, typecheck e testes automatizados ainda não foram reportados como executados.
