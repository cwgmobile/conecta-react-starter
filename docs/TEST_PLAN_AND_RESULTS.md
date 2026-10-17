# Plano de testes e resultados — modelo reutilizável

**Regra:** nunca copiar métricas do KURIO ou de outro projeto. Resultados só podem ser aprovados após execução no projeto atual. Evidência: data, ambiente, comando, log/print/relatório e responsável.

## Pirâmide de testes
1. **Unitários/componentes (Vitest + Testing Library):** funções, botões, formulários, estados e validações.
2. **Integração:** interações entre UI, hooks, serviços e APIs simuladas ou reais de homologação.
3. **E2E (Playwright):** jornada completa no navegador, rotas, formulários, navegação, erros, responsividade.
4. **Auditoria:** Lighthouse, teclado, contraste, labels, imagens, SEO e performance.

## Plano por área
| ID | Área | Cenário | Ferramenta/comando | Resultado | Evidência |
|---|---|---|---|---|---|
| T01 | Componentes | Botão renderiza e responde a clique | `npm.cmd test` | Pendente | — |
| T02 | Home | Título e navegação visíveis | `npm.cmd run test:e2e` | Pendente | — |
| T03 | Rotas | URL inválida exibe 404 | `npm.cmd run test:e2e` | Pendente | — |
| T04 | Mobile | Navegação e layout responsivos | `npm.cmd run test:e2e -- --project=mobile-chrome` | Pendente | — |
| T05 | Tipagem | TypeScript sem erros | `npm.cmd run typecheck` | Pendente | — |
| T06 | Produção | Build gera `dist/` | `npm.cmd run build` | Pendente | — |
| T07 | Imagens | Carregamento, alt e layout | Inspeção + E2E conforme projeto | Pendente | — |
| T08 | Acessibilidade | Teclado, labels, Lighthouse | Chrome DevTools | Pendente | — |
| T09 | Performance/SEO | Métricas Lighthouse | Chrome DevTools | Pendente | — |

**Observação da matriz:** instalação npm e visualização da home no navegador foram confirmadas pelo usuário; não são equivalentes a aprovação de T01–T09.

## Execução no Windows PowerShell
```powershell
npm.cmd run typecheck
npm.cmd run build
npm.cmd test
npx.cmd playwright install chromium
npm.cmd run test:e2e
npm.cmd run test:e2e -- --project=chromium-desktop
npm.cmd run test:e2e -- --project=mobile-chrome
npm.cmd run test:e2e:report
npm.cmd run preview
```

## Modelo de registro por rodada
- **Data e versão/commit:**
- **Ambiente:** SO, navegador, Node, URL
- **Escopo:** área/fluxo
- **Comando:**
- **Total / aprovados / falhas / ignorados:**
- **Evidências:**
- **Bugs abertos (IDs):**
- **Ação e nova execução:**

## Lighthouse
| Métrica | Valor medido | Meta definida pelo projeto | Evidência |
|---|---|---|---|
| Performance | Não aferido | [definir] | — |
| Acessibilidade | Não aferido | [definir] | — |
| Boas práticas | Não aferido | [definir] | — |
| SEO | Não aferido | [definir] | — |
