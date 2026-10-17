# Arquitetura e convenções — modelo reutilizável

## Tecnologias do starter (confirmadas em `package.json`)
React 19, TypeScript 5.8, Vite 6, React Router 7, Tailwind CSS 3, Axios, TanStack Query 5, Vitest 3, Testing Library e Playwright. Verificar versões efetivamente instaladas no `package-lock.json` de cada projeto.

## Separação de responsabilidades
- `pages`: composição da tela e fluxo do usuário, evitando concentrar regras complexas.
- `components/ui`: componentes visuais genéricos com props tipadas; sem chamadas HTTP.
- `components/layout`: navegação e estrutura comum.
- `api`: configuração do Axios, headers e tratamento transversal de erros.
- `services`: operações de domínio e contratos com API; não acoplar a componentes.
- `hooks`: estado e comportamentos reutilizáveis; TanStack Query quando fizer sentido.
- `auth`: sessão, permissões e guards **somente após** definir estratégia real.
- `types`: tipos compartilhados; preferir tipos próximos à feature quando específicos.
- `utils`: funções puras com testes unitários.

## Padrões de código
- Componentes React e tipos: `PascalCase`; variáveis/funções/hooks: `camelCase`; hooks começam por `use`.
- Arquivos de componentes: `PascalCase.tsx`; testes: `*.test.ts(x)` ou `*.spec.ts`.
- Não duplicar lógica: extrair quando houver repetição real, sem abstração prematura.
- Usar props e estados tipados; evitar `any` sem justificativa.
- Considerar estados `loading`, `empty`, `error`, `success` em telas com dados.
- Inputs devem ter rótulos, feedback e navegação por teclado; botões com nomes acessíveis.
- API base por `VITE_API_BASE_URL` quando aplicável; **nunca** incluir tokens secretos em `VITE_*`.
- Autorização deve ser validada no backend; proteção de rota no frontend não substitui segurança.
- Não registrar senhas, dados pessoais ou tokens em logs.

## Git e entregas
- Um repositório por produto; branches e commits pequenos com descrição objetiva.
- Exemplo: `feat: adicionar tela de cadastro`, `fix: corrigir validação de email`, `test: cobrir checkout`.
- `.env.local`, `node_modules/`, `dist/` e relatórios de teste não devem ser commitados.
- Registrar alterações relevantes em `DEVELOPMENT_LOG.md`; decisões técnicas importantes devem explicar alternativas e consequências.

## Critério de pronto de uma funcionalidade
Implementada, estados de erro cobertos, responsiva, acessível, revisada, testada de acordo com o risco, documentada e homologada. Nunca converter resultado pendente em aprovado.

## Limites deste starter
Não contém backend real, autenticação real, banco, pagamentos, nem React Native. Essas partes exigem especificação e implementação por projeto.
