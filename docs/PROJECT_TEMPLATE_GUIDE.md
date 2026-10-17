# Guia mestre — Conecta+ React Starter Kit V1.0

## Propósito
Este repositório é uma **matriz reutilizável para projetos WEB React + TypeScript**. Nunca implementar funcionalidades específicas de cliente na matriz. Para cada novo projeto, copiar o starter para outra pasta e iniciar um repositório Git independente. React Native requer um starter próprio: não copiar diretamente componentes DOM/Tailwind para mobile nativo.

## Princípios obrigatórios
1. Preservar o starter original. Criar um projeto derivado por cliente/produto.
2. Definir objetivo, escopo, personas, páginas, fluxos e critérios de aceite antes de codificar.
3. Criar componentes reutilizáveis e separar UI, regras de negócio e acesso a dados.
4. Manter TypeScript, nomenclatura consistente, acessibilidade e responsividade.
5. Evitar adicionar dependências sem necessidade; documentar decisões.
6. Nunca colocar segredos no frontend nem no Git; usar `.env.local` para configuração pública não sensível. `VITE_*` é exposto ao navegador.
7. Testar por área, registrar evidências e não declarar testes aprovados sem execução.
8. Documentar limitações, bugs e decisões durante o trabalho, não só no fim.
9. Homologar cada etapa antes de iniciar a próxima, quando o projeto exigir.

## Ciclo de vida de um novo projeto
**P00 — Descoberta:** preencher `PROJECT_BRIEF_TEMPLATE.md`; validar escopo e stack.
**P01 — Preparação:** copiar pasta, renomear projeto em `package.json`/`index.html`, conferir identidade e dependências, criar Git.
**P02 — Fundação:** layout, rotas, tokens de tema, componentes base, páginas vazias e 404.
**P03 — Funcionalidades:** implementar por fluxo (UI → estado → serviços/API → validação → erros).
**P04 — Testes por área:** unitários e E2E, desktop e mobile; documentar resultados.
**P05 — Produção:** typecheck, build, preview, Lighthouse, acessibilidade, segurança básica e deploy.
**P06 — Entrega:** README atualizado, diário, evidências, problemas conhecidos, checklist e tag/release.

## Estrutura de pastas (existente)
```text
src/
  api/              # Cliente HTTP e integração
  assets/           # Recursos importados
  auth/             # Autenticação/autorização (somente quando necessária)
  components/
    layout/         # Estruturas compartilhadas
    ui/             # Botões, campos, cards etc.
  contexts/         # Contextos React
  hooks/            # Hooks reutilizáveis
  pages/            # Páginas/rotas
  routes/           # Mapa de rotas
  services/         # Regras de acesso a serviços/domínios
  styles/           # CSS global e tema
  types/            # Tipos e contratos
  utils/            # Funções puras
 tests/unit/        # Testes de unidade/componente
 tests/e2e/         # Fluxos reais no navegador
 docs/              # Documentação, evidências e decisões
 public/            # Arquivos estáticos públicos
```
Pastas são possibilidades, não obrigação de preencher todas. Prefira coesão e simplicidade; se crescer, agrupar por funcionalidade.

## Regras de identidade
A marca `C+` é apenas provisória. Inserir **logo oficial original da Conecta+**, sem redesenhar. Para clientes, parametrizar cores, tipografia, logo, título, favicon e links; remover marca Conecta+ de áreas onde não foi contratualmente prevista. Nunca reaproveitar dados, credenciais ou ativos privados de outro cliente.

## Comandos (PowerShell)
```powershell
npm.cmd install
Copy-Item .env.example .env.local
npm.cmd run dev
npm.cmd run typecheck
npm.cmd run build
npm.cmd run preview
npm.cmd test
npx.cmd playwright install chromium
npm.cmd run test:e2e
npm.cmd run test:e2e:report
```
Os scripts são os existentes em `package.json`; não há comando `lint` configurado nesta versão. `dist/` é gerado pelo build e não deve ser versionado.

## Checklist ao copiar o starter
- [ ] Copiei para uma pasta nova e preservei a matriz
- [ ] Ajustei nome, descrição, títulos e metadados
- [ ] Defini branding e recebi arquivos oficiais
- [ ] Atualizei `.env.example` sem segredos
- [ ] Removi telas, exemplos e dependências desnecessários
- [ ] Criei repositório Git novo, sem histórico de cliente anterior
- [ ] Preenchi brief, arquitetura e plano de testes
- [ ] Executei instalação, typecheck, build e testes; registrei resultados reais
- [ ] Atualizei README e diário com limitações

## Documentos-padrão
`PROJECT_BRIEF_TEMPLATE.md`, `ARCHITECTURE_AND_CONVENTIONS.md`, `DEVELOPMENT_LOG.md`, `TEST_PLAN_AND_RESULTS.md`, `ISSUE_REGISTER.md`, `RELEASE_CHECKLIST.md`, `NEW_PROJECT_CHECKLIST.md`, `HANDOFF_TEMPLATE.md`.
